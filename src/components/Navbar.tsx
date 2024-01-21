import Container from './Elements/Container';

const Navbar = () => {
    return (
        <nav className=' mt-3'>
            <Container className='flex justify-between items-center'>
                <a href="/">
                    <img className='w-16 ' src="/logo.png" alt="israel chidera" />
                </a>

                <ul className='flex space-x-10'>
                    <li>
                        <a href="/about" className='hover:text-white hover:opacity-100'> About </a>
                    </li>

                    <li>
                        <a href="/blog" className='hover:text-white hover:opacity-100'> Blog </a>
                    </li>

                    <li>
                        <a href="/newsletter" className='hover:text-white hover:opacity-100'> Newsletter </a>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar