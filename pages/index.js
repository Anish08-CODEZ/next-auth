import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <h2 className='text-2xl font-bold mt-10'>Upgrade your web development today</h2>
        <h3 className='mt-3'>Learn web development using latest tech!</h3>
      </main>
    </>
  )
}
