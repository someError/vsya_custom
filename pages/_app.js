import '../public/styles.css'
import '../public/assets/fonts/stylesheet.css'
import {AnimateSharedLayout} from "framer-motion";
import styles from "./styles.module.css";
import {FiInstagram, FiMail} from "react-icons/fi";
import {MdOutlineDesktopAccessDisabled} from 'react-icons/md'
import {AiOutlineMobile} from 'react-icons/ai'
import Footer from "../components/footer";
import {useState, useContext, createContext, useEffect} from "react";
import {useSwipeable} from "react-swipeable";
import Header from '../components/header'
import Context from "../appContext";
import Head from 'next/head'
import {useRouter} from "next/router";
import i18n from "../i18n";
import dynamic from 'next/dynamic'
import {ScreenRotation} from "../components/devCup";
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
import { YMInitializer } from 'react-yandex-metrika'
import {GTag} from '@deptno/gtag-react'


const DeviceOrientation = dynamic(() => import('react-screen-orientation'), {ssr: false})
const Orientation = dynamic(() => import('react-screen-orientation').then((module) => module.Orientation), {ssr: false})


function MyApp({Component, pageProps}) {
    const router = useRouter()
    const tt = i18n[router.locale]
    const [footer, setFooter] = useState(false);
    const [footerContext, setFooterContext] = useState(false);
    const [footerAppHandlerEnabled, setFooterAppHandlerEnabled] = useState(true);
    const [curItemIndex, setCurItemIndex] = useState(3);
    const [isMobile, setIsMobile] = useState(true);
    const [isInstagram, setIsInstagram] = useState(false);
    const tabletMatched = useReactSimpleMatchMedia('(min-width: 767px)');

    useEffect(() => {
        if (window.orientation !== undefined) {
            document.body.classList.add("mobile");
        } else {
            setIsMobile(false);
        }
    }, [])

    useEffect(() => {
        if(navigator.userAgent.includes("Instagram")){
            setIsInstagram(true)
        //     window.location.href = "https://vsya.store";
        }

        let language = window.navigator ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage) : "ru";
        language = language.substr(0, 2).toLowerCase();
        if (language !== 'ru') {
            if (router.locale !== 'en') {
                router.push(router.asPath, router.asPath, {locale: 'en'})
            }
        }
    }, [])

    const contextState = {
        footerAppHandlerEnabled,
        setFooterAppHandlerEnabled,
        footerContext,
        setFooterContext,
        curItemIndex,
        setCurItemIndex,
        isMobile,
        isInstagram
    }

    const handlers = useSwipeable({
        onSwipedUp: () => contextState.footerAppHandlerEnabled && setFooter(true),
        onSwipedDown: () => setFooter(false)
    });

    return <>
        <Head>
            <title>vsya.store - ручная роспись, кастом одежды</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
        </Head>
        <Context.Provider value={contextState}>
            <div className={styles.component} {...handlers}>
                <YMInitializer accounts={[86987737]} />
                <GTag id={'G-Q1MPJ9G7K6'} />
                <Header/>
                <DeviceOrientation lockOrientation={'portrait'}>
                    <Orientation orientation={'landscape'}>
                        {isMobile ? <ScreenRotation/> : <NdPhone tt={tt}/>}
                    </Orientation>
                    <Orientation orientation='portrait'>
                        {
                            tabletMatched ? <NdPhone tt={tt}/> : <Component {...pageProps} />
                        }

                    </Orientation>
                </DeviceOrientation>

                <Footer active={contextState.footerContext || footer} setActive={setFooter}>
                    <div className={styles.wrapper}>
                        <a href="https://www.instagram.com/vsya.custom" target={'_blank'} className={styles.footerRow}>
                            <FiInstagram></FiInstagram>
                            <div className={styles.footerRowInst}>
                                <div>vsya.custom</div>
                                <div>instagram.com</div>
                            </div>
                        </a>
                        <a href="mailto:vsya.custom@gmail.com" target={'_blank'} className={styles.footerRow}>
                            <FiMail></FiMail>
                            <div className={styles.footerRowInst}>
                                <div>vsya.custom@gmail.com</div>
                                <div>{tt.mail}</div>
                            </div>
                        </a>
                    </div>
                </Footer>
            </div>
        </Context.Provider>
    </>
}

function NdPhone({tt}) {
    return <div className={styles.ndPhone}>
        <MdOutlineDesktopAccessDisabled/>
        <div className={styles.ndPhoneContent}>{tt && tt.devTitle1}</div>
        <AiOutlineMobile/>
        <div className={styles.ndPhoneContent}>{tt && tt.devTitle2}</div>
    </div>
}

export default MyApp