import { Inter } from '@next/font/google'
import HomePage from '../src/components/Home/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      
      
      <HomePage data={data}/>

      
      

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