import LandingItem from "./elements/LandingItem";
import heroImage1 from "../public/images/landing/iphone14sm.jpg";
import heroImage2 from "../public/images/landing/iphone14.jpg";
import section2 from "../public/images/landing/heroSec2.jpg";
import section3 from "../public/images/landing/heroSec3.jpg";
import section4 from "../public/images/landing/heroSec4.jpg";
import section5 from "../public/images/landing/heroSec5.jpg";
import section6 from "../public/images/landing/heroSec6.jpg";
import section7 from "../public/images/landing/heroSec7.jpg";
import LandingSmallItem from "./elements/LandingSmallItem";

function Landing() {

    return(
            <div className='landing'>
                <LandingItem title='iPhone 14 Pro'
                             subhead ='Pro. Beyond.'
                             multiple={true}
                             image={[heroImage1.src,heroImage2.src]}
                             textColor='text-white'/>

                <LandingItem title='iPhone 14'
                             subhead ='Bigger and Bigger.'
                             image={section2.src}/>

                <LandingItem title='AirPods Pro'
                             subhead ='Rebuilt from the sound up.'
                             image={section3.src}
                             textColor='text-white'/>

                <div className="row">

                        <LandingSmallItem title='WATCH'
                                          subhead ='Adventure awaits.'
                                          image={section4.src}/>

                        <LandingSmallItem title='WATCH'
                                          subhead ='A healthy leap ahead.'
                                          image={section5.src}
                                          textColor='text-white'/>

                </div>

                <div className="row">

                    <LandingSmallItem title='Fitness+'
                                          subhead ='New Artist spotlight workouts with music by the weekend.'
                                          image={section6.src}
                                          textColor='text-white'/>

                    <LandingSmallItem title='WATCH'
                                          subhead ='A great deal to love.'
                                          image={section7.src}/>

                </div>

            </div>
    )
}

export default Landing
