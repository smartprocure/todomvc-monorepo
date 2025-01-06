import { motion } from "framer-motion"
import { Footer } from "./Footer.tsx"
import { type Todos, useTodoContext } from "./TodoContext.tsx"
import { TodoList } from "./TodoList.jsx"

function getCompletedCount(todos: Todos) {
  return todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
}

export function MainSection() {
  const [{ todos, visibilityFilter }, dispatch] = useTodoContext()
  const todosCount = todos.length
  const completedCount = getCompletedCount(todos)
  return (
    <motion.section layout className="main">
      {!!todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            defaultChecked={completedCount === todosCount}
          />
          <label
            onClick={() =>
              dispatch({
                type: "COMPLETE_ALL",
              })
            }
          />
        </span>
      )}
      <TodoList
        todos={todos}
        visibilityFilter={visibilityFilter}
        setTodos={(todos) => dispatch({ type: "SET_TODOS", payload: todos })}
      />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={() => dispatch({ type: "CLEAR_COMPLETED" })}
        />
      )}
    </motion.section>
  )
}
