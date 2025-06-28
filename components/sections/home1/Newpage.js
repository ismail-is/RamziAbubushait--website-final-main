'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
export default function Newpage() {
    return (
        <>
        {/* Start About One*/} 
        <section className="about-one" style={{backgroundColor:'white'}}>
            {/* <div className="shape1 float-bob-y"><img src="assets/images/shapes/about-v1-shape1.png" alt=""/></div> */}
            <div className="shape2"><img src="assets/images/shapes/about-v1-shape2.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start About One Counter*/} 
                   
                    {/* End About One Counter*/} 

                    {/* Start About One Img*/} 
                    <div className="col-xl-6 col-lg-8 col-md-8 wow fadeInRight" data-wow-delay="100ms"
                        data-wow-duration="1500ms">
                        <div className="about-one__img">
                            <div className="about-one__img1">
                                <img src="assets/images/allimg/11.webp" alt=""/>
                            </div>

                            {/* <div className="about-one__img2">
                                <img src="assets/images/allimg/home/homeabout3.png" alt=""/>
                            </div> */}
                        </div>
                    </div>
                    {/* End About One Img*/} 

                    {/* Start About One Content*/} 
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-one__content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4></h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title" style={{color:'black'}}>Fabrication <span style={{color:'#F80000'}}>Services</span></h2>
                                   <h5 style={{color:'#F80000'}}>Precision Engineering. Built to Perform</h5>
                            </div>

                            <div className="about-one__content-text">
                                <p style={{color:'black'}}>Our Fabrication Services are at the core of what we do — providing custom
metalwork and structural solutions tailored to industrial, commercial, and
infrastructure demands. From detailed design to on-site installation, we
deliver durable, safe, and performance-driven components for projects of
every size and complexity
.</p>
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

                            {/* <div className="about-one__content-btn">
                                <Link className="thm-btn" href="about">About More
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div> */}

                        </div>
                    </div>
                    {/* End About One Content*/} 
                </div>
            </div>
        </section>






         <section className="about-one">
            <div className="shape2"><img src="assets/images/shapes/about-v1-shape2.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                   
                                </div>
                                <h2 className="sec-title__title tg-element-title"  style={{textAlign:'center'}}>What We <span style={{color:'#F80000'}}>Offer:
</span></h2>
                                   {/* <h5 style={{color:'#F80000'}}>Precision Engineering. Built to Perform</h5> */}
                            </div>
                  <div className="services-details__content-text3">
                    
                                <div className="row">
                                    
                                    


                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <h5 style={{color:'#F80000'}}>Structural Steel Fabrication</h5>
                                        <p style={{color:'white'}}>We manufacture steel frameworks and load-bearing structures that
meet engineering precision and site-specific demands.
</p>
<br/>
                                        <div className="services-details__content-text3-list">
                                            <ul style={{color:'white'}}>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp; Beams, columns, trusses, and girdersIndustrial  </p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> &nbsp;&nbsp;platforms, mezzanines, and walkwaysPre-engineered 
</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified" ></span> &nbsp;&nbsp;steel building (PEB) components</p>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-text3-img">
                                            <img src="assets/images/allimg/22.webp" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                             <div className="services-details__content-text3">
                    
                                <div className="row">
                                    
                                    


                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <h5 style={{color:'#F80000'}}>Custom Metal Fabrication</h5>
                                        <p style={{color:'white'}}>Tailored fabrication of mild steel, stainless steel, and aluminum for
specialized industrial applications.
</p>
<br/>
                                        <div className="services-details__content-text3-list">
                                            <ul style={{color:'white'}}>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp; Machine parts, brackets, and frames </p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp; Bins, tanks, silos, and sheet metal enclosures 
</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified" ></span>&nbsp;&nbsp; Ladders, gates, grilles, and decorative work</p>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-text3-img">
                                            <img src="assets/images/allimg/33.webp" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>



                             <div className="services-details__content-text3">
                    
                                <div className="row">
                                    
                                    


                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <h5 style={{color:'#F80000'}}>Welding & Assembly</h5>
                                        <p style={{color:'white'}}>Certified welding (MIG, TIG, ARC) with skilled workforce and in-house
quality inspection.
</p>
<br/>
                                        <div className="services-details__content-text3-list">
                                            <ul style={{color:'white'}}>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp; Full weld traceability </p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp;On-site and workshop-based fabrication
</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified" ></span> &nbsp;&nbsp;Component fitting and modular assembly</p>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-text3-img">
                                            <img src="assets/images/allimg/44.webp" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                 
                </div>
            </div>
        </section>





         <section className="about-one" style={{backgroundColor:'white'}}>
            <div className="shape2"><img src="assets/images/shapes/about-v1-shape2.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    
                


                             



                             <div className="services-details__content-text3">
                    
                                <div className="row">
                                    
                                    


                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <h4 style={{color:'black',marginBottom:'1px'}}>Our <span style={{color:'#F80000',marginBottom:'1px'}}>Capabilities:</span></h4>
                                      
                                        <div className="services-details__content-text3-list">
                                            <br/>
                                            <ul style={{color:'black'}}>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp;CNC plasma and laser cutting</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> &nbsp;&nbsp;Bending, rolling, and punching
</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified" ></span>&nbsp;&nbsp; Surface treatment (blasting, painting, galvanizing)</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified" ></span>&nbsp;&nbsp; 2D/3D CAD fabrication design and drafting</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified" ></span> &nbsp;&nbsp;Load testing and inspection documentation</p>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <h4 style={{color:'black',marginBottom:'1px'}}>Materials <span style={{color:'#F80000',marginBottom:'1px'}}> We Handle:</span></h4>
                                      <br/> 
                                        <div className="services-details__content-text3-list">
                                            {/* <br/> */}
                                            <ul style={{color:'black'}}>
                                                <li>
                                                    <p><span className="icon-verified"></span>&nbsp;&nbsp;Mild Steel (MS)</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> &nbsp;&nbsp;Stainless Steel (SS)
</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified" ></span>&nbsp;&nbsp; AluminumGalvanized Iron (GI)</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified" ></span>&nbsp;&nbsp; Alloy Steel
</p>
                                                </li>
                                                <li>
                                                    {/* <p><span className="icon-verified" ></span> &nbsp;&nbsp;Load testing and inspection documentation</p> */}
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                
                 
                </div>
            </div>
        </section>
        
        
        {/* End About One*/} 
        
        </>
    )
}
