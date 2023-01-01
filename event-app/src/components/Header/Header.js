import Link from 'next/link'
import logo from '../../../public/images/logoimg.png'
import Image from 'next/image'

const Header = () => {
    return (
        
            <header>
                <div className='topNav'>
                    <Image src={logo} width={50} height={50} alt="logo" />
                    <nav>
                    <ul>
                    <li><Link href="/"><img src="" alt=""/><h2>Home</h2></Link></li>
                    <li><Link href="/events"><img src="" alt=""/><h2>Events</h2></Link></li>
                    <li><Link href="/about-us"><img src="" alt=""/><h2> About-Us</h2></Link></li>
                    </ul>
                    
                    
                    
                    </nav>
                </div>
                <h1>Lorem Ipsum</h1>
            </header>
     
      );
}
 
export default Header
