'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
                    status: false,
                    key: 1,
                })
            
                const handleToggle = (key) => {
                    if (isActive.key === key) {
                        setIsActive({
                            status: false,
                        })
                    } else {
                        setIsActive({
                            status: true,
                            key,
                        })
                    }
                }
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Structural Mastery">
        {/* Start Services Details*/} 
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* Start Services Details Content*/} 
                    <div className="col-xl-8">
                        <div className="services-details__content">
                            <div className="services-details__content-img1">
                                <img src="assets/images/services/services-details-img1.jpg" alt=""/>
                            </div>

                            <div className="services-details__content-text1">
                                <h2>Structural Mastery</h2>
                                <p className="text1">Crafting structures that last a lifetime requires a holistic approach
                                    that integrates advanced materials, resilient and design, regular maintenance, and
                                    sustainability practices. By learning from historical examples and leveraging your
                                    modern technology</p>
                                <p className="text2">These services are tailored to businesses and may include cleaning
                                    offices, retail spaces, restaurants, and other any commercial establishments. They
                                    often involve larger-scale cleaning tasks </p>
                            </div>

                            <div className="services-details__content-img2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-img2-single">
                                            <img src="assets/images/services/services-details-img2.jpg" alt=""/>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-img2-single">
                                            <img src="assets/images/services/services-details-img3.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="services-details__content-text2">
                                <p className="text1">We specialize in a wide range of construction services, including
                                    residential, commercial, and industrial projects From initial design to final
                                    inspection, we work closely with our clients to understand their unique needs vision
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at layout The point of using Lorem Ipsum is that it
                                    has a more-or-less normal distribution of letters</p>
                                <h2>Service Quality</h2>
                                <p className="text2">Simple actions make a difference. It starts and ends with each employee
                                    striving to work safer every single day so they can return.</p>
                            </div>

                            <div className="services-details__content-text3">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-text3-img">
                                            <img src="assets/images/services/services-details-img4.jpg" alt=""/>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-text3-list">
                                            <ul>
                                                <li>
                                                    <p><span className="icon-verified"></span> Crafting Tomorrow’s
                                                        Foundations</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> Turning Blueprints into
                                                        Reality</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> Solid Structures, Solid
                                                        Relationships</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> Your Partner in Building
                                                        Excellence</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="services-details__accrodion">
                                <div className="faq-one__faq">
                                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                            <div className="accrodion-title">
                                                <h4>What types of construction projects do you handle?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Our commitment to quality craftsmanship, customer satisfaction,
                                                        and innovative construction solutions as sets us apart. We pride
                                                        ourselves on delivering projects on time and within budget Yes,
                                                        we are fully a buing licensed and insured, meeting all
                                                        regulatory requirements to ensure.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                            <div className="accrodion-title">
                                                <h4>What sets your company apart from others?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Our commitment to quality craftsmanship, customer satisfaction,
                                                        and innovative construction solutions as sets us apart. We pride
                                                        ourselves on delivering projects on time and within budget Yes,
                                                        we are fully a buing licensed and insured, meeting all
                                                        regulatory requirements to ensure.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                            <div className="accrodion-title">
                                                <h4>Are your cleaning products safe for pets and children?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Our commitment to quality craftsmanship, customer satisfaction,
                                                        and innovative construction solutions as sets us apart. We pride
                                                        ourselves on delivering projects on time and within budget Yes,
                                                        we are fully a buing licensed and insured, meeting all
                                                        regulatory requirements to ensure.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Services Details Content*/} 

                    {/* Start Sidebar*/} 
                    <div className="col-xl-4">
                        <div className="sidebar">
                            {/* Start Sidebar Single*/} 
                            <div className="sidebar__single sidebar__services wow fadeInUp" data-wow-delay=".1s">
                                <div className="title-box">
                                    <h2>All Services</h2>
                                </div>

                                <ul className="sidebar__services-list">
                                    <li className="active"><Link href="#">Structural Mastery <span
                                                className="icon-right-arrow"></span></Link></li>
                                    <li><Link href="foundation-forte">Foundation Forte
                                            <span className="icon-right-arrow"></span></Link></li>
                                    <li><Link href="smart-solutions">Build Smart Solutions <span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                    <li><Link href="precision-builds">Precision Builds <span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                    <li><Link href="apex-remodeling">Apex Remodeling <span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            {/* End Sidebar Single*/} 

                            {/* Start Sidebar Single*/} 
                            <div className="sidebar__single sidebar__emergency-services wow fadeInUp" data-wow-delay=".1s">
                                <div className="sidebar__emergency-services-inner text-center">
                                    <div className="title">
                                        <h2>Emergency Construction Services</h2>
                                    </div>

                                    <div className="icon-box">
                                        <span className="icon-old-typical-phone"></span>
                                    </div>

                                    <div className="number-box">
                                        <p>Requesting A Call</p>
                                        <h3><Link href="tel:1234567890">(205) 888-0258</Link></h3>
                                    </div>

                                    <div className="text-box">
                                        <p>Yes, we offer free estimates for all potential projects. Contact us to
                                            schedule a
                                            consultation.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="contact">Read more
                                            <i className="icon-next"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Sidebar Single*/} 
                        </div>
                    </div>
                    {/* End Sidebar*/} 
                </div>
            </div>
        </section>
        {/* End Services Details*/}

        </Layout>
        </>
    )
}