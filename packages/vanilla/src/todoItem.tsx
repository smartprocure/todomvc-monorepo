import classnames from "classnames"
import { motion } from "framer-motion"
import { useState } from "react"
import { type Todo, useTodoContext } from "./TodoContext.tsx"
import { TodoTextInput } from "./TodoTextInput.tsx"

interface TodoItemProps {
  index: number
  todo: Todo
}

export function TodoItem({ index, todo }: TodoItemProps) {
  const [editing, setEditing] = useState(false)

  const [, dispatch] = useTodoContext()

  const handleDoubleClick = () => setEditing(true)

  return (
    <motion.div
      className={classnames({
        completed: todo.completed,
        editing,
      })}
      custom={{ delay: (index + 1) * 0.1 }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      layoutId={todo.id}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: ({ delay }) => ({
          opacity: 1,
          transition: {
            delay,
            duration: 1,
          },
        }),
      }}
    >
      {editing ? (
        <TodoTextInput
          todoText={todo.text}
          editing={editing}
          onSave={(text) => {
            if (text.length === 0) {
              dispatch({ type: "DELETE_TODO", payload: todo.id })
            } else {
              dispatch({ type: "EDIT_TODO", payload: { id: todo.id, text } })
            }
            setEditing(false)
          }}
        />
      ) : (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() =>
              dispatch({ type: "COMPLETE_TODO", payload: todo.id })
            }
          />
          <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ cursor: "pointer", scale: 1.5 }}
            type="button"
            className="destroy"
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          />
        </div>
      )}
    </motion.div>
  )
}
