import React, {
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
  type Reducer,
} from "react"

export interface Todo {
  id: string
  text: string
  completed: boolean
}

export type Todos = Todo[]

export type Action =
  | { type: "ADD_TODO" | "EDIT_TODO"; payload: Partial<Todo> }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "COMPLETE_ALL" }
  | { type: "COMPLETE_TODO"; payload: string }
  | { type: "CLEAR_COMPLETED" }
  | { type: "CLEAR_ALL" }
  | { type: "SET_VISIBILITY"; payload: VisibilityFilter }
  | { type: "SET_TODOS"; payload: Todos }

export type VisibilityFilter = "All" | "Active" | "Completed"

export const visibilityFilters: VisibilityFilter[] = [
  "All",
  "Active",
  "Completed",
]

export type State = {
  todos: Todos
  visibilityFilter: VisibilityFilter
}

type ContextValue = [State, Dispatch<Action>]

export const TodoContext = React.createContext<ContextValue | null>(null)

interface TodoProviderProps {
  reducer: Reducer<State, Action>
  initialState: State
  children: ReactNode
}

export function TodoProvider({
  reducer,
  initialState,
  children,
}: TodoProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  )
}

export function useTodoContext() {
  const value = useContext(TodoContext)
  if (!value) {
    throw new Error("No context")
  }
  return value
}
