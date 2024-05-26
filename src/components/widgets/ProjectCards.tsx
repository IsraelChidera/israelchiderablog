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
        },
        {
            name: "Lumixus Stduio",
            description: `Lumixus studio - A website for a web-design agency.`,
            roles: ["Frontend developer", "SEO manager", "Digital creative"],
        },
        {
            name: "Pharmabolt",
            description: `Pharmabolt is the best place to get your 
            medication delivered at your door without delay or 
            hassle and book appointment with professionals`,
            roles: ["Frontend developer", "Designer", "Database management"],
        },        
    ]

    return (
        <div className='mt-4 space-y-6 pb-20'>
            {
                projects.map(({name, description, roles}) => (
                    <Card key={name} className='bg-[#242629] text-white '>
                        <CardHeader>
                            <CardTitle>{name}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <div className='flex text-sm items-center space-x-2'>
                                <p>Link</p>
                                <p>↗</p>
                            </div>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}

export default ProjectCards