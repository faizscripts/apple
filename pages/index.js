import LandingItem from "../components/elements/LandingItem";
import heroImage2 from "../public/images/landing/iphone14.jpg";
import section2 from "../public/images/landing/heroSec2.jpg";
import section3 from "../public/images/landing/heroSec3.jpg";
import LandingSmallItem from "../components/elements/LandingSmallItem";
import section4 from "../public/images/landing/heroSec4.jpg";
import section5 from "../public/images/landing/heroSec5.jpg";
import section6 from "../public/images/landing/heroSec6.jpg";
import section7 from "../public/images/landing/heroSec7.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import connectDB from "../utils/db";
import {setCategoriesList} from "../redux/features/categories";
import {Category} from "../models/admin/categories";
import axios from "axios";
import {useDispatch} from "react-redux";


function HomePage() {

    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await axios.get('api/admin/categories/get')
    //             dispatch(setCategoriesList(res.data));
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //
    //     fetchData()
    // }, []);



    return (
        <>

            <Navbar/>
            <div className='landing'>
                <LandingItem title='iPhone 14 Pro'
                             subhead='Pro. Beyond.'
                             image={heroImage2.src}
                             textColor='text-white'/>

                <LandingItem title='iPhone 14'
                             subhead='Bigger and Bigger.'
                             image={section2.src}/>

                <LandingItem title='AirPods Pro'
                             subhead='Rebuilt from the sound up.'
                             image={section3.src}
                             textColor='text-white'/>

                <div className="row">

                    <LandingSmallItem title='WATCH'
                                      subhead='Adventure awaits.'
                                      image={section4.src}
                    />

                    <LandingSmallItem title='WATCH'
                                      subhead='A healthy leap ahead.'
                                      image={section5.src}
                                      textColor='text-white'/>

                </div>

                <div className="row">

                    <LandingSmallItem title='Fitness+'
                                      subhead='New Artist spotlight workouts with music by the weekend.'
                                      image={section6.src}
                                      textColor='text-white'/>

                    <LandingSmallItem title='WATCH'
                                      subhead='A great deal to love.'
                                      image={section7.src}/>

                </div>

            </div>
            <Footer/>

        </>

    )
}

export default HomePage


// export async function getServerSideProps() {
//     await connectDB()
//     const data = await Category.find();
//     const categories = JSON.parse(JSON.stringify(data))
//     return {
//         props: { categories }
//     }
// }

