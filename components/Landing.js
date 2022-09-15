import useWindowDimensions from "../hooks/useWindowDimensions";
import Image from "next/image";



function Landing() {

    const [windowDimension] = useWindowDimensions()

    const renderFirstImg = () => {

        if (windowDimension){
            const {width} = windowDimension
            if (width < 768){
                return <div id="hero-image-1"></div>
            }else{
                return <div id='hero-image-2'></div>
            }
        }else return null
    }

    return(
            <div className="container-fluid section-1">

                    {renderFirstImg()}

                <div className="top-title">
                    <h1 className="headline">iPhone 14 Pro</h1>
                    <h2 className="subhead" role="presentation">Pro. Beyond.</h2>
                    <p className="text-muted" aria-label="Available starting September 16" role="text">Available starting 9.16 </p>
                    <div className="cta-links">
                        <a href="https://www.apple.com/iphone-14-pro/" aria-label="Learn more about iphone 14 pro">learn more <Image
                            src="/images/right-arrow-blue.svg" alt="" width="12px" height="12px" /></a>
                        <a href="https://www.apple.com/iphone-14-pro/" aria-label="Learn more about iphone 14 pro">Pre-order <Image
                            src="/images/right-arrow-blue.svg" alt="" width="12px" height="12px"/></a>
                    </div>
                </div>
            </div>

    )
}

export default Landing