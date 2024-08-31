import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const ProjectCards = () => {

    const projects = [
        {
            name: "Intercity Web",
            description: `Web app to book cheapest bus tickets online in Nigeria.`,
            roles: ["Next JS", "Tailwind CSS", "Framer motion", "Context API", "Laravel"],
            link: "https://intercity.ng/",
            img: "/intercity.png",
        },
        {
            name: "T40 corporate website",
            description: `Corporate website for T40 technologies`,
            roles: ["Next Js", "Tailwind CSS", "Framer motion"],
            link: "https://myt40.com/",
            img: "/project2.png",
        },
        {
            name: "Lumixus Studio",
            description: `Lumixus studio - A website for a web-design agency.`,
            roles: ["Next Js", "Tailwind CSS", "Framer motion", "Chat API"],
            link: "https://lumixus.studio/",
            img: "/lumixus.png",
        },
        {
            name: "FeedbackShare app",
            description: `FeedbackShare - A feedback management tool`,
            roles: ["Next Js", "Tailwind CSS", "Framer motion", "Supabase", "PostgreSQL"],
            link: "http://feedback-share.vercel.app/",
            img: "/feedback-share.png",
        },
        {
            name: "Good Homes",
            description: `A web platform to sell and rent your properties without any commissions.`,
            roles: ["Next Js", "Tailwind CSS", "Sanity CMS", "Framer motion"],
            link: "https://good-homes.vercel.app/",
            img: "/good-homes.png",
        },
        {
            name: "Pharmabolt",
            description: `Pharmabolt is the best place to get your 
            medication delivered at your door without delay or 
            hassle and book appointment with professionals`,
            roles: ["Next Js", "Tailwind CSS", "Framer motion", "Firebase Auth", "Firestore"],
            link: "https://pharmaboltapp.vercel.app/",
            img: "/pharmabolt.png",
        },
    ]

    return (
        <div className='mt-4 space-y-6 pb-20'>
            {
                projects.map(({ name, description, roles, link, img }) => (
                    <div key={name}>

                        <div className='bg-[#242629] text-white '>
                            <CardHeader>
                                <div className="w-full">
                                    <img className="h-[230px]" src={img} alt="project by Israel Chidera" />
                                </div>
                                <CardTitle>
                                    <a href={link} target="_blank">
                                        {name}
                                    </a>
                                </CardTitle>
                                <CardDescription>{description}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <div>
                                    <a href={link} target="_blank" className="cursor-pointer flex text-sm items-center space-x-2">
                                        <p>Link</p>
                                        <p>↗</p>
                                    </a>
                                </div>
                            </CardFooter>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectCards