import classnames from "classnames"
import type { ReactNode } from "react"
import { type VisibilityFilter, useTodoContext } from "./TodoContext.tsx"

interface FilterLinkProps {
  children: ReactNode
  filter: VisibilityFilter
}

export function FilterLink({ children, filter }: FilterLinkProps) {
  const [{ visibilityFilter }, dispatch] = useTodoContext()
  return (
    <a
      href="#"
      type="button"
      className={classnames({ selected: filter === visibilityFilter })}
      style={{ cursor: "pointer" }}
      onClick={() => dispatch({ type: "SET_VISIBILITY", payload: filter })}
    >
      {children}
    </a>
  )
}
