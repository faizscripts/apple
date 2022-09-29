import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {faTableCellsLarge} from "@fortawesome/free-solid-svg-icons/faTableCellsLarge";
import {faTableCells} from "@fortawesome/free-solid-svg-icons";
import gadgets from '../public/images/categories/accessories-page-title.jpg'
import ProductItem from "./ProductItem";

function CategoryPage({title,children}) {


    return (
        <div className='categories-container'>
            <div className='container-fluid img-background' style={{backgroundImage: `url('${gadgets.src}')`}}>
                <div className='accordion-container'>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div>
                                        <h2>MACBOOK</h2>
                                        <p>4 PRODUCTS</p>
                                    </div>
                                    <div>
                                        <h2>IPAD</h2>
                                        <p>0 PRODUCTS</p>
                                    </div>
                                    <div>
                                        <h2>IPHONE</h2>
                                        <p>9 PRODUCTS</p>
                                    </div>
                                    <div>
                                        <h2>WATCH</h2>
                                        <p>4 PRODUCTS</p>
                                    </div>
                                    <div>
                                        <h2>AIRPODS</h2>
                                        <p>4 PRODUCTS</p>
                                    </div>
                                    <div>
                                        <h2>ACCESSORIES</h2>
                                        <p>2 PRODUCTS</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='secondary-container'>
                    <h1><FontAwesomeIcon icon={faArrowLeft}  className='arrow-left'/> {title}
                    </h1>
                    <div className='d-flex container categories-list d-flex justify-content-center'>
                        <div className='cards mx-4'>
                            <h2>MACBOOK</h2>
                            <p>4 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <h2>IPAD</h2>
                            <p>0 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <h2>IPHONE</h2>
                            <p>9 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <h2>WATCH</h2>
                            <p>4 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <h2>AIRPODS</h2>
                            <p>4 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <h2>ACCESSORIES</h2>
                            <p>2 PRODUCTS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-container row d-flex justify-content-center'>
                <div className='filter-container col-3'>
                    <div>
                        <h3 className='my-3'>FILTER BY PRICE</h3>
                        <form>
                            <input type="range" className="form-range" id="customRange1"/>
                            <br/>
                            <label htmlFor="customRange1" className="form-label"> <span>Price:</span> Ksh20,000 -
                                Ksh100,000</label>
                            <br/>
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
                <div className='products-container col-8'>
                    <div className='d-flex justify-content-between mt-3'>
                        <h3 className='header-products'><span>Home</span> / {title}</h3>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='me-5'>
                                <h3 className='header-products'>Show :<span> 9 /</span><span> 12 / </span><span>18 / </span><span>24</span> </h3>
                            </div>
                            <div className='me-5'>
                                <FontAwesomeIcon icon={faTableCellsLarge} aria-hidden='2 row and 2 coloumns' className='icons'/>
                                <FontAwesomeIcon icon={faTableCells} aria-hidden='3 row and 3 coloumns' className='icons'/>
                            </div>
                            <div className="dropdown me-5">
                                <div className="dropdown-toggle dropdown-div" type="button"
                                     data-bs-toggle="dropdown" aria-expanded="false">
                                    Default Sorting
                                </div>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 compact-container'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage