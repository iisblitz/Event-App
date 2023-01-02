import Link from 'next/link'
import logo from '../../../public/images/logoimg.png'
import Image from 'next/image'

const Header = () => {
    return (
        
      <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={logo} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                   Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                   About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Sed ut perspiciatis unde omnis</p>
      </div>
    </header>
     
      );
}
 
export default Header
