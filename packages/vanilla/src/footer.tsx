import { FilterLink } from "./FilterLink.tsx"
import { visibilityFilters } from "./TodoContext.tsx"

interface FooterProps {
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
}

export function Footer({
  activeCount,
  completedCount,
  onClearCompleted,
}: FooterProps) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong>{" "}
        {activeCount === 1 ? "item" : "items"} left
      </span>
      <ul className="filters">
        {visibilityFilters.map((filter) => (
          <li key={filter}>
            <FilterLink filter={filter}>{filter}</FilterLink>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button
          type="button"
          className="clear-completed"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )}
    </footer>
  )
}
