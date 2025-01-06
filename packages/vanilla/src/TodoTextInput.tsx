import classnames from "classnames"
import { useState } from "react"

interface TodoTextInputProps {
  placeholder?: string
  todoText?: string
  editing?: boolean
  newTodo?: boolean
  onSave: (text: string) => void
}

export function TodoTextInput({
  todoText,
  placeholder,
  editing,
  newTodo,
  onSave,
}: TodoTextInputProps) {
  const [text, setText] = useState(todoText || "")
  return (
    <input
      className={classnames({ edit: editing, "new-todo": newTodo })}
      type="text"
      placeholder={placeholder}
      autoFocus
      value={text}
      onBlur={(e) => {
        if (!newTodo) {
          onSave(e.target.value)
        }
      }}
      onChange={(e) => {
        setText(e.target.value)
      }}
      onKeyDown={(e) => {
        // @ts-expect-error: Idk
        const inputText = e.target.value.trim()
        if (e.which === 13) {
          onSave(inputText)
          if (newTodo) {
            setText("")
          }
        }
      }}
    />
  )
}
