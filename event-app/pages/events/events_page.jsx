import React from 'react'
import Image from 'next/image'
import pageName from ''

export const AllEvents = ({data}) => {
  return (
    <div>
        <div className='events_page'>
            <h1> {pageName}</h1>  
                <div>
                    {data.map((ev) => 
                    (
                    <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                        <Image width={300} height={300} alt={ev.title} src={ev.image}/>
                        <h2> {ev.title}</h2>
                        <p>{ev.description}</p>
                    </Link>
                    )
                )}
            </div>
     </div>
    </div>
  )
}
