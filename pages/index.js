import LandingItem from "../components/elements/LandingItem";
import heroImage2 from "../public/images/landing/hero_iphone15pro.jpg";
import section2 from "../public/images/landing/iphone-15-background-2.jpg";
import section3 from "../public/images/landing/heroSec3.jpg";
import LandingSmallItem from "../components/elements/LandingSmallItem";
import section4 from "../public/images/landing/watch-series-ultra.jpg";
import section5 from "../public/images/landing/watch-series-9-background.jpg";
import section6 from "../public/images/landing/heroSec6.jpg";
import section7 from "../public/images/landing/heroSec7.jpg";
import userLayout from "../layout/UserLayout";

function HomePage() {

    return (
            <>
                <div className='landing'>
                        <LandingItem title='iPhone 15 Pro'
                                     subhead='Titanium. So strong. So light. So pro.'
                                     image={heroImage2.src}
                                     textColor='text-white'/>

                        <LandingItem title='iPhone 15'
                                     subhead='New Camera. New Design, Newphoria.'
                                     image={section2.src}/>

                        <LandingItem title='AirPods Pro'
                                     subhead='Rebuilt from the sound up.'
                                     image={section3.src}
                                     textColor='text-white'/>

                        <div className="row">

                            <LandingSmallItem title='WATCH'
                                              subSubhead='Ultra 2'
                                              subhead='Next level adventure.'
                                              image={section4.src}/>

                            <LandingSmallItem title='WATCH'
                                              subSubhead='Series 9'
                                              subhead='Smarter. Brighter. Mightier.'
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
            </>
    )
}

HomePage.pageLayout=userLayout
export default HomePage


