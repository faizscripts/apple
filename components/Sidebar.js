import {Router} from "next/router";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faMultiply} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";


function Sidebar() {

    const sidebarRef=useRef(null)

    function closeSideBar() {
        sidebarRef.current.classList.add('remove')
        sidebarRef.current.classList.remove('active')
    }

    function addSideBar() {
        sidebarRef.current.classList.remove('remove')
        sidebarRef.current.classList.add('active')
    }

    return(
        <div className='sidebar-container'>
            <div className="sidebar"  ref={sidebarRef}>
                <div className='filter-container'>
                    <div className='px-3'>
                        <div className='d-flex justify-content-between align-items-center'>
                        <h3 className='my-3'>FILTER BY PRICE</h3>
                        <FontAwesomeIcon icon={faMultiply} onClick={closeSideBar} className='remove-button'/>
                        </div>
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
                    <div className='px-3'>
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
    )
}

export default Sidebar