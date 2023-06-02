import {
  ClockApp,
  ICJavascript,
  ICNextIcon,
  ICPreact,
  ICReact,
  ICTailwindcss,
  ICTypescript,
  TodoApp,
} from "@/assets"
export const mockData = [
  {
    id: 98,
    image: ClockApp,
    title: "Preact Clock Digital",
    linkRepo: "https://github.com/Iskandar45/clock-app",
    linkPreview: "https://iskandar-clock-app.vercel.app/",
    description:
      "This simple Digital clock is built using Preact. This application will show the clock",
    madeWith: [
      {
        id: 0,
        name: "Typescript",
        link: "https://typescriptjs.org/",
        icon: ICTypescript,
      },
      {
        id: 1,
        name: "React",
        link: "https://reactjs.org/",
        icon: ICReact,
      },
      {
        id: 2,
        name: "Preact",
        link: "https://preactjs.org/",
        icon: ICPreact,
      },
    ],
  },
  {
    id: 98,
    image: TodoApp,
    title: "Weather App",
    linkRepo: "https://github.com/Iskandar45/weather-app",
    linkPreview: "https://iskandar-weather-app.vercel.app/",
    description:
      "This simple Weather application is built using Nextjs. This application will show the weather",
    madeWith: [
      {
        id: 0,
        name: "Typescript",
        link: "https://typescriptjs.org/",
        icon: ICTypescript,
      },
      {
        id: 1,
        name: "React",
        link: "https://reactjs.org/",
        icon: ICReact,
      },
      {
        id: 2,
        name: "Nextjs",
        link: "https://nextjs.org/",
        icon: ICNextIcon,
      },
      {
        id: 3,
        name: "Tailwindcss",
        link: "https://tailwindcss.com/",
        icon: ICTailwindcss,
      },
    ],
  },
  {
    id: 99,
    image: TodoApp,
    title: "Todo App",
    linkRepo: "https://github.com/Iskandar45/todo-app",
    linkPreview: "https://todo-app-iskandar.vercel.app/",
    description:
      "This simple Todo List application is built using React. This application allows users to add, edit and delete tasks in the list. By using components such as TodoForm, TodoItem, and TodoList, users can easily manage their tasks.",
    madeWith: [
      {
        id: 0,
        name: "Javascript",
        link: "https://javascript.com/",
        icon: ICJavascript,
      },
      {
        id: 1,
        name: "React",
        link: "https://reactjs.org/",
        icon: ICReact,
      },
    ],
  },
]
