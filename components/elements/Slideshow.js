import Image from 'next/image';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function Slideshow({ productImages }) {

    const renderSwiperSlides = () => {
        return productImages.map(
            (productImage) => {
                return(
                    <SwiperSlide key={productImage._id} className="single-testimonial">
                        <Image
                            src={`/images/products/${productImage.filename}`}
                            alt="iphone 11"
                            height="490"
                            width="490"/>
                    </SwiperSlide>
                )
            }
        )
    }

    return(
        <Swiper className="swiper-container"
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation>
            {renderSwiperSlides()}
        </Swiper>
    )
}

export default Slideshow


