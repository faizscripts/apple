import Image from "next/image";



function LandingSmallItem({title,subhead,image,textColor}) {



    return (

            <div className="col-md-6">
                <div className="landing-section-small">
                    <div className="backgroundImg"
                         style={{backgroundImage: `url('${image}')`}}>
                    </div>

                    <div className={`top-title ${textColor}`}>
                        <h4 className="headline"> <Image src="/images/favicon/favicon-sm.png" alt="" width="30px" height="30px"/> {title}</h4>
                        <h5 className="subhead" role="presentation">{subhead}</h5>
                        <div className="cta-links">
                            <a href="https://www.apple.com/iphone-14-pro/" aria-label="Learn more about iphone 14 pro">learn more <Image
                                src="/images/landing/right-arrow-blue.svg" alt="" width="12px" height="12px" /></a>
                            <a href="https://www.apple.com/iphone-14-pro/" aria-label="Learn more about iphone 14 pro">Pre-order <Image
                                src="/images/landing/right-arrow-blue.svg" alt="" width="12px" height="12px"/></a>
                        </div>
                    </div>
                </div>
            </div>


    )
}

export default LandingSmallItem