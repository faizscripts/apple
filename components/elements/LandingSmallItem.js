import Image from "next/image";



function LandingSmallItem({title,subhead,image,textColor,subSubhead}) {


    return (

            <div className="col-lg-6">
                <div className="landing-section small">
                    <div className="backgroundImg"
                         style={{backgroundImage: `url('${image}')`}}>
                    </div>

                    <div className={`top-title ${textColor}`}>
                        <h4 className="headline">{title}</h4>
                        <h5 className="sub-subhead" role="presentation">{subSubhead}</h5>
                        <h5 className="subhead" role="presentation">{subhead}</h5>
                        <div className="cta-links">
                            <a href="https://www.apple.com/iphone-14-pro/" aria-label="Learn more about iphone 14 pro" className="links-to-buy">Buy <Image
                                src="/images/landing/right-arrow-blue.svg" alt="" width="12px" height="12px"/></a>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default LandingSmallItem