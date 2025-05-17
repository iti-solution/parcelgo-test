'use client'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'  
import styles from './integrations.module.scss'

import dpdLogo from '@/assets/images/dpd-logo.png'
import dhlLogo from '@/assets/images/dhl-logo.png'
import inpostLogo from '@/assets/images/inpost-logo.png'
import glsLogo from '@/assets/images/gls-logo.png'
// import pocztaPolskaLogo from '@/assets/images/poczta-polska-logo.png'
import fedexLogo from '@/assets/images/fedex-logo.png'
import mondialReyalLogo from '@/assets/images/mondial-relay-logo.png'
import pocztexLogo from '@/assets/images/pocztex-logo.png'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules' 

const logos = [dpdLogo, dhlLogo, glsLogo, fedexLogo, mondialReyalLogo, pocztexLogo, inpostLogo]

const IntegrationsSwiper = () => {
    return (
        <Swiper
            slidesPerView={6}
            breakpoints={{
                320: { slidesPerView: 2 },
                480: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            modules={[Autoplay]}
            className={styles.swiper}
        >
            {logos.map((logo, index) => (
                <SwiperSlide key={'slide-' + index} className={styles.swiperSlide}>
                    <Image src={logo} alt={`Logo ${index}`} fill />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default IntegrationsSwiper
