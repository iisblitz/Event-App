import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img src="" alt="" />
          <a href="/"><img src="" alt="" /><h2>Home</h2></a>
          <a href="/events"><img src="" alt="" /> <h2>Events</h2></a>
          <a href="/about-us"><img src="" alt="" /><h2> About-Us</h2></a>
        </nav>
      </header>
      
      <main className={styles.main}>
        {data.map((ev: {id:string; title:string; image:string;description:string;}) => (
        <a key={ev.id} href={`/events/${ev.id}`}>
          <Image width={200} height={200} alt={ev.title} src={ev.image} /><h2>{ev.title}</h2>
          <p>{ev.description}</p></a>))}

        </main>

      
      
        <footer className={styles.footer}>
      <p> 2022 Next Js - React - Vercel Deployment by David Gonzalez learned from free code camp / time to code</p>
        </footer>
    </>
  )
}
export async function getServerSideProps(){
const {events_categories} = await import ('../Data/data.json')

  return {
      props:{
          data: events_categories

      }
  }
}