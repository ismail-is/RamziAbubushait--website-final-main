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
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Sand Blasting 
">
        {/* Start Services Details*/} 
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* Start Services Details Content*/} 
                    <div className="col-xl-8">
                        <div className="services-details__content">
                            <div className="services-details__content-img1">
                                <img src="assets/images/allimg/sand/1.webp" alt=""/>
                            </div>

                            <div className="services-details__content-text1">
                                <h2>Clean. Restore. Protect.</h2>
                                <p className="text1">Our Sand Blasting & Surface Preparation services provide essential surface treatment for a wide range of industrial applications. Whether preparing surfaces for painting, welding, coating, or insulation, our blasting methods ensure optimal cleanliness, adhesion, and finish.</p>
                                
                            </div>

                            {/* <div className="services-details__content-text1">
                                <h2>Key Capabilities:</h2>
                                <p className="text1">Our Steel Fabrication division is the foundation of our operations, built to serve a wide array of industries including construction, infrastructure, manufacturing, logistics, and heavy engineering. We offer high-quality fabrication solutions tailored to your specifications and project demands, ensuring that every structure or component is built to last.</p>
                                
                            </div> */}
<div className="col-xl-12 col-lg-6 col-md-6">
                                        <div className="services-details__content-text3-list">
                                            <ul>
                                                   <h2>Applications :</h2>
                                                   <pre></pre>
                                                <li>
                                                    <p><span className="icon-verified">  </span>&nbsp;&nbsp; Rust, Scale & Paint Removal: Effective cleaning of corroded or weathered metal surfaces including steel structures, tanks, and tools.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified">  </span>&nbsp;&nbsp;  Pipeline & Tank Maintenance: Surface preparation of industrial piping, storage tanks, and reactors for safety, performance, and coating.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp;Pre-Coating & Painting Treatment: Ideal for achieving proper surface profile and anchor pattern for paint, powder coat, epoxy, or galvanizing.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp;Marine, Industrial & Automotive Prep: Removal of salt deposits, biofouling, grease, and paint from ships, machinery, and vehicle parts.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp; Concrete Preparation: Roughening and smoothing surfaces for waterproofing, paint adhesion, epoxy floor installation, or aesthetic coating.</p>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                            <div className="services-details__content-img2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-img2-single">
                                            <img src="assets/images/allimg/sand/2.webp" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-img2-single">
                                            <img src="assets/images/allimg/sand/3.webp" alt=""/>
                                        </div>
                                    </div>

                                 
                                </div>
                            </div>

                            <div className="col-xl-12 col-lg-6 col-md-6">
                                   <h2>
Methods Used:</h2><pre></pre>
                                        <div className="services-details__content-text3-list">
                                            
                                            <ul>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp;Abrasive Grit Blasting</p>
                                                </li>
                                               
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp;Bead Blasting</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp;Steel Shot Blasting</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp;Soda Blasting</p>
                                                </li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                    
                          <br/>
 <div className="services-details__content-text1">
                                {/* <h2>Quality Assurance:</h2> */}
                                <p className="text1">We tailor our blasting method based on surface material, expected finish, and environmental factors to avoid substrate damage and ensure compliance with protective coating guidelines.</p>
                                
                            </div>

                            <div className="services-details__content-text1">
                                <h2>Safety & Environmental Compliance:</h2>
                                <p className="text1">Our procedures adhere to strict environmental regulations and include dust containment, operator PPE, and proper disposal of residual materials. We follow OSHA standards for safety and provide method statements and MSDS for all abrasives used.
</p>
                                
                            </div>
                            <div className="services-details__content-text1">
                                <h2>Industries Served:</h2>
                                <p className="text1">Oil & Gas,  Manufacturing Plants,  Marine & Shipyards, Automobile Workshops, Civil Construction, Refineries & Power Plants.
</p>
                                <p className="text1">From routine maintenance to heavy industrial restoration, we ensure your surfaces are not just clean—but optimized for longevity, performance, and protection.
</p>
                                
                            </div>
                                   {/* <div className="col-xl-12 col-lg-6 col-md-6">
                                   <h2>Safety & Environmental Compliance:</h2>
                                        <div className="services-details__content-text3-list">
                                            
                                            <ul>
                                                <li>
                                                    <p><span className="icon-verified"></span> Commercial and Industrial Buildings</p>
                                                </li>
                                               
                                                <li>
                                                    <p><span className="icon-verified"></span>Energy and Power Sector</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Oil & Gas Infrastructure</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Water Treatment Plants</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Transportation Terminals</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Warehouses and Storage Facilities</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <br/>
 <div className="services-details__content-text1">
                                {/* <h2>Quality Assurance:</h2> */}
                                {/* <p className="text1">Our steel fabrication solutions are engineered for strength, designed for functionality, and built for the future. From initial concept to final installation, our team ensures precision execution, timely delivery, and complete customer satisfaction.</p> */}
                            </div>


                            {/* <div className="services-details__accrodion">
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
                            </div> */}
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
                                  


                                    <li><Link href="Steel">Steel Fabrication<span
                                                className="icon-right-arrow"></span></Link></li>
                                    <li  className="active"><Link href="Sand">Sand Blasting
                                            <span className="icon-right-arrow"></span></Link></li>
                                    <li><Link href="Rental">Rental Services <span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                    <li><Link href="Trading">Trading Services <span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                    <li><Link href="Engineering">Engineering Design Services<span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                    <li ><Link href="civil">Civil Works<span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            {/* End Sidebar Single*/} 

                            {/* Start Sidebar Single*/} 
                            {/* <div className="sidebar__single sidebar__emergency-services wow fadeInUp" data-wow-delay=".1s">
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
                            </div> */}
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