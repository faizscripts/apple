import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';

function Slideshow() {

    return(
        <>
        <Swiper className="swiper-container"
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
        >
                 <SwiperSlide className="single-testimonial"><img src="../images/product-view-page/iphone-main-img-11.png" alt="iphone 11" className='main-img'/></SwiperSlide>

                 <SwiperSlide className="single-testimonial"><img src="../images/product-view-page/iphone-main-11-backside2.png" alt="iphone 11" className='main-img'/></SwiperSlide>

                 <SwiperSlide className="single-testimonial"><img src="../images/product-view-page/iphone-main-11-64gb-cameraside.png" alt="iphone 11" className='main-img'/></SwiperSlide>

                 <SwiperSlide className="single-testimonial"><img src="../images/product-view-page/iphone-main-11-back&front.png" alt="iphone 11" className='main-img'/></SwiperSlide>

                 <SwiperSlide className="single-testimonial"><img src="../images/product-view-page/iphone-main-11-sideview.png" alt="iphone 11" className='main-img'/></SwiperSlide>
        </Swiper>

      </>
    )
}

export default Slideshow


