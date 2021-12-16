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
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi'
import { MdOutlinePhoto, MdClose } from 'react-icons/md'
import Button from '../../components/button'
import DetailSlider from "../../components/detailSlider";
import {useSwipeable} from "react-swipeable";
import cn from 'classnames'
import Context from "../../appContext";
import i18n from "../../i18n";

function Shopper ({tote}) {
    const router = useRouter()
    const appState = useContext(Context);

    const handlers = useSwipeable({
        onSwipedLeft: _showGallery,
        onSwipedRight: _hideGallery
    });
    const contentHandlers = useSwipeable({
        onSwipedUp: () => appState.setFooterContext(true),
        onSwipedDown: () => appState.setFooterContext(false)
    });
    const tt = i18n[router.locale]
    const [showGallery, setShowGallery] = useState(false)
    const [routerLoading, setRouterLoading] = useState(false)

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

    useEffect(() => {
        appState.setCurItemIndex(tote.index || appState.curItemIndex);
    }, [tote]);

    return <div className={styles.root} {...handlers}>
        <div className={cn(styles.details, {[styles.detailsShow]: showGallery})}>
            {/*<div className={'blob'}><FiChevronsLeft></FiChevronsLeft></div>*/}
            <div className={styles.detailsMask}>
                <div className={styles.detailsMaskContent}></div>
            </div>
            <div className={styles.detailsContent}>
                <DetailSlider srcArray={tote.gallery} isInstagram={appState.isInstagram} />
                {/*<VerticalSlider></VerticalSlider>*/}
                <article className={cn(styles.article)} {...contentHandlers}>
                    {/*<p></p>️*/}
                    {/*<p>Это -</p>*/}
                    {/*<p><i><Creepy>👜</Creepy></i><Creepy>🕶</Creepy><span>Вся</span> уникальная и непохожая ни на одну другую.</p>*/}
                    {/*<p><i><Creepy>🎨</Creepy></i><i><Creepy>🌶️</Creepy></i><span>Вся</span> в сочных и бесстрашных перед стиркой красках.</p>*/}
                    {/*<p><i><Creepy>🔥</Creepy></i><i><Creepy>🕶</Creepy></i><span>Вся</span> образцово прошита ии..ии упакована в крутой черный мат.</p>*/}
                    <p><span>{tt.detailFirst[0]}</span> {tt.detailFirst[1]} <i><Creepy className={styles.inline}>🎨</Creepy ><Creepy className={styles.inline}>🌶️</Creepy></i>, {tt.detailFirst[2]}.</p>
                    <p><span>{tt.detailSecond[0]}</span> {tt.detailSecond[1]} <i><Creepy className={styles.inline}>🌒</Creepy></i> </p>
                    {/*<p><span>Вся</span> в сочных, сверхъярких красках.</p>*/}
                    {/*<p>Эта картина  парам пам пам пам тара рам</p>*/}
                    {/*<p>Стильная упаковка из крутого чернорго мата</p>*/}
                    {/*<p><Creepy>🖤</Creepy>️Вся упаковка из стильного черного мата</p>*/}
                </article>
            </div>
        </div>
        <div className={styles.title}><Creepy><span>{tote.name}</span><span>{tote.name2}</span></Creepy></div>
        <div className={styles.glitchWrap}>
            <div className={cn(styles.glitch, {[styles.glitchInst]: appState.isInstagram})}>
                {
                    [...Array(5).keys()].map(i => <div
                        key={i}
                        className={styles.glitch__item}
                        // layoutId={tote.id}
                        style={{backgroundImage: `url(${tote.srcDetail})`}}
                    />)
                }
            </div>
            <Creepy
                className={styles.blobWrap}
                onClick={() => {
                    if (showGallery) {
                        _hideGallery()
                    } else {
                        setRouterLoading(true)
                        setTimeout(() => router.push('/'), 100)
                    }
                }}
            >
            <div className={cn('blob', styles.blob)}>
                {
                    routerLoading ? <AiOutlineLoading3Quarters className={'rotation'} /> : <BiChevronsLeft />
                }
            </div>
            </Creepy>
        </div>
        <div className={'wrapper'}>
            <article className={cn(styles.article, styles.chat)}>
                <p>
                    { tote.descr && tote.descr.map(text => <DescrText>{text}</DescrText>) }
                    {/*{*/}
                    {/*    (tote.descr || tote.descrRu) && router.locale === 'en'*/}
                    {/*        ? tote.descr.map(text => <DescrText>{text}</DescrText>)*/}
                    {/*        : tote.descrRu.map(text => <DescrText>{text}</DescrText>)*/}
                    {/*}*/}
                </p>
            </article>
            <div className={styles.buttons}>
                <Button href={'https://www.instagram.com/vsya.custom'} target={'_blank'} descrTop={tt.delivery} descr={tt.priceDescr}>{tt.orderInst} <br/> instgrm <FaInstagram></FaInstagram></Button>
                <Button disabled href={'#'} descr={tt.dev}>{tt.buyCrypto} <br/> crypto<FaBitcoin /></Button>
            </div>
            <Creepy className={styles.blobWrapRight} onClick={() => _toggleGallery()}>
                <div className={cn('blob', styles.blob)}>
                    { showGallery ? <MdClose /> : <MdOutlinePhoto /> }
                </div>
            </Creepy>
        </div>
    </div>
}

function DescrText (props) {
    return <>{ props.children } <br/></>
}

export async function getStaticPaths({ locales }) {
    // Call an external API endpoint to get posts
    const res = getItems()
    const paths = locales.reduce(
        (acc, next) => [
            ...acc,
            ...res.map((item) => ({
                params: {
                    id: item.id,
                },
                locale: next,
            })),
        ],
        []
    );

    return { paths, fallback: false }
}

/**TODO: GET STATIC PATH!!!!!*/
export async function getStaticProps({ params }) {
    const tote = getItems(params.id);

    // Pass post data to the page via props
    return { props: { tote } }
}

export default Shopper