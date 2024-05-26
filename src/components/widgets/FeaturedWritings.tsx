import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"


const FeaturedWritings = () => {

    const writings = [
        {
            datePosted: "April 6, 2024",
            title: "How to integrate React into an Astro Project",
            description: "#astro #react #vercel #google-search-console",
            link: `https://israelchidera.netlify.app/posts/post-6/`
        },
        {
            datePosted: "April 26, 2024",
            title: "How to integrate React into an Astro Project",
            description: "#astro #react",
            link: `https://israelchidera.netlify.app/posts/astro-react-integration/`
        },
        {
            datePosted: "Oct 17, 2023",
            title: "How to Secure Routes in Next.js 13 - Client-Side, Server-Side, and Middleware-Based Protection",
            description: "#next js #auth #react",
            link: `https://www.freecodecamp.org/news/secure-routes-in-next-js/`
        },
        {
            datePosted: "Oct 31, 2022",
            title: "How to Use Firebase Authentication in a React App",
            description: "#react #firebase #auth",
            link: `https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/`
        }
    ]
    
    return (
        <div>
            <h2 className='uppercase text-white mb-2 underline text-lg font-light tracking-wide underline-offset-4'>
                Featured Writings
            </h2>

            <div className="xl:space-y-6 gap-x-2 gap-y-4 xl:gap-y-0 xl:block grid grid-cols-2">
                {
                    writings.map(({ datePosted, link, title, description }) => (
                        <Card className="bg-[#242629] text-white border-none">
                            <CardHeader>
                                <CardTitle>
                                    <a href="link">
                                        {title}
                                    </a>
                                </CardTitle>
                                <CardContent className="brea">{description}</CardContent>
                                <CardDescription>{datePosted}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>


        </div>
    )
}

export default FeaturedWritings