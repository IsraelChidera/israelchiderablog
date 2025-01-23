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
            name: "Custom Website Template for Transport Operators",
            description: `The project involved creating an intuitive online ticket booking system that streamlined the purchase process, integrating real-time seat availability to keep customers informed, and designing custom schedules for easy management and updates (currently used by two transport operators)`,
            roles: ["Next JS", "Tailwind CSS", "Framer motion", "Context API", "Laravel", "PayStack API", "Monnify API"],
            link: "https://custom-web.cap.myt40.com/",
            img: "/custom-website.png",
        },
        {
            name: "Intercity Web",
            description: `Web app to book Cheap Interstate Bus tickets Online in Nigeria`,
            roles: ["Next JS", "Tailwind CSS", "Framer motion", "Context API", "Laravel"],
            link: "https://intercity.ng/",
            img: "/intercity.png",
        },
        {
            name: "T40 corporate website",
            description: `Corporate website for T40 technologies. T40 Technologies provides innovative software solutions for transportation companies in Nigeria.`,
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
            name: "Graft Web",
            description: `Landing page for an AI-powered text generator for customized, industry-specific, and multilingual content`,
            roles: ["Next Js", "Tailwind CSS", "Framer motion"],
            link: "https://graft.live/",
            img: "/graft.png",
        },
        {
            name: "RDJ Estates",
            description: `Landing page for RDJ Estates - Find Your Sustainable Dream Home`,
            roles: ["Next Js", "Tailwind CSS", "Framer motion"],
            link: "https://rdjestates.com/",
            img: "/rdj-estates.png",
        },
        {
            name: "Good Homes",
            description: `A web platform to sell and rent your properties without any commissions.`,
            roles: ["Next Js", "Tailwind CSS", "Sanity CMS", "Framer motion", "Paystack API"],
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
                                <p className="text-xs">
                                    {roles.map((role: any) => (
                                        <span>{role} | </span>
                                    ))}
                                </p>
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