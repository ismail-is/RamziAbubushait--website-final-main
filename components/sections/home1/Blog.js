'use client'
import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/* Start Blog One*/} 
        <section className="blog-one" style={{backgroundColor:'#FFFFFF'}}>
            <div className="shape1 float-bob-x"><img src="assets/images/shapes/blog-v1-shape1.png" alt=""/></div>
            <div className="container">

                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4 ></h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title" style={{color:'#0E121D'}}>Our Services</h2>
                </div>

                <div className="row">
                    {/* Start Blog One Single*/} 
                    <div className="col-xl-6 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                {/* <div className="date-box">
                                    <h3><span className="icon-calendar"></span> 20 Jun, 2024</h3>
                                </div> */}

                                <div className="inner">
                                    <img src="assets/images/allimg/service/Steel.webp" alt=""/>
                                    <img src="assets/images/allimg/service/Steel.webp" alt=""/>
                                </div>
                            </div>

                            <div className="blog-one__single-content">
                                {/* <ul className="meta-box">
                                    <li>
                                        <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                    </li>

                                    <li>
                                        <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                    </li>
                                </ul> */}

                                <h2><Link href="blog-details"  style={{color:'#0E121D'}}>Steel Fabrication</Link></h2>
                                <p style={{color:'#0E121D'}}>Precision-Crafted Metal Structures for Every Project Size</p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                {/* <div className="date-box">
                                    <h3><span className="icon-calendar"></span> 20 Jun, 2024</h3>
                                </div> */}

                                <div className="inner">
                                    <img src="assets/images/allimg/service/Sand.webp" alt=""/>
                                    <img src="assets/images/allimg/service/Sand.webp" alt=""/>
                                </div>
                            </div>

                            <div className="blog-one__single-content">
                                {/* <ul className="meta-box">
                                    <li>
                                        <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                    </li>

                                    <li>
                                        <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                    </li>
                                </ul> */}

                                <h2><Link href="blog-details"  style={{color:'#0E121D'}}>Sand Blasting</Link></h2>
                                <p style={{color:'#0E121D'}}>Industrial-Grade Surface Treatment Solutions</p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                     <div className="col-xl-6 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                {/* <div className="date-box">
                                    <h3><span className="icon-calendar"></span> 20 Jun, 2024</h3>
                                </div> */}

                                <div className="inner">
                                     <img src="assets/images/allimg/service/Rental.webp" alt=""/>
                                    <img src="assets/images/allimg/service/Rental.webp" alt=""/>
                                </div>
                            </div>

                            <div className="blog-one__single-content">
                                {/* <ul className="meta-box">
                                    <li>
                                        <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                    </li>

                                    <li>
                                        <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                    </li>
                                </ul> */}

                                <h2><Link href="blog-details"  style={{color:'#0E121D'}}>Rental Services</Link></h2>
                                <p style={{color:'#0E121D'}}>On-Demand Machinery and Tools to Keep Your Projects Moving</p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                {/* <div className="date-box">
                                    <h3><span className="icon-calendar"></span> 20 Jun, 2024</h3>
                                </div> */}

                                <div className="inner">
                                    <img src="assets/images/allimg/service/Trading.webp" alt=""/>
                                    <img src="assets/images/allimg/service/Trading.webp" alt=""/>
                                </div>
                            </div>

                            <div className="blog-one__single-content">
                                {/* <ul className="meta-box">
                                    <li>
                                        <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                    </li>

                                    <li>
                                        <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                    </li>
                                </ul> */}

                                <h2><Link href="blog-details"  style={{color:'#0E121D'}}>Trading</Link></h2>
                                <p style={{color:'#0E121D'}}>Supplying High-Quality Industrial Materials with Speed and Accuracy</p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Blog One Single*/} 

                    {/* Start Blog One Single*/} 
                    {/* <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="date-box">
                                    <h3><span className="icon-calendar"></span> 20 Jun, 2024</h3>
                                </div>

                                <div className="inner">
                                    <img src="assets/images/blog/blog-v1-img2.jpg" alt=""/>
                                    <img src="assets/images/blog/blog-v1-img2.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="blog-one__single-content">
                                <ul className="meta-box">
                                    <li>
                                        <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                    </li>

                                    <li>
                                        <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                    </li>
                                </ul>

                                <h2><Link href="blog-details">Turning houses into homes <br/> and dreams into
                                        reality</Link></h2>
                                <p>Real estate refers to land, buildings, natural resources such as water </p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* End Blog One Single*/} 

                    {/* Start Blog One Single*/} 
                    {/* <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="date-box">
                                    <h3><span className="icon-calendar"></span> 20 Jun, 2024</h3>
                                </div>

                                <div className="inner">
                                    <img src="assets/images/blog/blog-v1-img3.jpg" alt=""/>
                                    <img src="assets/images/blog/blog-v1-img3.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="blog-one__single-content">
                                <ul className="meta-box">
                                    <li>
                                        <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                    </li>

                                    <li>
                                        <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                    </li>
                                </ul>

                                <h2><Link href="blog-details">Turning houses into homes <br/> and dreams into
                                        reality</Link></h2>
                                <p>Real estate refers to land, buildings, natural resources such as water </p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* End Blog One Single*/} 
                </div>
            </div>
        </section>
        {/* End Blog One*/} 

        </>
    )
}
