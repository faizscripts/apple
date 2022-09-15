import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping,faSearch} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white-50 header-name ms-2" href="#">
                        <img src="images/favicon/apple-touch-icon.png" className="logo"/>
                        express
                    </a>
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
                                <a className="nav-link  me-2 links" href="#">Mac</a>
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
                            <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden='search icon' className='search'/>
                            <input className="form-control me-2 input-field" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                        <div className='cart'>
                            <FontAwesomeIcon icon={faBagShopping} aria-hidden="shopping bag" className="bag" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar