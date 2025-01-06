import type { Action, State } from "./TodoContext.tsx"

export function reducer(state: State, action: Action) {
  const { todos, visibilityFilter } = state
  switch (action.type) {
    case "ADD_TODO": {
      return {
        todos: [
          {
            id: Math.random().toString(16).substring(2),
            completed: false,
            text: action.payload.text,
          },
          ...todos,
        ],
        visibilityFilter,
      }
    }
    case "EDIT_TODO": {
      return {
        todos: todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo,
        ),
        visibilityFilter,
      }
    }
    case "DELETE_TODO": {
      return {
        todos: todos.filter((todo) => todo.id !== action.payload),
        visibilityFilter,
      }
    }
    case "COMPLETE_TODO": {
      return {
        todos: todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
        visibilityFilter,
      }
    }
    case "COMPLETE_ALL": {
      const areAllMarked = todos.every((todo) => todo.completed)
      const result = {
        todos: todos.map((todo) => ({ ...todo, completed: !areAllMarked })),
        visibilityFilter,
      }
      return result
    }
    case "CLEAR_COMPLETED": {
      return {
        todos: todos.filter((t) => t.completed === false),
        visibilityFilter,
      }
    }
    case "CLEAR_ALL": {
      return {
        todos: [],
        visibilityFilter,
      }
    }
    case "SET_VISIBILITY": {
      return {
        todos: [...todos],
        visibilityFilter: action.payload,
      }
    }
    case "SET_TODOS": {
      return {
        todos: [...action.payload],
        visibilityFilter,
      }
    }
    default:
      return state
  }
}
