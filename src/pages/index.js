import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Renting Essentials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <center>
        <div>
          <h1>Renting Essentials</h1>
        </div>
      </center>
    </>
  )
}
