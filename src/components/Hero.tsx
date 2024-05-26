import Container from './Elements/Container';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import '../styles/utility.css';
import ProfileDetails from './widgets/ProfileDetails';
import ProjectCards from './widgets/ProjectCards';
import OssCards from './widgets/OssCards';
import FeaturedWritings from './widgets/FeaturedWritings';

const Hero = () => {

    return (
        <header className="xl:h-screen">
            <Container className='xl:grid grid-cols-2 xl:space-x-10'>
                <section className='relative pt-24'>
                    <ProfileDetails />
                </section>

                <section className=' xl:pb-40 pb-20 pt-20 xl:pt-40 no-scrollbar xl:overflow-y-scroll xl:h-screen'>
                    <h2 className='uppercase text-white mb-2 underline text-lg font-light tracking-wide underline-offset-4'>
                        Projects
                    </h2>
                    <div className="">
                        <Tabs defaultValue="product" className=" w-full">
                            <TabsList className='bg-[#27272a]'>
                                <TabsTrigger className="text-[13px] uppercase" value="product">Product</TabsTrigger>
                                <TabsTrigger className="text-[13px] uppercase" value="oss">Open Source</TabsTrigger>
                            </TabsList>
                            <TabsContent value="product">
                                <div>
                                    <ProjectCards />
                                    <FeaturedWritings />
                                </div>
                            </TabsContent>

                            <TabsContent value="oss">
                                <div>
                                    <OssCards />
                                    <FeaturedWritings />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
            </Container>
        </header>
    )
}

export default Hero