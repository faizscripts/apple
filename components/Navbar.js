import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Navbar() {
    return (

        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <Image src="/images/favicon/apple-touch-icon.png" alt="favicon-apple" width="20px" height="25px" className="logo"/>

                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <a className="nav-link me-2 links" aria-current="page" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  me-2 links " href="#">Mac</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 links" href="#">Ipad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 links" href="#">Iphone</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 links" href="#">Watch</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 links" href="#">Airpods</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 links" href="#">TV & Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 links" href="#">Only On Apple</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 links" href="#">Accessories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 links" href="#">Support</a>
                            </li>
                        </ul>
                        <form className="d-flex input-icon me-3" role="search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden={false} className='search'/>
                            <input className="form-control me-2 input-field" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                        <div className='cart mt-2'>
                            <FontAwesomeIcon icon={faBagShopping} aria-hidden={false} className="bag" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar