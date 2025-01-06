import { motion } from "framer-motion"
import { useTodoContext } from "./TodoContext.tsx"
import { TodoTextInput } from "./TodoTextInput.jsx"

export function Header() {
  const [, dispatch] = useTodoContext()
  return (
    <header className="header">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        todos
      </motion.h1>
      <TodoTextInput
        newTodo
        placeholder="What needs to be done?"
        onSave={(text) => {
          if (text.length !== 0) {
            dispatch({ type: "ADD_TODO", payload: { text } })
          }
        }}
      />
    </header>
  )
}
