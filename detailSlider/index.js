import Slider from "react-slick";
import Head from 'next/head'
import {useRef} from "react";
import styles from './styles.module.css'
import {useSwipeable} from "react-swipeable";

export default function DetailSlider() {
    const sliderRef = useRef(null);
    var settings = {
        // dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        beforeChange: (e, t) => console.log(e, t)

    };
    return <div className={styles.root}>
        <Head>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
        </Head>
        <div ref={sliderRef}>
            <Slider className={styles.slider} {...settings}>
                <div>
                    <img src="/assets/imgs/whoops1.jpeg" alt=""/>
                </div>
                <div>
                    <img src="/assets/imgs/whoops2.jpeg" alt=""/>
                </div>
                <div>
                    <img src="/assets/imgs/whoops1.jpeg" alt=""/>
                </div>
                <div>
                    <img src="/assets/imgs/whoops2.jpeg" alt=""/>
                </div>
                <div>
                    <img src="/assets/imgs/whoops1.jpeg" alt=""/>
                </div>
                <div>
                    <img src="/assets/imgs/whoops2.jpeg" alt=""/>
                </div>
                <div>
                    <img src="/assets/imgs/whoops1.jpeg" alt=""/>
                </div>
                <div>
                    <img src="/assets/imgs/whoops2.jpeg" alt=""/>
                </div>
                <div>
                    <img src="/assets/imgs/whoops1.jpeg" alt=""/>
                </div>
                <div>
                    <img src="/assets/imgs/whoops2.jpeg" alt=""/>
                </div>
            </Slider>
        </div>

    </div>
}