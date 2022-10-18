import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';

function Slideshow({slidesPerView}) {


    return(
        <>
            <Swiper className="product-slideshow-container"
                    modules={[Navigation, A11y]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    breakpoints={{
                       0:{
                           slidesPerView:1,
                           spaceBetween:10,
                       },
                        480:{
                            slidesPerView:2,
                            spaceBetween:10,
                        },
                        768:{
                            slidesPerView:3,
                            spaceBetween:15,
                        },
                        1024:{
                            slidesPerView:4,
                            spaceBetween:15,
                        },
                        1200:{
                            slidesPerView:4,
                            spaceBetween:10,
                        },

                    }}
            >
                <SwiperSlide className='d-flex mt-4 ms-5 cards'>
                    <div>
                        <h5>64GB</h5>
                        <h5>128GB</h5>
                    </div>
                    <div className='products-container'>
                        <img src="./images/products/iphone/iphone-13-256gb.png" alt="" className='product-image'/>
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='div-colors red me-2'></div>
                            <div className='div-colors yellow me-2'></div>
                            <div className='div-colors blue me-2'></div>
                            <div className='div-colors green me-2'></div>
                            <div className='div-colors purple me-2'></div>
                        </div>
                        <div className='d-flex justify-content-center products-description project-description'>
                            <div><h3 className='product-header mt-2'>iPhone 13</h3></div>
                            <div><span className='product-name mt-2'>iPhone</span></div>
                            <div><p className='price mt-2'>Ksh 118,000</p></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-flex mt-4 cards'>
                    <div>
                        <h5>128GB</h5>
                        <h5>256GB</h5>
                        <h5>512GB</h5>
                        <h5>1TB</h5>
                    </div>
                    <div className='products-container'>
                        <img src="../images/products/iphone/iphone-13-pro-max1.png" alt="" className='product-image'/>
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='div-colors red me-2'></div>
                            <div className='div-colors yellow me-2'></div>
                            <div className='div-colors blue me-2'></div>
                            <div className='div-colors green me-2'></div>
                            <div className='div-colors purple me-2'></div>
                        </div>
                        <div className='d-flex justify-content-center products-description project-description'>
                            <div><h3 className='product-header mt-2'>iPhone 13 Pro Max</h3></div>
                            <div><span className='product-name mt-2'>iPhone</span></div>
                            <div><p className='price mt-2'>KSh153,000 – KSh210,000</p></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-flex mt-4 cards'>
                    <div>
                        <h5>128GB</h5>
                        <h5>256GB</h5>
                        <h5>512GB</h5>
                        <h5>1TB</h5>
                    </div>
                    <div className='products-container'>
                        <img src="./images/products/iphone/iphone-13-pro-alpine-green.png" alt="" className='product-image'/>
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='div-colors red me-2'></div>
                            <div className='div-colors yellow me-2'></div>
                            <div className='div-colors blue me-2'></div>
                            <div className='div-colors green me-2'></div>
                            <div className='div-colors purple me-2'></div>
                        </div>
                        <div className='d-flex justify-content-center products-description project-description'>
                            <div><h3 className='product-header mt-2'>iPhone 13 Pro</h3></div>
                            <div><span className='product-name mt-2'>iPhone</span></div>
                            <div><p className='price mt-2'>KSh140,500 – KSh151,000</p></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-flex mt-4 cards'>
                    <div>
                        <h5>128GB</h5>
                        <h5>256GB</h5>
                        <h5>512GB</h5>
                    </div>
                    <div className='products-container'>
                        <img src="./images/products/iphone/iphone-13-mini1.png" alt="" className='product-image'/>
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='div-colors red me-2'></div>
                            <div className='div-colors yellow me-2'></div>
                            <div className='div-colors blue me-2'></div>
                            <div className='div-colors green me-2'></div>
                            <div className='div-colors purple me-2'></div>
                        </div>
                        <div className='d-flex justify-content-center products-description project-description'>
                            <div><h3 className='product-header mt-2'>iPhone 13 Mini</h3></div>
                            <div><span className='product-name mt-2'>iPhone</span></div>
                            <div><p className='price mt-2'>KSh102,000 – KSh110,000</p></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-flex mt-4 cards'>
                    <div>
                        <h5>64GB</h5>
                        <h5>128GB</h5>
                    </div>
                    <div className='products-container'>
                        <img src="./images/products/iphone/iphone-13-dual.jpg.png" alt="" className='product-image'/>
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='div-colors red me-2'></div>
                            <div className='div-colors yellow me-2'></div>
                            <div className='div-colors blue me-2'></div>
                            <div className='div-colors green me-2'></div>
                            <div className='div-colors purple me-2'></div>
                        </div>
                        <div className='d-flex justify-content-center products-description project-description'>
                            <div><h3 className='product-header mt-2'>iPhone 13 Dual</h3></div>
                            <div><span className='product-name mt-2'>iPhone</span></div>
                            <div><p className='price mt-2'>KSh108,000</p></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-flex mt-4 cards'>
                    <div>
                        <h5>64GB</h5>
                        <h5>128GB</h5>
                    </div>
                    <div className='products-container'>
                        <img src="./images/products/iphone/iphone-12-black-64gb.png" alt="" className='product-image'/>
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='div-colors red me-2'></div>
                            <div className='div-colors yellow me-2'></div>
                            <div className='div-colors blue me-2'></div>
                            <div className='div-colors green me-2'></div>
                            <div className='div-colors purple me-2'></div>
                        </div>
                        <div className='d-flex justify-content-center products-description project-description'>
                            <div><h3 className='product-header mt-2'>iPhone 12</h3></div>
                            <div><span className='product-name mt-2'>iPhone</span></div>
                            <div><p className='price mt-2'>KSh94,000 – KSh98,000</p></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slideshow