import Image from "next/image"
import React from "react"
import { ICGithub, ICReact, TodoApp } from "@/assets"

function Card() {
  return (
    <div className="border border-slate-300 rounded shadow">
      <a href="https://todo-app-iskandar.vercel.app/" target="_blank" rel="noreferrer">
        <Image
          src={TodoApp}
          width="100%"
          className="rounded-t hover:opacity-70 cursor-pointer"
          alt="Todo App"
        />
      </a>
      <div className="px-6 py-4">
        <h3 className="text-2xl font-semibold text-slate-800">Todo App</h3>
        <p className="text-slate-600 overflow-hidden text-ellipsis whitespace-nowrap ">
          This simple Todo List application is built using React. This application allows users to
          add, edit and delete tasks in the list. By using components such as TodoForm, TodoItem,
          and TodoList, users can easily manage their tasks.
        </p>
        <div className="flex justify-end mt-3">
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <Image src={ICReact} width={50} className="" alt="logo react" />
          </a>
        </div>
        <a
          href="https://github.com/Iskandar45/todo-app"
          target="_blank"
          rel="noreferrer"
          className="flex text-center justify-center items-center gap-3 w-full p-2 border border-slate-300 rounded hover:bg-slate-200"
        >
          <Image src={ICGithub} width={30} alt="github" />
          <span className="text-lg text-slate-700">Github</span>
        </a>
      </div>
    </div>
  )
}

export default Card
