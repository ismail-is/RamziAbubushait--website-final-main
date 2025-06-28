import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Service from "@/components/sections/home2/Service"
import Pricing from "@/components/sections/home1/Pricing"
import Testimonial from "@/components/sections/home1/Testimonial"
import Team from "@/components/sections/home1/Team"
import Appoinment from "@/components/sections/home1/Appoinment"
import Blog from "@/components/sections/home1/Blog"
import Working from "@/components/sections/home1/Working"
import Faq from "@/components/sections/home1/Faq"
import Portfolio from "@/components/sections/home3/Portfolio"
import Newpage from "@/components/sections/home1/Newpage"

export default function Home() {

    return (
        <>
        <div className="dark-version">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                                <Service/>
                
               {/* <Blog /> */}
 
                {/* <Service /> */}
                
                <Team />
                <Newpage/>
                <Portfolio/>
                
                
                {/* <Pricing /> */}
                {/* <Testimonial /> */}
                <Appoinment />
                {/* <Working /> */}
                <Faq />
                {/* <Blog /> */}
            </Layout>
        </div>
        </>
    )
}