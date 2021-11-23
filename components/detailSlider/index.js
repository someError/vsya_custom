import Slider from "react-slick";
import Head from 'next/head'
import {useEffect, useRef} from "react";
import styles from './styles.module.css'
import {useSwipeable} from "react-swipeable";

export default function DetailSlider(props) {
    const sliderRef = useRef(null);
    const { srcArray } = props
    const settings = {
        // dots: true,
        arrows: false,

        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
    };

    const handlers = useSwipeable({
        onSwipedDown: () => sliderRef.current && sliderRef.current.slickPrev(),
        onSwipedUp: () => sliderRef.current && sliderRef.current.slickNext()
    })

    if (!srcArray) return <></>

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
        <div className={styles.wrapper}>
            <div className={styles.sliderMask} {...handlers}>
                <div className={styles.sliderMaskTop} onClick={() => sliderRef.current && sliderRef.current.slickPrev()}><div className={'blob'} /></div>
                <div className={styles.sliderMaskBot} onClick={() => sliderRef.current && sliderRef.current.slickNext()}><div className={'blob'} /></div>
            </div>
            <Slider ref={sliderRef} className={styles.slider} {...settings}>
                {
                    srcArray.map(src => (
                        <div>
                            <img src={src} alt=""/>
                        </div>
                    ))
                }
                {
                    srcArray.map(src => (
                        <div>
                            <img src={src} alt=""/>
                        </div>
                    ))
                }
                {/*{*/}
                {/*    srcArray.map(src => (*/}
                {/*        <div>*/}
                {/*            <img src={src} alt=""/>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*}*/}
            </Slider>
        </div>
    </div>

}