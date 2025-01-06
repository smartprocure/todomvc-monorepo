import { Header } from "./Header.tsx"
import { MainSection } from "./MainSection.tsx"
import { type State, TodoProvider } from "./TodoContext.tsx"
import { reducer } from "./reducer.ts"

const initialState: State = {
  visibilityFilter: "All",
  todos: [
    {
      id: "b967afe24b23",
      text: "React Hooks",
      completed: false,
    },
    {
      id: "43286487fhsdjasd",
      text: "Viva la comunidad de Midu ORALE",
      completed: true,
    },
    {
      id: "54937fhajd",
      text: "Hooooola Twitch!",
      completed: false,
    },
    {
      id: "43242341aaaaa",
      text: "Context",
      completed: true,
    },
    {
      id: "b967afe24a13",
      text: "BUA BUA BUA BUA",
      completed: true,
    },
  ],
}

export function App() {
  return (
    <TodoProvider initialState={initialState} reducer={reducer}>
      <div>
        <Header />
        <MainSection />
      </div>
    </TodoProvider>
  )
}
