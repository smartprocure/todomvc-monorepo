import type { Todos, VisibilityFilter } from "./TodoContext.tsx"

export function getFilteredTodos(
  todos: Todos,
  visibilityFilter: VisibilityFilter,
) {
  switch (visibilityFilter) {
    case "All":
      return todos
    case "Completed":
      return todos.filter((t) => t.completed)
    case "Active":
      return todos.filter((t) => !t.completed)
    default:
      throw new Error(`Unknown filter: ${visibilityFilter}`)
  }
}

export function getCompletedCount(todos: Todos) {
  return todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
}
