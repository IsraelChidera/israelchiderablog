import Container from './Elements/Container';

const Hero = () => {
    return (
        <header className="hero-img">
            <Container>
                <section>

                    <div className='h-[90vh] flex items-center justify-center'>
                        <div className='text-center md:w-4/5'>
                            <h1 className='font-semibold text-[72px] text-white'>
                                Israel Chidera
                            </h1>
                            <h2 className='mb-4 -mt-5 text-2xl text-white'>Code and Content - Bridging the gap between tech & user.</h2>
                            <p className='text-[20px]' style={{ lineHeight: "145%" }}>
                                I build{" "}
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block">
                                    <span className="relative text-white">digital products, </span>
                                </span>{" "}
                                brands, and create awesome
                                {" "}
                                <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-pink-500 relative inline-block">
                                    <span className="relative text-white">user experience. </span>
                                </span>{" "}
                                Welcome to my space
                            </p>

                            <p>

                            </p>

                            <div className='mt-4 flex justify-center items-center '>
                                <div className="flex items-center mt-2 justify-center">
                                    <div className="flex space-x-5 items-center">
                                        <a href="mailto:israelchidera@gmail.com">
                                            <svg
                                                className="w-[20px] h-[20px]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                                                ></path></svg>

                                        </a>

                                        <a href="">
                                            <svg
                                                className="w-[20px] h-[20px] hover:opacity-70 opacity-100 cursor-pointer"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                                ></path></svg>

                                        </a>

                                        <a href="#">
                                            <svg
                                                className="w-[20px] h-[20px] hover:opacity-70 opacity-100 cursor-pointer"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                                ></path></svg>

                                        </a>

                                        <a href="#">
                                            <svg
                                                className="w-[20px] h-[20px] hover:opacity-70 opacity-100 cursor-pointer"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                                                ></path></svg>

                                        </a>

                                        <a href="#">
                                            <svg
                                                className="w-[20px] h-[20px] hover:opacity-70 opacity-100 cursor-pointer"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 496 512"
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                                ></path></svg>

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='text-white text-base mb-3'>What I do . . .</p>
                        <div className='md:flex justify-between'>
                            <p className='md:w-2/3 text-[20px] md:text-[34px] hover:text-white transition ease-in '>
                                Combining aesthetics and usability, I create solid user
                                interfaces in an artistic way. I love to spend time
                                improving the aesthetics, performance and optimization
                                of digital products without
                                forgetting about usability.
                                My passion lies at the intersection of code and clarity.                                
                                When I'm not creating pixel-perfect designs, you'll find me crafting user-friendly
                                technical articles and championing the power of open-source
                            </p>

                            <ul className='mt-10 md:mt-0 md:text-right'>
                                <li className='hover:text-white text-white transition ease-in'>
                                    Interest
                                </li>
                                <li className='hover:text-white transition ease-in'>
                                    Frontend development
                                </li>
                                <li className='hover:text-white transition ease-in'>
                                    SEO
                                </li>
                                <li className='hover:text-white transition ease-in'>
                                    Web performance
                                </li>
                                <li className='hover:text-white transition ease-in'>
                                    Conversion rate optimization
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='mt-20 mb-20'>
                        <p className='text-white text-base mb-3'>Projects</p>

                        <div className='space-y-10'>
                            <div className='group'>
                                <div className='rounded-2xl border group-hover:border-white transition-all ease-linear border-tertiary px-6 py-6'>
                                    <div className='md:grid grid-cols-4 gap-x-4 '>
                                        <p className='md:text-lg group-hover:text-white transition-all ease-linear'>
                                            Lumixus Studio
                                        </p>

                                        <p className='col-span-2 md:text-lg group-hover:text-white transition-all ease-linear'>
                                            Lumixus studio - A website for a web-design agency.
                                        </p>

                                        <div className='mt-2 md:mt-0 flex md:justify-end space-x-3 items-center md:space-x-3 '>
                                            <a href="https://www.lumixus.studio/" target='_blank' className='transition-all ease-linear group-hover:text-white text-2xl'>
                                                ↗
                                            </a>
                                        </div>
                                    </div>

                                    <div className='mt-2 text-sm'>
                                        <ul className='flex flex-wrap items-center md:space-y-0 gap-y-2 md:gap-x-0 gap-x-2 md:space-x-4'>
                                            <li className='group-hover:text-white transition-all ease-linear underline'>Role</li>
                                            <li>Frontend developer</li>
                                            <li>SEO</li>
                                            <li>Digital creative</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='group'>
                                <div className='rounded-2xl border group-hover:border-white transition-all ease-linear border-tertiary px-6 py-6'>
                                    <div className='md:grid grid-cols-4 gap-x-4 '>
                                        <p className='md:text-lg group-hover:text-white transition-all ease-linear'>
                                            Pharmabolt
                                        </p>

                                        <p className='col-span-2 md:text-lg group-hover:text-white transition-all ease-linear'>
                                            Pharmabolt is the best place to get your medication delivered at your door without delay or hassle
                                            and book appointment with professionals
                                        </p>

                                        <div className='mt-2 md:mt-0 flex md:justify-end space-x-3 items-center md:space-x-3 '>
                                            <a href="https://github.com/IsraelChidera/pharmabolt" target='_blank'>
                                                <svg fill="#fff" className='w-6 transition-all ease-linear group-hover:stroke-white cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                            </a>
                                            <a href="https://pharmaboltapp.vercel.app/" target='_blank' className='transition-all ease-linear group-hover:text-white text-2xl'>
                                                ↗
                                            </a>
                                        </div>
                                    </div>

                                    <div className='mt-2 text-sm'>
                                        <ul className='flex flex-wrap items-center md:space-y-0 gap-y-2 md:gap-x-0 gap-x-2 md:space-x-4'>
                                            <li className='group-hover:text-white transition-all ease-linear underline'>Role</li>
                                            <li>Frontend developer</li>
                                            <li>Designer</li>
                                            <li>Database management</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='group'>
                                <div className='rounded-2xl border group-hover:border-white transition-all ease-linear border-tertiary px-6 py-6'>
                                    <div className='md:grid grid-cols-4 gap-x-4 '>
                                        <p className='md:text-lg group-hover:text-white transition-all ease-linear'>
                                            Focus-vest app
                                        </p>

                                        <p className='col-span-2 md:text-lg group-hover:text-white transition-all ease-linear'>
                                            Focus-vest app empowers you to supercharge your productivity
                                        </p>

                                        <div className='mt-2 md:mt-0 flex md:justify-end space-x-3 items-center md:space-x-3 '>
                                            <a href="https://github.com/IsraelChidera/focus-app" target='_blank'>
                                                <svg fill="#fff" className='w-6 transition-all ease-linear group-hover:stroke-white cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                            </a>
                                            <a href="https://focus-vest.netlify.app/" target='_blank' className='transition-all ease-linear group-hover:text-white text-2xl'>
                                                ↗
                                            </a>
                                        </div>
                                    </div>

                                    <div className='mt-2 text-sm'>
                                        <ul className='flex flex-wrap items-center md:space-y-0 gap-y-2 md:gap-x-0 gap-x-2 md:space-x-4'>
                                            <li className='group-hover:text-white transition-all ease-linear underline'>Role</li>
                                            <li>Frontend developer</li>
                                            <li>Designer</li>
                                            <li>Database management</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='group'>
                                <div className='rounded-2xl border group-hover:border-white transition-all ease-linear border-tertiary px-6 py-6'>
                                    <div className='md:grid grid-cols-4 gap-x-4 '>
                                        <p className='md:text-lg group-hover:text-white transition-all ease-linear'>
                                            Icy store
                                        </p>

                                        <p className='col-span-2 md:text-lg group-hover:text-white transition-all ease-linear'>
                                            Icy store - An online ecommerce store
                                        </p>

                                        <div className='mt-2 md:mt-0 flex md:justify-end space-x-3 items-center md:space-x-3 '>
                                            <a href="https://github.com/IsraelChidera/icy-store" target='_blank'>
                                                <svg fill="#fff" className='w-6 transition-all ease-linear group-hover:stroke-white cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                            </a>
                                            <a href="https://icystore.vercel.app/" target='_blank' className='transition-all ease-linear group-hover:text-white text-2xl'>
                                                ↗
                                            </a>
                                        </div>
                                    </div>

                                    <div className='mt-2 text-sm'>
                                        <ul className='flex flex-wrap items-center md:space-y-0 gap-y-2 md:gap-x-0 gap-x-2 md:space-x-4'>
                                            <li className='group-hover:text-white transition-all ease-linear underline'>Role</li>
                                            <li>Frontend developer</li>
                                            <li>Designer</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='group'>
                                <div className='rounded-2xl border group-hover:border-white transition-all ease-linear border-tertiary px-6 py-6'>
                                    <div className='md:grid grid-cols-4 gap-x-4 '>
                                        <p className='md:text-lg group-hover:text-white transition-all ease-linear'>
                                            FeedbackShare app
                                        </p>

                                        <p className='col-span-2 md:text-lg group-hover:text-white transition-all ease-linear'>
                                            FeedbackShare - A feedback management tool
                                        </p>

                                        <div className='mt-2 md:mt-0 flex md:justify-end space-x-3 items-center md:space-x-3 '>
                                            <p className='text-sm text-secondary group-hover:text-white underline'>
                                                coming soon ↗
                                            </p>
                                        </div>
                                    </div>

                                    <div className='mt-2 text-sm'>
                                        <ul className='flex flex-wrap items-center md:space-y-0 gap-y-2 md:gap-x-0 gap-x-2 md:space-x-4'>
                                            <li className='group-hover:text-white transition-all ease-linear underline'>Role</li>
                                            <li>Frontend developer</li>
                                            <li>Designer</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </header>
    )
}

export default Hero