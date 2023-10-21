import Image from "next/image";

function LandingItem({title, image,textColor,subhead,pTag}) {

    return(
        <div className="landing-section">
                <div className="backgroundImg"
                     style={{backgroundImage: `url('${image}')`}}>
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
    )
}

export default LandingItem
