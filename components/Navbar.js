import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from 'next/link'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {initializeCart} from "../redux/features/cart";

function Navbar() {
    const [keyword, setKeyword] = useState('')

    const dispatch = useDispatch()

    const categories = useSelector((state) => state.categories)
    const cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        dispatch(initializeCart());
    }, [dispatch]);

    const searchHandler = (e) => {
        e.preventDefault()
    }

    const renderCategories = () => {
        return categories?.map(
            category => {
                return (
                    <li key={category._id} className="nav-item">
                        <Link className="nav-link  links "
                              href={`/categories/${category._id}`}>{category.category_name}</Link>
                    </li>
                )
            }
        )
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link href="/">
                    <div className='header-navbar'>
                        <Image src="/images/logo.webp" alt="favicon-apple" className="logo" height="30" width="30"/>
                        <div>Express</div>
                    </div>
                </Link>
                <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        {renderCategories()}
                    </ul>
                    <form className="d-flex input-icon me-3 position-relative" role="search" onSubmit={searchHandler}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden={false} className='search'/>
                        <input className="form-control me-2 input-field" type="search" placeholder="Search"
                               aria-label="Search"
                               onChange={(e) => setKeyword(e.target.value)}
                        />
                    </form>
                    <div className='cart mt-2'>
                        <div className='position-relative'>
                            <Link href="/cart">
                                <FontAwesomeIcon icon={faBagShopping} aria-hidden={false} className="bag"/>
                            </Link>
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartItems.length}
                              <span className="visually-hidden">unread messages</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
