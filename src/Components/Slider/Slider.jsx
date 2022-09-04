import React from 'react';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Slider = ({ slide, title }) => {
    return (
        <section className={styles.sliderContainer}>
            <h1 className={styles.title}>{title}</h1>
            <Swiper
                slidesPerView={5}
                slidesPerGroup={4}
                spaceBetween={30}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={styles.swiper}
            >
                {slide.map(media => {
                    return (
                        <SwiperSlide className={styles.mediaBox} key={media}>
                            <img src={media} className={styles.media} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}
