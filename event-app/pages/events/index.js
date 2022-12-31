import Image from 'next/image'
import Link from 'next/link'

const EventsPage = ({data}) => {
        return ( 
            <div>
                <h1> Events</h1>  

                
                    {data.map((ev)=> {
                       return(
                       <div>
                       <Link key={ev.id} href={`/events/${ev.id}`}>
                        
                            <Image src={ev.image} alt={ev.title} width={300} height={300}/>
                            <h2>{ev.title}</h2>
                        
                        </Link>
                        </div>
                        )
                    })}
                
            </div>
        );
        
    }
     

    export default EventsPage;

    export async function getStaticProps() {
        const { events_categories } = await import('/Data/data.json');
        return {
          props: {
            data: events_categories,
          },
        };
      }