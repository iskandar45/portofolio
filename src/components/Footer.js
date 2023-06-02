import { ICEnvelope, ICGithub, ICNextjs } from "@/assets"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-slate-800 py-2 px-8 w-full flex items-center justify-between">
      <div className="flex items-center justify-center">
        <p className="text-gray-600 dark:text-slate-100 mr-2">Made with</p>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <Image className="dark:invert" src={ICNextjs} width={60} alt="Next js" />
        </a>
      </div>
      <div className="flex gap-5 dark:invert ">
        <a href="https://github.com/iskandar45" target="_blank" rel="noreferrer">
          <Image src={ICGithub} width={30} alt="Iskandar45" />
        </a>

        <a href="mailto:imam.stmik15@gmail.com" target="_blank" rel="noreferrer">
          <Image src={ICEnvelope} width={30} alt="imam.stmik15@gmail.com" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
