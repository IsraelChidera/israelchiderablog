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
            roles: ["Frontend development, SEO"],
            link: "https://intercity.ng/"
        },
        {
            name: "T40 corporate website",
            description: `Corporate website for T40 technologies`,
            roles: ["Frontend development, SEO"],
            link: "https://myt40.com/"
        },
        {
            name: "Lumixus Studio",
            description: `Lumixus studio - A website for a web-design agency.`,
            roles: ["Frontend development", "SEO manager", "Digital creative"],
            link: "https://lumixus.studio/"
        },
        {
            name: "FeedbackShare app",
            description: `FeedbackShare - A feedback management tool`,
            roles: ["Frontend development", "UI design"],
            link: "http://feedback-share.vercel.app/"
        },
        {
            name: "Good Homes",
            description: `A web platform to sell and rent your properties without any commissions.`,
            roles: ["Frontend development", "Database management", "UI design"],
            link: "https://good-homes.vercel.app/"
        },
        {
            name: "Pharmabolt",
            description: `Pharmabolt is the best place to get your 
            medication delivered at your door without delay or 
            hassle and book appointment with professionals`,
            roles: ["Frontend development", "UI design", "Database management"],
            link: "https://pharmaboltapp.vercel.app/"
        },
    ]

    return (
        <div className='mt-4 space-y-6 pb-20'>
            {
                projects.map(({ name, description, roles, link }) => (
                    <div key={name}>
                        {/* <div className="bg-white h-4 w-full">

                        </div> */}
                        <div className='bg-[#242629] text-white '>
                            <CardHeader>
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