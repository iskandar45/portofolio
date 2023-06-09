"use client"
import { MyPhoto } from "@/assets"
import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Transition } from "@headlessui/react"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    // Mengatur isLoaded menjadi true setelah beberapa saat (misalnya 1 detik)
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    // Membersihkan timer saat komponen tidak lagi digunakan
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <Transition
        show={isLoaded}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <main className="flex  dark:bg-slate-900 dark:text-slate-100 min-h-screen flex-col items-center justify-between ">
          <div className="p-24 md:px-32 lg:px-48">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={MyPhoto}
                className="border rounded-full text-center shadow shadow-slate-500"
                width={200}
                alt="My Photo"
              />
              <h4 className="text-4xl font-bold text-center my-3 text-slate-700 dark:text-slate-100">
                It&apos;s me, Iskandar45{" "}
                <span className="animate-ping absolute opacity-75 inline-flex">👋</span>
                <span className="">👋</span>
              </h4>
            </div>
            <p className="text-center text-slate-700 dark:text-slate-100 italic mb-5 sm:px-0 lg:px-32">
              I have a keen interest in website development. I frequently contribute to small
              projects and enjoy expanding my knowledge. I am enthusiastic about making valuable
              contributions and actively seeking opportunities to learn and grow.
            </p>
            <hr />
            <p className="text-2xl text-center my-5">Something I&apos;ve ever done</p>
            <hr />

            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-5">
              <Card />
            </div>
          </div>
          <div>
            <p className="italic text-sm mb-24">It&apos;s not much, but it&apos;s done honestly</p>
          </div>
          <Footer />
        </main>
      </Transition>
    </>
  )
}
