import {useEffect, useState} from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import Image from "next/image";
import teezySrc from "/public/assets/imgs/teezy-min.png";
import sadakoSrc from "/public/assets/imgs/sadako.png";
import longNec from "/public/assets/imgs/long-nec.png";
import {useSwipeable} from "react-swipeable";
import ReactImageMagnify from 'react-image-magnify'
import Btn from '../../components/button'
import i18n from "../../i18n";
import {useRouter} from "next/router";
import { GiPowderBag } from 'react-icons/gi'
import Creepy from "../creepy";


function Slider() {
    const router = useRouter();
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (cur === 3) {
                _setCur(0);
                return;
            }
            _setCur(cur + 1)
        },
        onSwipedRight: () => {
            if (cur === 0) {
                _setCur(3);
                return;
            }
            _setCur(cur - 1)
        }
    });
    const items = [{src: sadakoSrc, name: 'Sad', name2: 'ako'},
        {src: longNec, name: 'Fre', name2: 'ddy'},
        {src: teezySrc, name: 'teezy', name2: 'Knocker'},
        {src: longNec, name: 'Peni', name2: 'wise'}];
    const [titleActive, setTitleActive] = useState(true);
    const [cur, setCur] = useState(0);
    const [leftDir, setDir] = useState(false);
    const [isImgsLoading, setIsImgsLoading] = useState(false);
    let loadingImgsCnt = 0;

    function _setCur(cur) {
        setTitleActive(false);
        setCur(cur);
        setTimeout(() => setTitleActive(true), 200)
    }

    // if (loadedCnt < items.length) {
    //     return <div>Loading...</div>
    // }

    const _src = '/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimgs%2Fimg1.1ffe19bb61262a8b151a9cbf7aed4011.png&w=1920&q=75';
    // return <div>
    //     <div data-text={`${items[0].name}${items[0].name2}`} className={cn(styles.title, styles[`title-0`], styles.titleActive, styles.ttl)}>
    //         <div><span>{items[0].name}</span><span>{items[0].name2}</span></div>
    //     </div>
    //     <div>
    //         <Image src={src2}>
    //
    //         </Image>
    //     </div>
    //
    // </div>

    return <div className={cn(styles.root, [styles[`root${cur}`]])}>
        <div className={cn(styles.picassoWrap, styles[`picassoWrap${cur}`])}>
            <div className={styles.picassoTitle}>
                <div><GiPowderBag /></div>
                <div className={styles.picassoCnt}><span>173</span> / 177</div>
            </div>
            <div className={styles.picasso}>
                <div>
                    <div className={styles.picassoLine}></div>
                </div>
            </div>
        </div>
        {!isImgsLoading && <div className={styles.sliderPreloadWrapper}>
            <div className={styles.sliderPreloader}/>
        </div>}
        <div className={cn(styles.title, styles[`title-${cur}`], {[styles.titleActive]: titleActive})}>
            <Creepy><span>{items[cur].name}</span><span>{items[cur].name2}</span></Creepy>
        </div>
        <div className={cn(styles.slider)} {...handlers}>
            <div
                className={cn(styles.sliderInner, styles[`slider-${cur}`], leftDir ? styles.left : styles.right)}>{items.map((item, i) =>
                <div onClick={e => {
                    if (i === cur) {
                        return;
                    }
                    if (i < cur) {
                        setDir(true)
                    } else {
                        setDir(false)
                    }

                    if ((cur === 3 && i === 0)) {
                        setDir(false)
                    }
                    if ((i === 3 && cur === 0)) {
                        setDir(true)
                    }
                    _setCur(i)
                }} className={cn(styles.img, {[styles.imgActive]: i === cur})}>
                    <Image onLoadingComplete={e => {
                        if (!isImgsLoading) {
                            loadingImgsCnt++;
                            if (loadingImgsCnt === 4) {
                                setIsImgsLoading(true);
                            }
                        }
                    }}
                           src={item.src} alt=""
                    />
                    <Btn className={styles.btn}><span>{i18n[router.locale].buyBtn}</span></Btn>
                </div>)}
            </div>
        </div>
    </div>
}

let xDown = null;
let yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* right swipe */
        } else {
            /* left swipe */
        }
    } else {
        if (yDiff > 0) {
            /* down swipe */
        } else {
            /* up swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

export default Slider