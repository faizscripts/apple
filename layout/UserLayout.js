import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UserLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default UserLayout;
