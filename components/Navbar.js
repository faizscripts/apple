import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/Link";
import HomePage from "../pages";
import {useState} from "react";

function Navbar() {
    const [keyword,setKeyword]=useState('')

    const searchHandler = (e) =>{
        e.preventDefault()

    }

    return (

        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link href="/"><Image src="/images/favicon/apple-touch-icon.png" alt="favicon-apple" width="20px" height="25px" className="logo"/></Link>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link links" aria-current="page" href="store">Store</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  links " href="macbook">Mac</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link links" href="ipad">Ipad</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link links" href="iphone">Iphone</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link links" href="watch">Watch</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link links" href="airpods">Airpods</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link links" href="accessories">Accessories</Link>
                            </li>
                        </ul>
                        <form className="d-flex input-icon me-3" role="search" onSubmit={searchHandler}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden={false} className='search'/>
                            <input className="form-control me-2 input-field" type="search" placeholder="Search" aria-label="Search"
                                   onChange={(e)=>setKeyword(e.target.value)}
                            />
                        </form>
                        <div className='cart mt-2'>
                            <a href="cart"><FontAwesomeIcon icon={faBagShopping} aria-hidden={false} className="bag" /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar