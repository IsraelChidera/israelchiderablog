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
            roles: ["Frontend engineer"],
            link: "https://intercity.ng/"
        },
        {
            name: "Lumixus Studio",
            description: `Lumixus studio - A website for a web-design agency.`,
            roles: ["Frontend developer", "SEO manager", "Digital creative"],
            link: "https://lumixus.studio/"
        },
        {
            name: "FeedbackShare app",
            description: `FeedbackShare - A feedback management tool`,
            roles: ["Frontend developer", "Designer"],
            link: "http://feedback-share.vercel.app/"
        },
        {
            name: "Good Homes",
            description: `A web platform to sell and rent your properties without any commissions.`,
            roles: ["Frontend engineer", "Database management", "designer"],
            link: "https://good-homes.vercel.app/"
        },
        {
            name: "Pharmabolt",
            description: `Pharmabolt is the best place to get your 
            medication delivered at your door without delay or 
            hassle and book appointment with professionals`,
            roles: ["Frontend developer", "Designer", "Database management"],
            link: "https://pharmaboltapp.vercel.app/"
        },
    ]

    return (
        <div className='mt-4 space-y-6 pb-20'>
            {
                projects.map(({ name, description, roles, link }) => (
                    <Card key={name} className='bg-[#242629] text-white '>
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
                    </Card>
                ))
            }
        </div>
    )
}

export default ProjectCards