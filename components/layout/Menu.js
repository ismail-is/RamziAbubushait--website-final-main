import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                {/* <li className="dropdown megamenu">
                    <Link href="/">Home </Link>
                    <ul>
                        <li>
                            <section className="home-showcase">
                                <div className="container">
                                    <div className="home-showcase__inner">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-1.jpg"
                                                            alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <Link href="/"
                                                                className="thm-btn home-showcase__buttons__item">View
                                                                Page
                                                                <span
                                                                    className="hover-btn hover-bx"></span>
                                                                <span
                                                                    className="hover-btn hover-bx2"></span>
                                                                <span
                                                                    className="hover-btn hover-bx3"></span>
                                                                <span
                                                                    className="hover-btn hover-bx4"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">Home
                                                        Page
                                                        01</h3>
                                                   
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-2.jpg"
                                                            alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <Link href="index-2"
                                                                className="thm-btn home-showcase__buttons__item">View
                                                                Page
                                                                <span
                                                                    className="hover-btn hover-bx"></span>
                                                                <span
                                                                    className="hover-btn hover-bx2"></span>
                                                                <span
                                                                    className="hover-btn hover-bx3"></span>
                                                                <span
                                                                    className="hover-btn hover-bx4"></span>
                                                            </Link>
                                                        </div>
                                                        
                                                    </div>
                                                    <h3 className="home-showcase__title">Home
                                                        Page
                                                        02
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-3.jpg"
                                                            alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <Link href="index-3"
                                                                className="thm-btn home-showcase__buttons__item">View
                                                                Page
                                                                <span
                                                                    className="hover-btn hover-bx"></span>
                                                                <span
                                                                    className="hover-btn hover-bx2"></span>
                                                                <span
                                                                    className="hover-btn hover-bx3"></span>
                                                                <span
                                                                    className="hover-btn hover-bx4"></span>
                                                            </Link>
                                                        </div>
                                                        
                                                    </div>
                                                    <h3 className="home-showcase__title">Home
                                                        Page
                                                        03
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-4.jpg"
                                                            alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <Link href="index-dark"
                                                                className="thm-btn home-showcase__buttons__item">View
                                                                Page
                                                                <span
                                                                    className="hover-btn hover-bx"></span>
                                                                <span
                                                                    className="hover-btn hover-bx2"></span>
                                                                <span
                                                                    className="hover-btn hover-bx3"></span>
                                                                <span
                                                                    className="hover-btn hover-bx4"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">Home
                                                        Page
                                                        04
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </section>
                        </li>
                    </ul>
                </li> */}
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>

                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul className="shadow-box">
                        <li><Link href="Steel">Steel Fabrication</Link></li>
                        <li><Link href="Sand">Sand Blasting</Link></li>
                        <li><Link href="Rental">Rental Services</Link></li>
                        <li><Link href="Trading">Trading Services</Link></li>
                        <li><Link href="Engineering">Engineering Design Services</Link>
                                    </li>
                                    <li ><Link href="civil">Civil Works</Link>
                                    </li>
                        {/* <li><Link href="apex-remodeling">Apex Remodeling</Link></li> */}
                    </ul>
                </li>

                {/* <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul className="shadow-box">
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="portfolio">Portfolio</Link></li>
                        <li><Link href="portfolio-details">Portfolio Details</Link></li>
                        <li><Link href="testimonial">Testimonials</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul className="shadow-box">
                        <li><Link href="products">Products</Link></li>
                        <li><Link href="product-details">Product Details</Link></li>
                        <li><Link href="cart">Cart</Link></li>
                        <li><Link href="checkout">Checkout</Link></li>
                        <li><Link href="wishlist">Wishlist</Link></li>
                        <li><Link href="account">My Account</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul className="shadow-box">
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-standard">Blog Standard</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li> */}
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
