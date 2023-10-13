import { useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import axios from "axios";

function AdminLayout ({ children }) {

    const sidebarPanel = useRef()
    const router = useRouter()
    const sidebarToggle = (event) => {
        event.preventDefault()
        sidebarPanel.current.classList.toggle('toggled');
    }

    const sidebarItemClick = async (url) => {
        sidebarPanel.current.classList.toggle('toggled');
        await router.push(url)
    }

    const logout = async () => {
        await axios.get("/api/admin/logout")
        await router.push("/admin/login")
    }

    const pageTitle = getPageTitle(router.pathname);

    function getPageTitle(route) {
        const adminRoute = route.replace(/^\/admin\//, "");
        return adminRoute;
    }

    return (
        <>
            <section id="admin" ref={ sidebarPanel }>
                <div className="sidebar border border-end ">
                    <div className="text-center mt-2 sidebarItem">
                        <img src="/images/logo.webp" alt="Logo" className="img-fluid"/>
                    </div>
                    <h4>ADMIN</h4>
                    <div className="sidebarItem ">
                        <ul className="list-group list-group-flush">
                            <li onClick={() => sidebarItemClick('/admin/admins/')} className="list-group-item list-group-item-action">
                                Admins
                            </li>
                            <li onClick={() => sidebarItemClick('/admin/categories/')} className="list-group-item list-group-item-action">
                                    Categories
                                </li>
                            <li onClick={() => sidebarItemClick('/admin/customers/')} className="list-group-item list-group-item-action">
                                    Customers
                                </li>
                            <li onClick={() => sidebarItemClick('/admin/dashboard/')} className="list-group-item list-group-item-action">
                                    Dashboard
                                </li>
                            <li onClick={() => sidebarItemClick('/admin/orders/')} className="list-group-item list-group-item-action">
                                    Orders
                                </li>
                            <li onClick={() => sidebarItemClick('/admin/products/')} className="list-group-item list-group-item-action">
                                    Products
                                </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between" data-bs-toggle="collapse"
                                data-bs-target="#reportsMenu">
                                Reports
                                <FontAwesomeIcon icon={faCaretDown} className="ms-1"></FontAwesomeIcon>
                            </li>
                            <div className="collapse collapseMenu" id="reportsMenu">
                                <div className="card card-body">
                                    <ul className="mt-0 px-0">
                                        <li onClick={() => sidebarItemClick('/admin/reports/')} className="list-group-item list-group-item-action">
                                                Internal Analytics
                                            </li>
                                        <a href="#" target="_blank" className="reportsLinks">
                                            <li className="list-group-item list-group-item-action">Google Analytics</li>
                                        </a>
                                        <a href="#" className="reportsLinks" target="_blank">
                                            <li className="list-group-item list-group-item-action">Ad Manager</li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between" data-bs-toggle="collapse" data-bs-target="#socialsMenu">
                                Socials
                                <FontAwesomeIcon icon={faCaretDown} className="ms-1"></FontAwesomeIcon>
                            </li>
                            <div className="collapse collapseMenu" id="socialsMenu">
                                <div className="card card-body">
                                    <ul className="mt-0 px-0">
                                        <a href="#" target="_blank" className="reportsLinks">
                                            <li className="list-group-item list-group-item-action">Facebook</li>
                                        </a>
                                        <a href="#" target="_blank" className="reportsLinks">
                                            <li className="list-group-item list-group-item-action">Instagram</li>
                                        </a>
                                        <a href="#" target="_blank" className="reportsLinks">
                                            <li className="list-group-item list-group-item-action">Twitter</li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="mainPanel">

                    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                        <div className="container-fluid">
                            <button onClick={sidebarToggle} className="btn btn-primary rounded-circle" id="sidebarToggle">
                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                            </button>
                            <div className="navbar-brand">{pageTitle}</div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link href="/admin/products/new">
                                            <button className="btn btn-primary addBtn main-add-button">Add Product</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-secondary addBtn main-add-button" onClick={logout}>Log Out</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {children}

                </div>
            </section>

            <section id="footer" className="container-fluid px-0">
                <div className="footer2 text-center p-2">
                    &copy; Apple Express <span id="copyright"> {new Date().getFullYear()}</span>. All Rights Reserved.
                </div>
            </section>
        </>
    )
}

export default AdminLayout;
