import { Reorder } from "framer-motion"
import type { State, Todos } from "./TodoContext.tsx"
import { TodoItem } from "./TodoItem.jsx"
import { getFilteredTodos } from "./util.ts"

interface TodoListProps extends State {
  setTodos: (todos: Todos) => void
}

export function TodoList({ todos, visibilityFilter, setTodos }: TodoListProps) {
  return (
    <Reorder.Group
      className="todo-list"
      axis="y"
      values={todos}
      onReorder={setTodos}
    >
      {getFilteredTodos(todos, visibilityFilter).map((todo, index) => (
        <Reorder.Item key={todo.id} value={todo}>
          <TodoItem index={index} todo={todo} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}
