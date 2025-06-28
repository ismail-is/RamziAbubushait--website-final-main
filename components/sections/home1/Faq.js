'use client'
import { useState } from 'react'
export default function Faq() {
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
        {/* Start Faq One*/} 
        <section className="faq-one">
            <div className="shape1"><img src="assets/images/shapes/faq-v1-shape1.png" alt=""/></div>
            <div className="shape2"><img src="assets/images/allimg/shape3.png" alt=""/></div>
            <div className="shape3"><img src="assets/images/shapes/faq-v1-shape3.png" alt=""/></div>
            <div className="shape4 float-bob-x"><img src="assets/images/shapes/faq-v1-shape4.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start Faq One Faq*/} 
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="faq-one__faq">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4></h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Industries We Serve </h2>
                            </div>

                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1" >
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)} style={{backgroundColor:'white'}}>
                                    <div className="accrodion-title">
                                        <h4 style={{color:'black'}}>We support a wide range of industries including:</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p  style={{color:'#4d5765'}}>Civil Construction & Infrastructure</p>
                                            <p  style={{color:'#4d5765'}}>Oil & Gas Support Services</p>
                                            <p  style={{color:'#4d5765'}}>Manufacturing & Process Plants</p>
                                            <p  style={{color:'#4d5765'}}>Marine & Shipbuilding</p>
                                            <p  style={{color:'#4d5765'}}>Power & Utilities</p>
                                            <p  style={{color:'#4d5765'}}>Mining & Quarrying</p>
                                            <p  style={{color:'#4d5765'}}> Warehousing & Logistics
</p>
                                        </div>
                                    </div>
                                </div>
                                <br/>
<h5  style={{color:'white'}}>Our ability to deliver cross-functional services makes us a preferred partner for turnkey solutions and multi-trade projects.</h5>
                                {/* <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>Our ability to deliver cross-functional services makes us a preferred partner for turnkey solutions and multi-trade projects.</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What is the role of a real estate agent?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>How to do Interior step by step?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork.</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* End Faq One Faq*/} 

                    {/* Start Faq One Img*/} 
                    <div className="col-xl-7 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="faq-one__img">

                            <ul className="faq-one__img-list1">
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/allimg/home/H1.jpg" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/allimg/home/H3.jpg" alt=""/>
                                    </div>
                                </li>
                            </ul>

                            <ul className="faq-one__img-list2">
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/allimg/home/H4.jpg" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/allimg/home/H2.jpg" alt=""/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Faq One Img*/} 
                </div>
            </div>
        </section>
        {/* End Faq One*/} 
        
            
        </>
    )
}
