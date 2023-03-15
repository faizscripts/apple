import useWindowDimensions from "../../hooks/useWindowDimensions";
import Image from "next/image";



function LandingItem({title, image, multiple,textColor,subhead,pTag}) {

    const [windowDimension] = useWindowDimensions()

    const renderFirstImg = () => {
        if (windowDimension){
            const {width} = windowDimension
            return width < 768 ? image[0] : image[1]
        }else return null
    }

    const renderImage = () => {
        if (multiple){
           return renderFirstImg()
        }else {
            return image
        }
    }

    return(
        <div>

            <div className="landing-section">

                <div className="backgroundImg"
                     style={{backgroundImage: `url('${renderImage()}')`}}>
                </div>

                <div className={`top-title ${textColor}`}>
                    <h2 className="headline">{title}</h2>
                    <h3 className="subhead" role="presentation">{subhead}</h3>
                    <p className="text-muted subParagraph" aria-label={pTag} role="text">{pTag}</p>
                    <div className="cta-links">
                        <a href="https://www.apple.com/iphone-14-pro/" aria-label="Learn more about iphone 14 pro" className="links-to-buy">Buy <Image
                            src="/images/landing/right-arrow-blue.svg" alt="" width="12px" height="12px"/></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingItem