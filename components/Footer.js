import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faLocation} from "@fortawesome/free-solid-svg-icons/faLocation";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


function Footer() {
    return (
        <div className='container-fluid footer'>
            <div className='container'>
                <div className='footer-top row'>
                    <div className='products-section col-3'>
                        <h1>Products</h1>
                        <ul>
                            <li>Macbook</li>
                            <li>Ipad</li>
                            <li>Iphone</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div className='customer-service col-3'>
                        <h1>Customer Service</h1>
                        <ul>
                            <li>Order Tracking</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div className='socials-section col-3'>
                        <h1>Socials</h1>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Linked In</a></li>
                        </ul>
                    </div>
                    <div className='contacts col-3'>
                        <h1>Contacts</h1>
                        <ul>
                            <li>Apple Express Ltd</li>
                            <li><FontAwesomeIcon icon={faPhone} aria-hidden="false" className="phone"></FontAwesomeIcon>  +254 723 456 789</li>
                            <li><FontAwesomeIcon icon={faLocation} aria-hidden='false' className='arrow-location'/> Nairobi, Kenya</li>
                            <li><FontAwesomeIcon icon={faEnvelope} aria-hidden='false' className='envelope'/> info@appleexpress.co.ke</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className='footer-bottom row'>
                    <p className='col-md-12 col-lg-5'>Apple Express &copy; 2022 </p>
                    <div className='d-flex col-md-12 col-lg-7'>
                        <p className='me-5 p-border-right'>Terms & Conditions</p>
                        <p className='me-5 p-border-right'>Returns & Refunds Policy</p>
                        <p className='me-5 p-border-right'>Privacy Policy</p>
                        <p className='me-5 p-border-right'>Shipping</p>
                        <p className='me-5'>Faqs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer