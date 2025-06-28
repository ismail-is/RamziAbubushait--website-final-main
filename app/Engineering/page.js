'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Engineering () {
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
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Engineering Design Services ">
        {/* Start Services Details*/} 
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* Start Services Details Content*/} 
                    <div className="col-xl-8">
                        <div className="services-details__content">
                            <div className="services-details__content-img1">
                                <img src="assets/images/allimg/e/e1.webp" alt=""/>
                            </div>

                            <div className="services-details__content-text1">
                                <h2>Delivering Engineering Value Through Expertise</h2>
                                <p className="text1">With projects becoming larger and more complex, the demand for efficient engineering solutions isgrowing. The oil and gas industry are witnessing a surge in demand for specialized expertise acrossengineering, procurement, and construction. Based out of our Engineering Centre in India, our multidisciplinary team partners closely with clients to co-create customized, value-driven solutions.
</p>
                                <p className="text1">We are committed to delivering high-quality services that reduce costs, conserve resources, and boost operattonal efficiency—helping clients stay ahead in a competive global market. 
</p>
                                
                            </div>

                            {/* <div className="services-details__content-text1">
                                <h2>Key Capabilities:</h2>
                                <p className="text1">Our Steel Fabrication division is the foundation of our operations, built to serve a wide array of industries including construction, infrastructure, manufacturing, logistics, and heavy engineering. We offer high-quality fabrication solutions tailored to your specifications and project demands, ensuring that every structure or component is built to last.</p>
                                
                            </div> */}
<div className="col-xl-12 col-lg-6 col-md-6">
                                        <div className="services-details__content-text3-list">
                                              <h2>Who We Are </h2>
                                                     <p className="text1">We are a team of seasoned engineering professionals with decades of hands-on experience in oil & gas, petrochemical, and specialty chemical industries. Our experts bring global exposure and a deep understanding of international codes and standards. Backed by collaboration with international colleagues
</p><br/>
                                            <ul>
                                                  <h2>Expertise & Experience</h2><pre></pre>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp; Consulting and value engineering excellence</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp; Expertise across project life cycles</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp; Proven track record in delivering practical, cost-effective solutions</p>
                                                </li>
                                                
                                               
                                            </ul>
                                        </div>
<br/>
                                            <div className="services-details__content-text3-list">
                                              <h2>Who We Are </h2>
                                                     <p className="text1">As Owner’s Engineers and Consultants, our core offering is the independent review of engineering deliverables and project documentation. We support both onshore and offshore facilities by providing expert insights that enhance design integrity, ensure compliance, and optimize performance. Our involvement spans key project stages, with a strong focus on safety, operability, and technical assurance throughout the asset lifecycle.
</p><br/>
                                            <ul>
                                                  <h2>Expertise & Experience</h2><pre></pre>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp; On-site and remote engineering support</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp; Commissioning and start-up assistance, including SOP review and optimization</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp;Customized, value-driven engineering solutions tailored to operational needs</p>
                                                </li>
                                                
                                               
                                            </ul><br/> 
                                               <div className="services-details__content-img2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-img2-single">
                                            <img src="assets/images/allimg/e/e2.webp" alt=""/>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-img2-single">
                                            <img src="assets/images/allimg/e/e3.webp" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                            <h4>Innovative. Accurate. Built for Performance</h4>
                                                     <p className="text1">At BOBSCO. we provide end-to-end Engineering Design Services tailored for infrastructure, construction, industrial, and architectural projects. Our designs balance creativity with functionality, ensuring precision, compliance, and sustainability.
</p>
                                            <br/>
                                            <h4>Our Core Engineering Design Services Include</h4>
                                                     <p className="text1">Structural Design
Safe, efficient, and cost-effective structures for residential, commercial, and industrial use.</p>
  <br/>
                                            <h4>MEP (Mechanical, Electrical & Plumbing) Design</h4>
                                                     <p className="text1">Integrated system design to optimize performance, energy use, and safety.</p>
                                              <br/>
                                            <h4>Architectural Drafting & Detailing</h4>
                                                     <p className="text1">High-quality CAD drafting, 3D modeling, and detail drawings for approvals and execution.</p>
                                              <br/>
                                            
                                            <h4>Product & Mechanical Component Design</h4>
                                                     <p className="text1">2D/3D modeling, reverse engineering, and prototyping for mechanical systems and equipment.</p>
                                              <br/>
                                            <h4>Infrastructure & Civil Design</h4>
                                                     <p className="text1">Roads, drainage, foundations, and site layouts with engineering precision.</p>
                                            
                                        </div>
                                    </div>
                                      <div className="services-details__content-text1">
                                {/* <h2>Innovative. Accurate. Built for Performance.</h2>
                                <p className="text1">At BOBSCO. we provide end-to-end Engineering Design Services tailored for infrastructure, construction, industrial, and architectural projects. Our designs balance creativity with functionality, ensuring precision, compliance, and sustainability.
</p> */}
                                
                            </div>

                            
                         
 
                                   {/* <div className="col-xl-12 col-lg-6 col-md-6">
                                   <h2>Applications:</h2>
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
                                       <li ><Link href="Steel">Steel Fabrication<span
                                                className="icon-right-arrow"></span></Link></li>
                                    <li><Link href="Sand">Sand Blasting
                                            <span className="icon-right-arrow"></span></Link></li>
                                    <li><Link href="Rental">Rental Services <span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                    <li ><Link href="Trading">Trading Services <span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                    <li className="active">  <Link href="Engineering">Engineering Design Services<span
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