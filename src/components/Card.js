import Image from "next/image"
import React from "react"
import { ICGithub, ICReact, ICTailwindcss, TodoApp } from "@/assets"
import { mockData } from "./mockData"

function Card() {
  return mockData.map((data) => {
    return (
      <div className="border border-slate-300 rounded shadow" key={data.id}>
        <a href={data.linkPreview} target="_blank" rel="noreferrer">
          <div className="relative w-full h-48 rounded-t overflow-hidden">
            <Image
              src={data.image}
              layout="fill"
              objectFit="cover"
              className="rounded-t hover:opacity-70 cursor-pointer"
              alt={data.title}
            />
          </div>
        </a>
        <div className="px-6 py-4">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
            {data.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-200 overflow-hidden text-ellipsis whitespace-nowrap">
            {data.description}
          </p>
          <div className="flex justify-end mt-3">
            {data.madeWith &&
              data.madeWith.map((made) => (
                <a href={made.link} target="_blank" rel="noreferrer" key={made.id}>
                  <Image
                    src={made.icon}
                    width={30}
                    height={30}
                    className="mr-2 mb-2"
                    alt={made.name}
                    title={made.name}
                  />
                </a>
              ))}
          </div>
          <a
            href={data.linkRepo}
            target="_blank"
            rel="noreferrer"
            className="flex bg-slate-300 dark:bg-slate-800 text-center justify-center items-center gap-3 w-full p-2 border border-slate-300 rounded hover:invert"
          >
            <Image src={ICGithub} width={30} height={30} alt="github" />
            <span className="text-lg text-slate-700 dark:text-slate-200">Github</span>
          </a>
        </div>
      </div>
    )
  })
}

export default Card
