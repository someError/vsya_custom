import styles from './styles.module.css';
import Image from 'next/image';
import {useEffect, useRef} from "react";
import Slider from '../components/slider';
import cn from 'classnames';
import Footer from "../components/footer";
import { FiInstagram, FiMail } from 'react-icons/fi'
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
    const [footer, setFooter] = useState(false);
    const handlers = useSwipeable({
        onSwipedUp: () => setFooter(true),
        onSwipedDown: () => setFooter(false)
    })
    const langs = [{value: 'en', label: 'en'}, {value: 'ru', label: 'ru'}]
    // const videoRef = useRef();
    //
    // useEffect(() => {
    //     setTimeout(()=>{
    //         videoRef.current.play();
    //     },3000)
    // }, []);

    return <div className={styles.root} {...handlers}>
        <video className={styles.video} playsInline autoPlay muted loop id="bgvid">
                <source src={'/assets/imgs/redlight.mp4'} type="video/mp4" />
        </video>
        <div className={styles.blackMask} />
        <div className={styles.select}>
            <Select
                initValue={langs.filter(({ value }) => router.locale === value)[0]}
                onChange={({ value }) => router.push(router.pathname,router.pathname,{locale: value})}
                options={langs}
            />
        </div>
        <div className={styles.wrapper}>
            <div className={styles.helloWrapper}><div className={cn(styles.hello, styles.ttl)}><div>В<b>С</b>Я</div><span>кастом <i></i></span></div></div>
            <Slider></Slider>
        </div>
        <Footer active={footer} setActive={setFooter}><div className={styles.wrapper}>
            <a href="https://www.instagram.com/vass_custom/?hl=ru" target={'_blank'} className={styles.footerRow}>
                <FiInstagram></FiInstagram>
                <div className={styles.footerRowInst}>
                    <div>vass_custom</div>
                    <div>instagram.com</div>
                </div>
            </a>
            <a href="mailto:redrows@gmail.com" target={'_blank'} className={styles.footerRow}>
                <FiMail></FiMail>
                <div className={styles.footerRowInst}>
                    <div>redrows@gmail.com</div>
                    <div>отправить письмо</div>
                </div>
            </a>
        </div></Footer>
    </div>
}

export default Promo