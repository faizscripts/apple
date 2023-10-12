import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from 'next/link'
import {useEffect, useState,useRef} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {initializeCart} from "../redux/features/cart";
import {setSearchTerm} from "../redux/features/search";
import {useRouter} from "next/router";
import debounce from 'lodash.debounce';

function Navbar() {
    const collapseRef = useRef(null);
    const dispatch = useDispatch();
    const router = useRouter();
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const categories = useSelector((state) => state.categories)
    const cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        dispatch(initializeCart());
    }, [dispatch]);

    const handleSearchInputChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    const searchHandler = (value) => {
        if (value) {
            router.push(`/search/${value}`);
        } else {
            console.error("Search term is empty");
        }
    };

    const debouncedSearchHandler = debounce((value) => {
        searchHandler(value);
    }, 2000);

    const handleSubmit = (e) => {
        e.preventDefault();
        debouncedSearchHandler(searchTerm);
        if (collapseRef.current) {
            collapseRef.current.classList.remove("show");
        }
    };

    const closeNavbar = () => {
        if (collapseRef.current) {
            collapseRef.current.classList.remove("show");
        }
    };

    const renderCategories = () => {
        return categories?.map(
            category => {
                return (
                    <li key={category._id} className="nav-item" onClick={closeNavbar}>
                        <Link className="nav-link  links "
                              href={`/categories/${category._id}`}>{category.category_name}</Link>
                    </li>
                )
            }
        )
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid navbar-large d-lg-flex  d-none">
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
                    <form className="d-flex input-icon me-3 position-relative" role="search" onSubmit={handleSubmit}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden={false} className='search'/>
                        <input className="form-control me-2 input-field" type="search" placeholder="Search"
                               value={searchTerm}
                               aria-label="Search"
                               onChange={handleSearchInputChange}/>
                    </form>
                </div>
                <div className='cart mt-2 position-relative'>
                    <Link href="/cart">
                        <FontAwesomeIcon icon={faBagShopping} aria-hidden={false} className="bag"/>
                    </Link>
                    <span className="unread-span top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartItems.length}
                        <span className="visually-hidden">unread messages</span>
                            </span>
                </div>
            </div>
            <div className="container-fluid navbar-small d-lg-none d-md-flex">
                <Link href="/">
                    <div className='header-navbar'>
                        <Image src="/images/logo.webp" alt="favicon-apple" className="logo" height="30" width="30"/>
                        <div>Express</div>
                    </div>
                </Link>
                <div className='cart mt-2 position-relative mx-auto'>
                    <Link href="/cart">
                        <FontAwesomeIcon icon={faBagShopping} aria-hidden={false} className="bag"/>
                    </Link>
                    <span className="unread-span top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartItems.length}
                        <span className="visually-hidden">unread messages</span>
                            </span>
                </div>
                <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collapseRef}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {renderCategories()}
                    </ul>
                    <form className="d-flex input-icon me-3 position-relative" role="search" onSubmit={handleSubmit}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden={false} className='search'/>
                        <input className="form-control me-2 input-field" type="search" placeholder="Search"
                               value={searchTerm}
                               aria-label="Search"
                               onChange={handleSearchInputChange}/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
