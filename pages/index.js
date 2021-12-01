import styles from './styles.module.css';
import Image from 'next/image';
import {useEffect, useRef} from "react";
import Slider from '../components/slider';
import cn from 'classnames';
import Footer from "../components/footer";
import Link from 'next/link'
import {useRouter} from "next/router";
import Select from '../components/select'

import src2 from '/public/assets/imgs/shopper-black.jpeg'
import {useState} from "react";
import {useSwipeable} from "react-swipeable";
// import src2 from '/public/assets/imgs/shoper-removebg-preview.png'
function Promo ({ data }) {
    const router = useRouter()
    console.log(router)
    // const videoRef = useRef();
    //
    // useEffect(() => {
    //     setTimeout(()=>{
    //         videoRef.current.play();
    //     },3000)
    // }, []);

    const videoSrcs = ['/assets/imgs/blueloop2.mp4', '/assets/imgs/blueloop2.mp4', '/assets/imgs/redlight480.mp4', '/assets/imgs/blueloop2.mp4', ]
    const randVideoIndex = Math.floor(Math.random() * 3) + 1
    console.log(randVideoIndex, 'index')

    return <div className={styles.root}>
        <video className={cn(styles.video, styles[`video${randVideoIndex}`])} playsInline autoPlay muted loop id="bgvid">
                <source src={videoSrcs[randVideoIndex]} type="video/mp4" />
        </video>
        <div className={styles.blackMask} />
        <div className={'wrapper'}>
            <Slider />
        </div>
    </div>
}

export default Promo