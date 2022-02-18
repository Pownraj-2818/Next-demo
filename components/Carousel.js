import {useState} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination,Navigation,Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

function Carousel() {

    const [currentSlide,setCurrentSlide] = useState()
  return (
    <>

    <h1>{currentSlide}/5</h1>
    <Swiper 
        scrollbar={{
            hide: true,
        }}
        slidesPerView={1}
        onInit={(swiper)=>setCurrentSlide(swiper.activeIndex)}
        onSlideChange={(swiper)=> setCurrentSlide(swiper.activeIndex)}
        loop={true}
        navigation={true}
        modules={[Pagination,Navigation,Scrollbar]}
        className="mySwiper">
        <SwiperSlide><div><img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" className="w-full h-auto" alt="1"/></div></SwiperSlide>
        <SwiperSlide><img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt="1"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt="1"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt="1"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt="1"/></SwiperSlide>
    </Swiper>
    </>
  )
}

export default Carousel