'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
export default function About() {
    return (
        <>
        {/* Start About One*/} 
        <section className="about-one">
            {/* <div className="shape1 float-bob-y"><img src="assets/images/shapes/about-v1-shape1.png" alt=""/></div> */}
            <div className="shape2"><img src="assets/images/shapes/about-v1-shape2.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start About One Counter*/} 
                    <div className="col-xl-3 col-lg-4 col-md-4 wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="about-one__counter">
                            <ul className="about-one__counter-box">
                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={45} /></h2>
                                        <span>+</span>
                                    </div>
                                    <div className="text">
                                        <p>Drilling Fields</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={8} /></h2>
                                        <span>k+</span>
                                    </div>
                                    <div className="text">
                                        <p>Crane Equipments</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={2} />k</h2>
                                        <span>+</span>
                                    </div>
                                    <div className="text">
                                        <p>Metal Factory</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={6} /></h2>
                                        <span className="k">k +</span>
                                    </div>
                                    <div className="text">
                                        <p>Special Machinery</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End About One Counter*/} 

                    {/* Start About One Img*/} 
                    <div className="col-xl-4 col-lg-8 col-md-8 wow fadeInRight" data-wow-delay="100ms"
                        data-wow-duration="1500ms">
                        <div className="about-one__img">
                            <div className="about-one__img1">
                                <img src="assets/images/allimg/homeabout2.webp" alt=""/>
                            </div>

                            <div className="about-one__img2">
                                <img src="assets/images/allimg/home/homeabout3.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* End About One Img*/} 

                    {/* Start About One Content*/} 
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-one__content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Who We Are?</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">About Our Company</h2>
                            </div>

                            <div className="about-one__content-text">
                                <p>Ramzi Abubushait Trading and Contracting Services is multi diversified business firm which is primarily doing services in general trading and contracting, industrial services, equipment rentals, transportation, fleet maintenance services, construction and engineering services or any works of similar nature.</p>
                            </div>
                            <div className="about-one__content-text">
                                <p>It is owned by a Saudi national and primarily based in Dammam, Saudi Arabia. It was founded in 1993 and since then it has achieved a steadily growth both in its working capital, manpower and scope of business activities.</p>
                            </div>
                            <div className="about-one__content-text">
                                <p>Few years ago, our work expanded resulting for us to organize our contracting services and since then we are actively proud in servicing our client. Our structural fabrication shop caters the requirement of the oil field industry for their fabrication needs</p>
                            </div>

                            {/* <div className="about-one__content-text2">
                                <ul className="about-one__content-list">
                                    <li>
                                        <p>Custom Home Builders</p>
                                    </li>
                                    <li>
                                        <p>Precision Remodeling</p>
                                    </li>
                                    <li>
                                        <p>Smart Build Solutions</p>
                                    </li>
                                </ul>


                                <div className="about-one__content-author">
                                    <div className="img-box">
                                        <img src="assets/images/about/about-v1-img3.png" alt=""/>
                                    </div>

                                    <div className="content-box">
                                        <div className="signature">
                                            <img src="assets/images/about/about-v1-signature.png" alt=""/>
                                        </div>
                                        <h2>Brooklyn Simmons</h2>
                                        <p>Co-Founder</p>

                                    </div>
                                </div>
                            </div> */}

                            <div className="about-one__content-btn">
                                <Link className="thm-btn" href="about">About More
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>

                        </div>
                    </div>
                    {/* End About One Content*/} 
                </div>
            </div>
        </section>
        {/* End About One*/} 
        
        </>
    )
}
