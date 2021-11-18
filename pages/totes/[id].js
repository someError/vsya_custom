import {getItems} from "../../utils";
import {motion} from "framer-motion";
import {useEffect, useMemo, useState, useContext} from "react";
import {useRouter} from "next/router";
import Link from 'next/link'
import Head from 'next/head'
import styles from './id.module.css'
import {useScript} from "../../hooks/useScript";
import Creepy from "../../components/creepy";
import { GiGalaxy } from 'react-icons/gi'
import { FaBitcoin, FaInstagram } from 'react-icons/fa'
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi'
import { MdOutlinePhoto } from 'react-icons/md'
import { GrFormClose } from 'react-icons/Gr'
import Button from '../../components/button'
import DetailSlider from "../../detailSlider";
import {useSwipeable} from "react-swipeable";
import cn from 'classnames'
import Context from "../../appContext";
import i18n from "../../i18n";

function Shopper () {
    const appState = useContext(Context);
    // useEffect(() => {
    //     appState.setFooterAppHandlerEnabled(false);
    //     return () => appState.setFooterAppHandlerEnabled(true);
    // }, []);

    const router = useRouter();
    const { query: { id } } = router;
    const tt = i18n[router.locale]
    const tote = getItems(id);
    const [showGallery, setShowGallery] = useState(false)
    const handlers = useSwipeable({
        onSwipedLeft: _showGallery,
        onSwipedRight: _hideGallery
    });

    const contentHandlers = useSwipeable({
        onSwipedUp: () => appState.setFooterContext(true),
        onSwipedDown: () => appState.setFooterContext(false)
    });

    function _showGallery () {
        appState.setFooterAppHandlerEnabled(false)
        setShowGallery(true)
    }

    function _hideGallery () {
        appState.setFooterAppHandlerEnabled(true)
        setShowGallery(false)
    }

    function _toggleGallery () {
        showGallery ? _hideGallery() : _showGallery()
    }



    // const

    return <div className={styles.root} {...handlers}>
        <div className={cn(styles.details, {[styles.detailsShow]: showGallery})}>
            {/*<div className={'blob'}><FiChevronsLeft></FiChevronsLeft></div>*/}
            <div className={styles.detailsMask}>
                <div className={styles.detailsMaskContent}></div>
            </div>
            <div className={styles.detailsContent}>
                <DetailSlider srcArray={tote.gallery}></DetailSlider>
                {/*<VerticalSlider></VerticalSlider>*/}
                <article className={cn(styles.article)} {...contentHandlers}>
                    {/*<p></p>️*/}
                    {/*<p>Это -</p>*/}
                    {/*<p><i><Creepy>👜</Creepy></i><Creepy>🕶</Creepy><span>Вся</span> уникальная и непохожая ни на одну другую.</p>*/}
                    {/*<p><i><Creepy>🎨</Creepy></i><i><Creepy>🌶️</Creepy></i><span>Вся</span> в сочных и бесстрашных перед стиркой красках.</p>*/}
                    {/*<p><i><Creepy>🔥</Creepy></i><i><Creepy>🕶</Creepy></i><span>Вся</span> образцово прошита ии..ии упакована в крутой черный мат.</p>*/}
                    <p><span>{tt.detailFirst[0]}</span> {tt.detailFirst[1]} <i><Creepy>🎨</Creepy><Creepy>🌶️</Creepy></i>, {tt.detailFirst[2]}.</p>
                    <p><span>{tt.detailSecond[0]}</span> {tt.detailSecond[1]} <i><Creepy>🌒</Creepy></i> </p>
                    {/*<p><span>Вся</span> в сочных, сверхъярких красках.</p>*/}
                    {/*<p>Эта картина  парам пам пам пам тара рам</p>*/}
                    {/*<p>Стильная упаковка из крутого чернорго мата</p>*/}
                    {/*<p><Creepy>🖤</Creepy>️Вся упаковка из стильного черного мата</p>*/}
                </article>
            </div>
        </div>
        <div className={styles.title}><Creepy><span>{tote.name}</span><span>{tote.name2}</span></Creepy></div>
        <div className={styles.glitchWrap}>
            <Creepy className={styles.blobWrap} onClick={() => showGallery ? _hideGallery() : router.push('/')}><div className={cn('blob', styles.blob)}><BiChevronsLeft></BiChevronsLeft></div></Creepy>
            <Creepy className={styles.blobWrapRight} onClick={() => _toggleGallery()}>
                <div className={cn('blob', styles.blob)}>
                    { showGallery ? <GrFormClose /> : <MdOutlinePhoto /> }
                </div>
            </Creepy>
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
            <article className={cn(styles.article, styles.chat)}>
                {/*<p>Black Phillip, Black Phillip <br/>*/}
                {/*    A crown grows out his head, <br/>*/}
                {/*    Black Phillip, Black Phillip <br/>*/}
                {/*    To nanny queen is wed.</p>*/}
                <p>
                    but the morning light <br/> shows who I really am,<br/> yet I want to say this <br/> - I love you.
                </p>
                {/*<p><b><img src="/assets/imgs/portal.png" alt=""/></b><span>Доставка в любую точку мира 🛸</span> <i /></p>*/}
                {/*<p><b><img src="/assets/imgs/constellation.png" alt=""/></b><span>Укажи свое созвездие</span></p>*/}
            </article>
            {/*<article className={cn(styles.article, styles.chat)}>*/}
            {/*    /!*<p><b><img src="/assets/imgs/portal.png" alt=""/></b><span>Доставка в любую точку мира 🛸</span> <i /></p>*!/*/}
            {/*    <p><b><img src="/assets/imgs/constellation.png" alt=""/></b><span>Укажи свое созвездие</span></p>*/}
            {/*</article>*/}
            <div className={styles.buttons}>
                <Button href={'/'} descr={tt.delivery}>{tt.orderInst} <br/> instgrm <FaInstagram></FaInstagram></Button>
                <Button disabled href={'/'} descr={tt.dev}>{tt.buyCrypto} <br/> crypto<FaBitcoin /></Button>
            </div>
        </div>
        {/*<div className={styles.blackMask}></div>*/}
    </div>
}

/**TODO: GET STATIC PATH!!!!!*/
// export function getServerSideProps(context) {
//
//     return { props: { tote } }
// }

export default Shopper