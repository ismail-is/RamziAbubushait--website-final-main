'use client'
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Link from "next/link"
import { useState } from "react"
export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
            const handleOnClick = (index) => {
                setActiveIndex(index)
            }
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us">
    
        {/* Start About Two*/} 
        <section className="about-two">
            <div className="container">
                <div className="row">
                    {/* Start About Two Left*/} 
                    <div className="col-xl-3 col-lg-6 wow fadeInLeft" data-wow-delay="0ms">
                        <div className="about-two__left">
                            <div className="about-two__left-img">
                                <img src="assets/images/allimg/about/about1.jpg" alt=""/>
                            </div>

                            {/* <div className="about-two__left-bottom">
                                <div className="about-two__left-bottom-img">
                                    <ul>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v1-img1.png" alt=""/>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v1-img2.png" alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v1-img3.png" alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v1-img4.png" alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box style2">
                                                <img src="assets/images/testimonial/testimonial-v1-img5.png" alt=""/>
                                                <div className="icon-box">
                                                    <Link href="#"><span className="icon-plus-1"></span></Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="about-two__left-bottom-text count-box">
                                    <h3>We have <span className="count-text" data-stop="2563" data-speed="1500">00</span>+
                                        Global <br/>
                                        Active Clients</h3>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* End About Two Left*/} 

                    {/* Start About Two Middle*/} 
                    <div className="col-xl-5 col-lg-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="about-two__middle">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>About us</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">About Our Company</h2>
                            </div>

                            <div className="about-two__middle-text">
                                <p>Ramzi Abubushait Trading and Contracting Services is multi diversified business firm which is primarily doing services in general trading and contracting, industrial services, equipment rentals, transportation, fleet maintenance services, construction and engineering services or any works of similar nature.</p>
                                {/* <p>It is owned by a Saudi national and primarily based in Dammam, Saudi Arabia. It was founded in 1993 and since then it has achieved a steadily growth both in its working capital, manpower and scope of business activities.</p> */}
                            </div>

                            {/* <div className="about-two__middle-text2">
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-house"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Rental property <br/> management</h3>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-engineer"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Interior design <br/> and staging</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="about-two__middle-btn">
                                <Link className="thm-btn" href="contact">Contact us
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Start About Two Middle*/} 

                    {/* Start About Two Right*/} 
                    <div className="col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-two__right">
                            <div className="about-two__right-text">
                                <p>It is owned by a Saudi national and primarily based in Dammam, Saudi Arabia. It was founded in 1993 and since then it has achieved a steadily growth both in its working capital, manpower and scope of business activities.
                                </p>
                            </div>

                            <div className="about-two__right-img">
                                <img src="assets/images/allimg/about/about2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* End About Two Right*/} 
                </div>
            </div>
        </section>
        {/* End About Two*/} 
  <About/>
        {/* Start Why Choose One*/} 
        {/* <section className="why-choose-one">
            <div className="why-choose-one__bg"
                style={{ backgroundImage: ' url(assets/images/resources/why-choose-v1-bg.jpg)' }}></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
            <div className="shape4"></div>
            <div className="shape5"></div>
            <div className="shape6"></div>
            <div className="shape7"></div>
            <div className="shape8"></div>
            <div className="shape9"></div>
            <div className="shape10 float-bob-y"><img src="assets/images/shapes/why-choose-v1-shape1.png" alt=""/></div>
            <div className="container clearfix">
                <div className="why-choose-one__inner">
                    <div className="why-choose-one__content">
                        <div className="sec-title tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <div className="left-line"></div>
                                <div className="text tg-element-title">
                                    <h4>Why we Choose Us</h4>
                                </div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Find Your Perfect Space We <br/> Make It Home
                            </h2>
                        </div>

                        <div className="why-choose-one__content-text">
                            <p>Real estate is a significant asset class that plays a crucial role in economies kinds
                                worldwide, providing housing, workspace, and infrastructure essential for modern
                                societies during the initial consultation.</p>
                        </div>

                        <div className="why-choose-one__content-bottom">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-raw-materials"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Using Qualityfull <br/> Materials</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-support"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Quickly Finished <br/> your work</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-income"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Affordable Pricing <br/> your Work</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-costumer"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Clients Satisfaction <br/> Guarantees</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* End Why Choose One*/} 

        {/* Start Working Process One*/} 
        {/* <section className="working-process-one working-process-one--about">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4></h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                </div>

                <div className="working-process-one__inner">

                    <div className="shape1 animation-infinite1"
                        style={{ backgroundImage: ' url(assets/images/shapes/working-process-v1-shape1.png)' }}></div>

                    <div className="working-process-one__tab-box tabs-box">
                        <ul className="tab-buttons clearfix list-unstyled">
                            <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                <h2>01</h2>
                            </li>
                            <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                <h2>02</h2>
                            </li>
                            <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                <h2>03</h2>
                            </li>
                            <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                <h2>04</h2>
                            </li>
                        </ul>

                        <div className="tabs-content">
                            <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="working-process-one__single-tab">
                                    <div className="working-process-one__single-tab-inner">
                                        <div className="content-box">
                                            <h2>Our Vision</h2>
                                            <p style={{textAlign:'start'}}>Ramzi Abubushait trading company is committed to develop the company capable of carrying out the works to the expectations of the client, meeting the specific requirements, international standards, and developing specific work procedures suitable for the project, and ensuring the best performance at most economical price with safety as one of the prime factor.</p>
                                        </div>

                                        <div className="img-box">
                                            <img src="assets/images/resources/working-process-v1-img1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="working-process-one__single-tab">
                                    <div className="working-process-one__single-tab-inner">
                                        <div className="content-box">
                                            <h2>Foundation Work</h2>
                                            <p>Project timelines vary based on scope and complexity. We provide a
                                                detailed timeline after initial consultation and planning.</p>
                                        </div>

                                        <div className="img-box">
                                            <img src="assets/images/resources/working-process-v1-img2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="working-process-one__single-tab">
                                    <div className="working-process-one__single-tab-inner">
                                        <div className="content-box">
                                            <h2>Interior & Exterior Finishing</h2>
                                            <p>Project timelines vary based on scope and complexity. We provide a
                                                detailed timeline after initial consultation and planning.</p>
                                        </div>

                                        <div className="img-box">
                                            <img src="assets/images/resources/working-process-v1-img3.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={activeIndex == 4 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="working-process-one__single-tab">
                                    <div className="working-process-one__single-tab-inner">
                                        <div className="content-box">
                                            <h2>Final Touches</h2>
                                            <p>Project timelines vary based on scope and complexity. We provide a
                                                detailed timeline after initial consultation and planning.</p>
                                        </div>

                                        <div className="img-box">
                                            <img src="assets/images/resources/working-process-v1-img4.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* End Working Process One*/}





  <section className="product-description">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4></h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Our Endeavour</h2>
                </div>

                <p className="product-description__text1">RTS began much the same way, as a fledglings enterprise, venturing into mechanical construction field &amp; rental services for RIG equipment ,refinery, power plants etc We had a clear vision of what we wanted to be. Of course, we would grow, expand, and diversify. RTS main goal, however world be to win recognition and respect at an International level, as much for the quality of its workmanship and service as for the manner in which it discharged its commitments and responsibilities. his is why we have deemed it necessary to set high standards for ourselves from the very start. We are in the business of Mechanical steel structure Fabrication and Erection, Tankage, Piping &amp; SUPPLY OF Rotary &amp; Static equipment’s with rental &amp;Erections. We are aware of our increasing responsibilities towards the environment, and safety stand fully committed to the industries guiding principle of ‘Responsible Care’. Our continuing endeavour is to get everything right: our core values, plants, Work force supervisory people, product quality, construction cost, the way we do business</p>
             <br/>  <p className="product-description__text1">What counts most is our ability to sustain and build enduring relationships with all our consultants, our clients, our business partners, vendors, employees, the community at large  the brief span of our existence, our efforts have been rewarded with a gratifying measure of success, which can be gauged from our performance, our growing client list and our recent tie-up with HALLIBURTON, SCHLUMBERGER, WEATHERFORD,SED DRILL, SHELL DRILLING, ASCENT FUTURES, SINOPEC, ZIP ARABIA and many more .</p>
             <br/>  <p className="product-description__text1">In  the years ahead,RTS will continue to draw strength from its core values and the relationships it is building today.</p>
                <div className="about-three__content-list2">
                                <ul>
                                    <li>
                                        <p><span className="">Health and Safety policy</span>  </p>
 <p><span className="icon-right-arrow"></span> We at RTS are committed to health &amp; safety of our manpower and equipment. We are dedicated in implementation the highest safety standard through awareness Training, and motivating our personnel towards towards healthy engineering practices. We firmly believe that a healthy body houses , a healthy mind healthy equipment well informed and motivated personnel lead to efficiency and safe production.</p>
                                    </li>  <br/>
                                    <li>
                                        <p><span className="">Quality policy</span>  </p>
 <p><span className="icon-right-arrow"></span> We at RTS are committed to attain deliver and maintain the highest standards of quality in our works services and supplies so as to achieve maximum possible customer satisfaction with unerring regularity on a lasting basis.</p>
 <p><span className="icon-right-arrow"></span> We endeavor to provide efficient leader ship to our people encourage their creativity and train them to keep pace with the latest technological advances the industry and thus increasers their performance and achieve excellence in quality..</p>
                                    </li>
                                    <br/>
                                    <li>
                                        <p><span className="">Environmental policy</span>  </p>
 <p><span className="icon-right-arrow"></span> RTS is committed to conduct its operation in such a manner as computable with environmental and economic development of the community.</p>
 <p><span className="icon-right-arrow"></span> To create a awareness among the employees for their involment in the enivornmental improvement by ensuring that they follow the set rules framed under environmental management system.</p>
                                    </li>
                </ul>
               </div>
               
               
               
            </div>
        </section>






        {/* Start Team Two*/} 
        {/* <section className="team-two">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>Great Team</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Meet Our Experience Team</h2>
                </div>

                <div className="row">

                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img1.png" alt="#"/>
                            </div>

                            <div className="team-two__single-content">
                                <div className="team-two__single-content-inner">

                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
                                                <li><Link href="#"><i className="icon-twitter1"></i></Link>
                                                </li>
                                                <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                <li><Link href="#"><i className="icon-vimeo"></i></Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div className="text-box">
                                        <h2><Link href="team-details">Kathryn Murphy</Link></h2>
                                        <p>Systems analyst</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-phone-call"></span> <Link href="tel:1234567890">(704)
                                                555-0127</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img2.png" alt="#"/>
                            </div>

                            <div className="team-two__single-content">
                                <div className="team-two__single-content-inner">

                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
                                                <li><Link href="#"><i className="icon-twitter1"></i></Link>
                                                </li>
                                                <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                <li><Link href="#"><i className="icon-vimeo"></i></Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div className="text-box">
                                        <h2><Link href="team-details">Darlene Robertson</Link></h2>
                                        <p>Team Leader</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-phone-call"></span> <Link href="tel:1234567890">(704)
                                                555-0127</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img3.png" alt="#"/>
                            </div>

                            <div className="team-two__single-content">
                                <div className="team-two__single-content-inner">

                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
                                                <li><Link href="#"><i className="icon-twitter1"></i></Link>
                                                </li>
                                                <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                <li><Link href="#"><i className="icon-vimeo"></i></Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div className="text-box">
                                        <h2><Link href="team-details">Leslie Alexander</Link></h2>
                                        <p>General Manager</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-phone-call"></span> <Link href="tel:1234567890">(704)
                                                555-0127</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6  wow fadeInDown" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img4.png" alt="#"/>
                            </div>

                            <div className="team-two__single-content">
                                <div className="team-two__single-content-inner">

                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
                                                <li><Link href="#"><i className="icon-twitter1"></i></Link>
                                                </li>
                                                <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                <li><Link href="#"><i className="icon-vimeo"></i></Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div className="text-box">
                                        <h2><Link href="team-details">Francene Vandyne</Link></h2>
                                        <p>Project Manager</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-phone-call"></span> <Link href="tel:1234567890">(704)
                                                555-0127</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* End Team Two*/} 
        </Layout>
        </>
    )
}


