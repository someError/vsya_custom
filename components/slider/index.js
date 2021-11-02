import {useEffect, useState} from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import Image from "next/image";
import {useSwipeable} from "react-swipeable";
import Btn from '../../components/button'
import i18n from "../../i18n";
import {useRouter} from "next/router";
import {GiPaintBrush, GiMagicPortal, GiCrocJaws, GiDeathJuice, GiDiamondsSmile, GiSly,GiTie, GiTv, GiGhost, GiHalfDead} from 'react-icons/gi'
import Creepy from "../creepy";
import {getItems} from "../../utils";
import {motion} from "framer-motion";
import LoadingScreen from "../loadingScreen";


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
    const items = getItems();

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

    useEffect(() => {
        setTimeout(() => setIsImgsLoading(true), 1000)
    }, [])

    return <div className={cn(styles.root, [styles[`root${cur}`]])}>
        { !isImgsLoading && <LoadingScreen /> }

        <div className={cn(styles.content, {[styles.contentActive]: isImgsLoading})}>
            <div className={cn(styles.picassoWrap, styles[`picassoWrap${cur}`])}>
                <div className={styles.picassoTitle}>
                    <div><GiPaintBrush/></div>
                    <span className={styles.picassoDescr}>{i18n[router.locale].picasso}</span>
                    <div className={styles.picassoCnt}><span>173</span> / 177</div>
                </div>
                <div className={styles.picasso}>
                    <div>
                        <div className={styles.picassoLine}></div>
                    </div>
                </div>
            </div>
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
                        {/*<Image onLoadingComplete={e => {*/}
                        {/*   */}
                        {/*}}*/}
                        {/*       src={item.src} alt=""*/}
                        {/*/>*/}
                        <motion.img
                            // onLoad={e => {
                            //     if (!isImgsLoading) {
                            //         loadingImgsCnt++;
                            //         if (loadingImgsCnt === 4) {
                            //             setIsImgsLoading(true);
                            //         }
                            //     }
                            // }}
                            layoutId={item.id}
                            src={item.src}
                            animate={{ scale: 1 }}
                        />
                        <Btn className={styles.btn} href={'/totes/' + item.id}><span>{i18n[router.locale].buyBtn}</span></Btn>
                    </div>)}
                </div>
            </div>
        </div>

    </div>
}

export default Slider