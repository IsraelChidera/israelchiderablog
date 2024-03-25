import { useState, useEffect } from 'react';

const FloatingButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        // Calculate the height of the first 100vh in pixels
        const first100vh = window.innerHeight * 100 / 100;

        // Check if the scroll position exceeds the first 100vh
        if (window.scrollY > first100vh) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-[140px] md:right-4 right-4 p-4 md:p-3 shadow-sm z-30 drop-shadow-2xl rounded-full bg-white animate-bounce text-white ${showButton ? 'block' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <svg className='w-8 h-8' fill='#0C111D' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
        </button>
    );
};

export default FloatingButton;