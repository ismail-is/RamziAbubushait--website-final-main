
'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

// Dynamically load isotope-layout with ssr: false
const Isotope = dynamic(() => import('isotope-layout'), { ssr: false });

export default function PortfolioFilter1() {
    const isotope = useRef(null);
    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        let iso;

        const loadIsotope = async () => {
            const IsotopeLib = (await import('isotope-layout')).default;
            iso = new IsotopeLib('.items-container', {
                itemSelector: '.masonry-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.masonry-item',
                },
            });
            isotope.current = iso;
        };

        loadIsotope();

        return () => {
            // Cleanup
            if (iso) {
                iso.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (isotope.current) {
            filterKey === '*'
                ? isotope.current.arrange({ filter: '*' })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);

    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key);
    }, []);

    const activeBtn = (value) => (value === filterKey ? 'filter active' : 'filter');

    return (
        <>
            {/* Filter buttons */}
            {/* <div className="portfolio-two__menu-box">
                <ul className="project-filter clearfix post-filter has-dynamic-filters-counter">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}><span className="filter-text">All Project</span></li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}><span className="filter-text">Factory</span></li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}><span className="filter-text">Offices</span></li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}><span className="filter-text">Interiors</span></li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}><span className="filter-text">Building</span></li>
                </ul>
            </div> */}

            {/* Portfolio Items */}
            <div className="row">
                {/* Example Portfolio Items */}
                {/* <div className="col-xl-4 col-lg-4">
                    <div className="portfolio-two__single">
                        <div className="portfolio-two__single-img">
                            <img src="assets/images/allimg/ourworks/1.webp" alt=""/>
                        </div>
                        <div className="content-box">
                            <h2>Fabrication Of Skid, Tank, Spools And Crossover</h2>
                        </div>
                    </div>
                </div> */}
                <div className="col-xl-12 col-lg-8">
                    <div className="row items-container">
                        {/* Start Portfolio Two Single*/} 
                        <div className="col-xl-4 col-lg-6 masonry-item all cat-1">
                            <div className="portfolio-two__single wow fadeInUp" data-wow-delay="100ms">
                                <div className="portfolio-two__single-img">
                                    <img src="assets/images/allimg/ourworks/1.webp" alt=""/>
                                </div>
                                
                                <div className="content-box">
                                    <h2>Fabrication Of Skid, Tank, Spools And Crossover</h2>
                                </div>
                            </div>
                        </div>
                        {/* End Portfolio Two Single*/} 
                        {/* Start Portfolio Two Single*/} 
                        <div className="col-xl-4 col-lg-6 masonry-item all cat-1">
                            <div className="portfolio-two__single wow fadeInUp" data-wow-delay="100ms">
                                <div className="portfolio-two__single-img">
                                    <img src="assets/images/allimg/ourworks/2.webp" alt=""/>
                                </div>
                                
                                <div className="content-box">
                                    <h2>Fabrication & Refurbishment</h2>
                                </div>
                            </div>
                        </div>
                        {/* End Portfolio Two Single*/} 

                        {/* Start Portfolio Two Single*/} 
                        <div className="col-xl-4 col-lg-6 masonry-item all cat-2">
                            <div className="portfolio-two__single wow fadeInUp" data-wow-delay="100ms">
                                <div className="portfolio-two__single-img">
                                    <img src="assets/images/allimg/ourworks/3.webp" alt=""/>
                                </div>
                               
                                <div className="content-box">
                                    {/* <p>construction</p> */}
                                    <h2>Skids, Wellhead Platform, Flare Line Suitcase And Structures</h2>
                                </div>
                            </div>
                        </div>
                        {/* End Portfolio Two Single*/} 

                        {/* Start Portfolio Two Single*/} 
                        <div className="col-xl-4 col-lg-6 masonry-item all cat-4">
                            <div className="portfolio-two__single wow fadeInUp" data-wow-delay="100ms">
                                <div className="portfolio-two__single-img">
                                    <img src="assets/images/allimg/ourworks/4.webp" alt=""/>
                                </div>
                               
                                <div className="content-box">
                                    {/* <p>construction</p> */}
                                    <h2>Fabrication Of Silo</h2>
                                </div>
                            </div>
                        </div>
                        {/* End Portfolio Two Single*/} 

                        {/* Start Portfolio Two Single*/} 
                        <div className="col-xl-4 col-lg-6 masonry-item all cat-3">
                            <div className="portfolio-two__single wow fadeInUp" data-wow-delay="100ms">
                                <div className="portfolio-two__single-img">
                                    <img src="assets/images/allimg/ourworks/5.webp" alt=""/>
                                </div>
                               
                                <div className="content-box">
                                    {/* <p>construction</p> */}
                                    <h2>Geothermal Project-hes</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 masonry-item all cat-3">
                            <div className="portfolio-two__single wow fadeInUp" data-wow-delay="100ms">
                                <div className="portfolio-two__single-img">
                                    <img src="assets/images/allimg/ourworks/6.webp" alt=""/>
                                </div>
                               
                                <div className="content-box">
                                    {/* <p>construction</p> */}
                                    <h2>Dnv Certified Skips</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 masonry-item all cat-3">
                            <div className="portfolio-two__single wow fadeInUp" data-wow-delay="100ms">
                                <div className="portfolio-two__single-img">
                                    <img src="assets/images/allimg/ourworks/7.webp" alt=""/>
                                </div>
                               
                                <div className="content-box">
                                    {/* <p>construction</p> */}
                                    <h2>Surface Treatment</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 masonry-item all cat-3">
                            <div className="portfolio-two__single wow fadeInUp" data-wow-delay="100ms">
                                <div className="portfolio-two__single-img">
                                    <img src="assets/images/allimg/ourworks/8.webp" alt=""/>
                                </div>
                               
                                <div className="content-box">
                                    {/* <p>construction</p> */}
                                    <h2>Fabrication Of Dnv Skips, Tanks, Baskets And Skids</h2>
                                </div>
                            </div>
                        </div>
                        {/* End Portfolio Two Single*/} 
                    </div>
                </div>
            </div>
        </>
    );
}
