import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import { setCategoriesList} from "../redux/features/categories";

function UserLayout({ children }) {

    const dispatch = useDispatch()

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const res = await axios.get('/api/admin/categories/get');
            dispatch(setCategoriesList(res.data));
        } catch (error) {
            throw error;
        }
    }

    return (
        <>
            <Navbar/>
            {children}
            <Footer />
        </>
    )
}

export default UserLayout;
