'use client'
import Link from "next/link"
import { useState } from "react"
export default function Service() {
    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }
    return (
        <>
       {/* Start Services Two*/} 
       <section className="services-two">
            <div className="services-two__pattern"
                style={{ backgroundImage: ' url(assets/images/pattern/services-v2-pattern.png)' }} ></div>
            <div className="container">
<div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4 ></h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title" style={{color:'#024155'}}>Our Services</h2>
                </div>
                <div className="services-two__top">
                  

                    {/* <div className="text-box">
                        <p>We adhere to strict quality control measures and use high-quality materials. Our experienced
                            team ensures every detail meets our high standards.</p>
                    </div> */}
                </div>

                <div className="row">

                    <div className="services-two__tab-box tabs-box">
                        {/* <ul className="tab-buttons clearfix list-unstyled">
                            <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                <div className="icon-box">
                                    <span className="icon-construction-1"></span>
                                </div>
                                <h3>Elite Renovations</h3>
                            </li>
                            <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                <div className="icon-box">
                                    <span className="icon-construction-2"></span>
                                </div>
                                <h3>Structural Mastery</h3>
                            </li>
                            <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                <div className="icon-box">
                                    <span className="icon-house"></span>
                                </div>
                                <h3>Foundation Laying</h3>
                            </li>
                            <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                <div className="icon-box">
                                    <span className="icon-construction-3"></span>
                                </div>
                                <h3>Green Construction</h3>
                            </li>

                            <li className={activeIndex == 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}>
                                <div className="icon-box">
                                    <span className="icon-development"></span>
                                </div>
                                <h3>Urban Development</h3>
                            </li>
                        </ul> */}

                        <div className="tabs-content">

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/allimg/service/Steel.webp" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="Steel">Steel Fabrication</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="Steel"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-4" style={{marginBottom:'13px'}}>
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/allimg/service/Sand.webp" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="Sand" style={{marginLeft:'20px'}}>Sand Blasting</Link></h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="Sand"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="col-xl-6 col-lg-4" style={{marginBottom:'13px'}}>
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/allimg/service/Rental.webp" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="Rental">Rental Services</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="Rental"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-4" style={{marginBottom:'13px'}}>
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/allimg/service/Trading.webp" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="Trading">Trading Services</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="Trading"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xl-6 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/allimg/e/e2.webp" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3 style={{marginLeft:'-70px'}}><Link href="REngineeringental">Engineering Design Services</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="Rental"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/allimg/civil/civil1.webp" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="civil" style={{marginLeft:'40px'}}>Civil Works</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="Trading"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img1.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Structural Mastery</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img2.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Foundation Laying</Link></h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img3.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Green Construction</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img1.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Structural Mastery</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img2.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Foundation Laying</Link></h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img3.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Green Construction</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 4 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img1.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Structural Mastery</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img2.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Foundation Laying</Link></h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img3.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Green Construction</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 5 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img1.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Structural Mastery</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img2.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Foundation Laying</Link></h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="assets/images/services/services-v2-img3.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="structural-mastery">Green Construction</Link>
                                                        </h3>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="structural-mastery"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Services Two*/} 
       
        </>
    )
}
