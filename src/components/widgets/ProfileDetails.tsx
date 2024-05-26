

const ProfileDetails = () => {
    return (
        <div className='text-[40px] text-[#646b73] flex flex-wrap'>
            <span className="word">I'm </span>
            <span className="word"> Israel Chidera </span>
            <div className='flex items-center justify-center word'>
                <img
                    src="/israelchidera.jpg"
                    className='w-[60px] h-[60px] rounded-full'
                    alt="Israel chidera's profile picture"
                />
            </div>
            <span className="word text-white">
                — a Frontend {" "}
            </span>
            <span className="word text-white">
                Engineer 
            </span>
            {/* <span className="word text-white">
                interface
            </span>
            <span className="word text-white">
                designer
            </span> */}
            <span className="word">from</span>
            <span className="word">Lagos </span>
            <span className="word">Nigeria, </span>
            <span className="word">focusing on</span>
            <span className="word">building </span>
            <span className="word text-white">optimized & </span>
            <span className="word">functional </span>
            <span className="word">websites that</span>
            <span className="word">will </span>
            <span className="word text-white">increase </span>
            <span className="word text-white">conversion </span>
            <span className="word">and </span>
            <span className="word">help </span>
            <span className="word">reach </span>
            <span className="word text-white">customers. </span>
        </div>
    )
}

export default ProfileDetails