import Container from './Elements/Container';

const Navbar = () => {
    return (
        <nav className=' mt-3'>
            <Container className='flex justify-between items-center'>
                <div>
                    <img className='w-16 ' src="/logo.png" alt="israel chidera" />
                </div>

                <ul className='flex space-x-10'>
                    <li>
                        <a href="#" className='hover:text-white hover:opacity-100'> About </a>
                    </li>

                    <li>
                        <a href="#" className='hover:text-white hover:opacity-100'> Blog </a>
                    </li>

                    <li>
                        <a href="#" className='hover:text-white hover:opacity-100'> Newsletter </a>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar