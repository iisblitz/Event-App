import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <img src="" alt="" />
                    <Link href="/"><img src="" alt=""/><h2>Home</h2></Link>
                    <Link href="/events"><img src="" alt=""/><h2>Events</h2></Link>
                    <Link href="/about-us"><img src="" alt=""/><h2> About-Us</h2></Link>
                </nav>
            </header>
        </div>
      );
}
 
export default Header
