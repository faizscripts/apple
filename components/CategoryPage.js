import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {faTableCellsLarge} from "@fortawesome/free-solid-svg-icons/faTableCellsLarge";
import {faTableCells} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import gadgets from '../public/images/categories/accessories-page-title.jpg'
import ReactSlider$1 from "react-slider";
import {useState} from "react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";

function CategoryPage({title, children}) {


    return (
        <div className='categories-container'>
            <div className='container-fluid img-background' style={{backgroundImage: `url('${gadgets.src}')`}}>
                <div className='secondary-container'>
                    <h1><FontAwesomeIcon icon={faArrowLeft} className='arrow-left'/> {title}
                    </h1>
                    <div className='accordion-container'>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed bg-dark text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                        CATEGORIES
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                     aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body bg-dark text-white">
                                        <div className='mt-3'>
                                            <a href="Store"><h2>ALL</h2></a>
                                            <p>PRODUCTS</p>
                                        </div>
                                        <div className='pt-2'>
                                            <a href="Macbook"><h2>MACBOOK</h2></a>
                                            <p>4 PRODUCTS</p>
                                        </div>
                                        <div className='pt-2'>
                                            <a href="Ipad"><h2>IPAD</h2></a>
                                            <p>0 PRODUCTS</p>
                                        </div>
                                        <div className='pt-2'>
                                            <a href="Iphone"><h2>IPHONE</h2></a>
                                            <p>9 PRODUCTS</p>
                                        </div>
                                        <div className='pt-2'>
                                            <a href="Watch"><h2>WATCH</h2></a>
                                            <p>4 PRODUCTS</p>
                                        </div>
                                        <div className='pt-2'>
                                            <a href="Airpods"><h2>AIRPODS</h2></a>
                                            <p>4 PRODUCTS</p>
                                        </div>
                                        <div className='pt-2'>
                                            <a href="Accessories"><h2>ACCESSORIES</h2></a>
                                            <p>2 PRODUCTS</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container categories-list'>
                        <div className='cards mx-4'>
                            <a href="Macbook"><h2>MACBOOK</h2></a>
                            <p>4 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <a href="Ipad"><h2>IPAD</h2></a>
                            <p>0 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <a href="Iphone"><h2>IPHONE</h2></a>
                            <p>9 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <a href="Watch"><h2>WATCH</h2></a>
                            <p>4 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <a href="Airpods"><h2>AIRPODS</h2></a>
                            <p>4 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <a href="Accessories"><h2>ACCESSORIES</h2></a>
                            <p>2 PRODUCTS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-container row d-flex justify-content-center'>
                <div className='filter-container col-lg-3'>
                    <div>
                        <h3 className='my-3'>FILTER BY PRICE</h3>
                        <form>
                            <MultiRangeSlider
                                min={500}
                                max={210000}
                                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                            />
                            <button type="button" className="btn btn-light">Filter</button>
                        </form>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='my-3'>STOCK STATUS</h3>
                        <form>
                            <input type="checkbox" name="" id="on-sale" htmlFor='on-sale' placeholder='on sale'/>
                            <label htmlFor="on-sale" className='ms-2'>on sale</label>
                            <br/>
                            <input type="checkbox" name="" id="on-sale" htmlFor='in-site' placeholder='in site'/>
                            <label htmlFor="in-site" className='ms-2'>in site</label>
                        </form>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='my-3'>TOP RATED PRODUCTS</h3>
                        <div className='d-flex'>
                            <div>
                                <img src="./images/products/AirPods/airpod-pros.jpg.webp" alt="airpods pro"
                                     className='top-rated-img'/>
                            </div>
                            <div className='mx-3'>
                                <h4>Airpods pro</h4>
                                <p className='price'>Ksh 23,000</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='d-flex'>
                            <div>
                                <img src="./images/products/iphone/iphone-13-dual.jpg.png" alt="iphone 13"
                                     className='top-rated-img'/>
                            </div>
                            <div className='mx-3'>
                                <h4>iphone 13 dual</h4>
                                <p className='price'>Ksh 118,000</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='d-flex'>
                            <div>
                                <img src="./images/products/Watch/series-7.webp" alt="airpods pro"
                                     className='top-rated-img'/>
                            </div>
                            <div className='mx-3'>
                                <h4>Series 7 midnight leather</h4>
                                <p className='price'>Ksh 23,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='products-container col-lg-8 col-md-12'>
                    <div className='d-flex justify-content-between mt-3 mx-2'>
                        <h3 className='header-products'><span>Home</span> / {title}</h3>
                        <div className='filter'>
                            <div className="dropdown me-5">
                                <div className="dropdown-toggle dropdown-div" type="button"
                                     data-bs-toggle="dropdown" aria-expanded="false">
                                    Default Sorting
                                </div>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Sort by popularity</a></li>
                                    <li><a className="dropdown-item" href="#">Sort by average rating</a></li>
                                    <li><a className="dropdown-item" href="#">Sort by latest</a></li>
                                    <li><a className="dropdown-item" href="#">Sort by price:high to low</a></li>
                                    <li><a className="dropdown-item" href="#">Sort by price:low to high</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className='hr-medium-width'/>
                    <div className='bars mx-2 toggle-side-bar'>
                        <h3 data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasWithBothOptions"
                            aria-controls="offcanvasWithBothOptions"><FontAwesomeIcon icon={faBars} className='me-2'/>Show
                            side bar
                        </h3>

                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1"
                             id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">FILTER BY PRICE</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className='px-3'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                    </div>
                                    <form>
                                        <MultiRangeSlider min={500} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} max={210000}/>
                                        <button type="button" className="btn btn-light">Filter</button>
                                    </form>
                                </div>
                                <hr/>
                                <div className='px-3'>
                                    <h3 className='my-3'>STOCK STATUS</h3>
                                    <form>
                                        <input type="checkbox" name="" id="on-sale" htmlFor='on-sale'
                                               placeholder='on sale'/>
                                        <label htmlFor="on-sale" className='ms-2'>on sale</label>
                                        <br/>
                                        <input type="checkbox" name="" id="on-sale" htmlFor='in-site'
                                               placeholder='in site'/>
                                        <label htmlFor="in-site" className='ms-2'>in site</label>
                                    </form>
                                </div>
                                <hr/>
                                <hr/>
                                <div className='px-3'>
                                    <h3 className='my-3'>TOP RATED PRODUCTS</h3>
                                    <div className='d-flex'>
                                        <div>
                                            <img src="./images/products/AirPods/airpod-pros.jpg.webp" alt="airpods pro"
                                                 className='top-rated-img'/>
                                        </div>
                                        <div className='mx-3'>
                                            <h4>Airpods pro</h4>
                                            <p className='price'>Ksh 23,000</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className='d-flex'>
                                        <div>
                                            <img src="./images/products/iphone/iphone-13-dual.jpg.png" alt="iphone 13"
                                                 className='top-rated-img'/>
                                        </div>
                                        <div className='mx-3'>
                                            <h4>iphone 13 dual</h4>
                                            <p className='price'>Ksh 118,000</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className='d-flex'>
                                        <div>
                                            <img src="./images/products/Watch/series-7.webp" alt="airpods pro"
                                                 className='top-rated-img'/>
                                        </div>
                                        <div className='mx-3'>
                                            <h4>Series 7 midnight leather</h4>
                                            <p className='price'>Ksh 23,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='compact-container'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
)
}

export default CategoryPage