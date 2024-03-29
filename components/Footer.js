import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faLocation} from "@fortawesome/free-solid-svg-icons/faLocation";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import Link from "next/link";

function Footer() {

    const categories = useSelector((state)=>state.categories)

    const renderCategories = () => {
        return categories?.map(
            category => {
                return (
                    <li key={category._id} className="nav-item">
                        <Link className="nav-link  links " href={`/categories/${category._id}`}>{category.category_name}</Link>
                    </li>
                )
            }
        )
    }

    return (
        <div className='container-fluid footer'>
            <div className='container'>
                <div className='footer-top row'>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                    Products
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        {renderCategories()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                    Socials
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li className='mt-2 accordion-li'><a href="#">Twitter</a></li>
                                        <li className='mt-2 accordion-li'><a href="#">Instagram</a></li>
                                        <li className='mt-2 accordion-li'><a href="#">Facebook</a></li>
                                        <li className='mt-2 accordion-li'><a href="#">Linked In</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                    Contacts
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li className='mt-2 accordion-li'>Apple Express Ltd</li>
                                        <li className='mt-2 accordion-li'><a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}></a><FontAwesomeIcon icon={faPhone} aria-hidden="false" className="phone"></FontAwesomeIcon>  {process.env.NEXT_PUBLIC_PHONE}</li>
                                        <li className='mt-2 accordion-li'><FontAwesomeIcon icon={faLocation} aria-hidden='false' className='arrow-location'/> Nairobi, Kenya</li>
                                        <li className='mt-2 accordion-li'><FontAwesomeIcon icon={faEnvelope} aria-hidden='false' className='envelope'/> info@appleexpress.co.ke</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='collapse-medium'>
                    <div className='products-section col-4'>
                        <h1>Products</h1>
                        <ul>
                            {renderCategories()}
                        </ul>
                    </div>
                    <div className='socials-section col-4'>
                        <h1>Socials</h1>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Linked In</a></li>
                        </ul>
                    </div>
                    <div className='contacts col-4'>
                        <h1>Contacts</h1>
                        <ul>
                            <li>Apple Express Ltd</li>
                            <li><a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}><FontAwesomeIcon icon={faPhone} aria-hidden="false" className="phone"></FontAwesomeIcon> {process.env.NEXT_PUBLIC_PHONE}</a></li>
                            <li><FontAwesomeIcon icon={faLocation} aria-hidden='false' className='arrow-location'/> Nairobi, Kenya</li>
                            <li><FontAwesomeIcon icon={faEnvelope} aria-hidden='false' className='envelope'/> info@appleexpress.co.ke</li>
                        </ul>
                    </div>
                </div>
                </div>
                <hr/>
                <div className='footer-bottom d-flex justify-content-center'>
                    <p className='text-center'>Apple Express &copy; {new Date().getFullYear()} </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
