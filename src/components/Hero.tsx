import Container from './Elements/Container';

const Hero = () => {
    return (
        <header className=" hero-img">
            <Container>
                <nav className='flex justify-between mt-3 items-center'>
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
                </nav>

                <section>

                    <div className='h-[80vh] flex items-center justify-center'>
                        <div className='text-center w-4/5'>
                            <h1 className='font-semibold text-[72px] text-white'>
                                Israel Chidera
                            </h1>
                            <p className='text-[20px]' style={{ lineHeight: "145%" }}>
                                Zenith is a multipurpose Ghost theme designed to
                                empower you in creating a truly personalized and
                                captivating blog experience.
                            </p>

                            <form className='mt-4 flex justify-center items-center '>
                                <div className='relative w-fit '>
                                    <svg className='absolute top-3 left-2' xmlns="http://www.w3.org/2000/svg" fill='#94969C' height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                    <input type="text" placeholder='Search blog' className='relative pl-10 py-2 text-teriary bg-transparent border border-tertiary rounded-md'/>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>
            </Container>
        </header>
    )
}

export default Hero