import {getItems} from "../../utils";
import {motion} from "framer-motion";
import {useEffect, useMemo, useState} from "react";
import {useRouter} from "next/router";
import Link from 'next/link'
import Head from 'next/head'
import styles from './id.module.css'
import {useScript} from "../../hooks/useScript";
import Creepy from "../../components/creepy";
import { FiChevronsLeft } from 'react-icons/fi'
import { FaBitcoin, FaInstagram } from 'react-icons/fa'
import Button from '../../components/button'
import DetailSlider from "../../detailSlider";
import {useSwipeable} from "react-swipeable";
import cn from 'classnames'

function Shopper () {
    const { query: { id } } = useRouter();
    const tote = getItems(id);
    const [showGallery, setShowGallery] = useState(false)
    const handlers = useSwipeable({
        onSwipedLeft: () => setShowGallery(true),
        onSwipedRight: () => setShowGallery(false)
    })

    return <div className={styles.root} {...handlers}>
        <div className={cn(styles.details, {[styles.detailsShow]: showGallery})}>
            {/*<div className={'blob'}><FiChevronsLeft></FiChevronsLeft></div>*/}
            <div className={styles.detailsMask}>
                <div className={styles.detailsMaskContent}></div>
            </div>
            <div className={styles.detailsContent}>
                <DetailSlider></DetailSlider>
                <article className={styles.article}>
                    {/*<p></p>️*/}
                    {/*<p>Это -</p>*/}
                    {/*<p><Creepy>👨🏻‍🎨</Creepy>Уникальный картина выполненный кистью</p>*/}
                    {/*<p><Creepy>🌶️</Creepy> <span>сочные</span>, специализированные износостойкие краски<Creepy>🎨</Creepy></p>*/}
                    {/*<p><Creepy>🔥</Creepy>Вместительный шоппер превосходного <span>качества</span></p>*/}
                    {/*<p><Creepy>🖤</Creepy>️Ии..и стильная упаковка из черного мата</p>*/}
                    <p><i><Creepy>👜</Creepy></i><Creepy>🕶</Creepy><span>Вся</span> уникальная и непохожая ни на одну другую.</p>
                    <p><i><Creepy>🎨</Creepy></i><i><Creepy>🌶️</Creepy></i><span>Вся</span> в сочных и бесстрашных перед стиркой красках.</p>
                    <p><i><Creepy>🔥</Creepy></i><i><Creepy>🕶</Creepy></i><span>Вся</span> образцово прошита ии..ии упакована в крутой черный мат.</p>
                    {/*<p><Creepy>🖤</Creepy>️Вся упаковка из стильного черного мата</p>*/}
                </article>
            </div>
        </div>
        <div className={styles.title}><Creepy><span>{tote.name}</span><span>{tote.name2}</span></Creepy></div>
        <div className={styles.glitchWrap}>
            <div className={styles.glitch}>
                {
                    [...Array(5).keys()].map(i => <div
                        key={i}
                        className={styles.glitch__item}
                        // layoutId={tote.id}
                        style={{backgroundImage: `url(${tote.srcDetail})`}}
                    />)
                }
            </div>
            <div>Галерея</div>
        </div>
        <div className={'wrapper'}>
            <article className={styles.article}>
                <p>Какой то тексттттю.....</p>
                <p>И еще Какой то тексттттю.....</p>
            </article>
            <div className={styles.buttons}>
                <Button href={'/'}>Заказать через instgrm <FaInstagram></FaInstagram></Button>
                <Button disabled href={'/'} descr={'в разработке'}>Купить онлайн crypto<FaBitcoin /></Button>
            </div>
        </div>
        {/*<div className={styles.blackMask}></div>*/}
    </div>
}

// export function getServerSideProps(context) {
//
//     return { props: { tote } }
// }

export default Shopper