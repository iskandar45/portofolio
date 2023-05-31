import Head from "next/head"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Iskandar45 | Repo of Project",
  description: "Next app repository of the project",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
