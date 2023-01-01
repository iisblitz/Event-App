import Link from 'next/link'
import Image from 'next/image'


const HomePage = ({data}) => {
    return (
        <div className='home_body'>            
            <main >
                {data.map((ev) => (
                    <Link className='card' key={ev.id} href={`/events/${ev.id}`}>
                    <div className='image'>
                    <Image width={200} height={200} alt={ev.title} src={ev.image} />
                    </div>
                    <div className='content'>
                    <h2>{ev.title}</h2>
                    <p>{ev.description}</p>
                    </div>
                    </Link>
                    ))}
            </main>
        </div>
      );
}
 
export default HomePage;


