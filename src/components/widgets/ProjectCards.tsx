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
            name: "FeedbackShare app",
            description: `FeedbackShare - A feedback management tool`,
            roles: ["Frontend developer", "Designer"],
            link: "http://feedback-share.vercel.app/"
        },
        {
            name: "Lumixus Stduio",
            description: `Lumixus studio - A website for a web-design agency.`,
            roles: ["Frontend developer", "SEO manager", "Digital creative"],
            link: "https://lumixus.studio/"
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
                            <CardTitle>{name}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <div>
                                <a href={link} className="cursor-pointer flex text-sm items-center space-x-2">
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