import { useState } from 'react';
import Container from './Elements/Container';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleMobileMenu = () => {
        setOpen(e => !e)
    }

    return (
        <nav className='relative h-[10vh] flex justify-center items-center'>
            <Container className='flex justify-between items-center'>
                <a href="/">
                    <img className='w-16 ' src="/logo.png" alt="israel chidera" />
                </a>

                <ul className='hidden md:flex space-x-10'>
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

                <div className='md:hidden block'>
                    <svg onClick={handleMobileMenu} className=' w-6 h-6' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </div>

                {/* Mobile menu */}
                {
                    open && <div className='md:hidden fixed top-0 left-0 w-full bg-primary z-50 px-4 py-4 '>
                        <div className='flex justify-between items-center'>
                            <a  onClick={() => setOpen(false)} href="/">
                                <img className='w-16 ' src="/logo.png" alt="israel chidera" />
                            </a>

                            <div>
                                <svg onClick={handleMobileMenu} className='md:hidden block w-6 h-6' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                            </div>
                        </div>

                        <ul className='pt-6 flex flex-col space-y-6'>
                            <li onClick={() => setOpen(false)}>
                                <a href="/about" className='hover:text-white hover:opacity-100'> About </a>
                            </li>

                            <li onClick={() => setOpen(false)}>
                                <a href="/blog" className='hover:text-white hover:opacity-100'> Blog </a>
                            </li>

                            <li onClick={() => setOpen(false)}>
                                <a href="/newsletter" className='hover:text-white hover:opacity-100'> Newsletter </a>
                            </li>
                        </ul>
                    </div>
                }

            </Container>
        </nav>
    )
}

export default Navbar