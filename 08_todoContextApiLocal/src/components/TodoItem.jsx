import React, { useState } from 'react'
import { useTodo } from '../contexts'

export default function TodoItem({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todomsg, setTodomsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todomsg})
    setIsTodoEditable(false)
  }

  const toggleCheckbox = () => {
    toggleComplete(todo.id)
  }

  const deleteItem = () => {
    deleteTodo(todo.id)
  }


  return (
    <>
     <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.complete}
              onChange={toggleCheckbox}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.complete ? "line-through" : ""}`}
              value={todomsg}
              onChange={(e) => setTodomsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.complete) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.complete}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={deleteItem}
          >
              ❌
          </button>
      </div>
    </>
  )
}
