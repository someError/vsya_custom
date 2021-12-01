import '../public/styles.css'
import '../public/assets/fonts/stylesheet.css'
import {AnimateSharedLayout} from "framer-motion";
import styles from "./styles.module.css";
import {FiInstagram, FiMail} from "react-icons/fi";
import { MdOutlineDesktopAccessDisabled } from 'react-icons/md'
import { AiOutlineMobile } from 'react-icons/ai'
import Footer from "../components/footer";
import {useState, useContext, createContext, useEffect} from "react";
import {useSwipeable} from "react-swipeable";
import Header from '../components/header'
import Context from "../appContext";
import Head from 'next/head'
import {useRouter} from "next/router";
import i18n from "../i18n";
import dynamic from 'next/dynamic'
import { ScreenRotation } from "../components/devCup";
import useReactSimpleMatchMedia from 'react-simple-matchmedia'

const DeviceOrientation = dynamic(() => import('react-screen-orientation'), { ssr: false })
const Orientation = dynamic(() => import('react-screen-orientation').then((module) => module.Orientation), { ssr: false })


function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const tt = i18n[router.locale]
    const [footer, setFooter] = useState(false);
    const [footerContext, setFooterContext] = useState(false);
    const [footerAppHandlerEnabled, setFooterAppHandlerEnabled] = useState(true);
    const [curItemIndex, setCurItemIndex] = useState(2);
    const [isMobile, setIsMobile] = useState(true);
    const tabletMatched = useReactSimpleMatchMedia('(min-width: 767px)');
    console.log(tt, 'tt')

    useEffect(() => {
        if (window.orientation !== undefined) {
            document.body.classList.add("mobile");
        } else {
            setIsMobile(false);
        }
    }, [])

    const contextState = {
        footerAppHandlerEnabled,
        setFooterAppHandlerEnabled,
        footerContext,
        setFooterContext,
        curItemIndex,
        setCurItemIndex,
        isMobile
    }

    const handlers = useSwipeable({
        onSwipedUp: () => contextState.footerAppHandlerEnabled && setFooter(true),
        onSwipedDown: () => setFooter(false)
    });

    return  <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        </Head>
        <Context.Provider value={contextState}>
            <div className={styles.component} {...handlers}>
                <Header />

                <DeviceOrientation lockOrientation={'portrait'}>
                    <Orientation orientation={'landscape'}>
                        { isMobile ? <ScreenRotation /> : <NdPhone tt={tt} /> }
                    </Orientation>
                    <Orientation orientation='portrait'>
                        {
                            tabletMatched ? <NdPhone tt={tt} /> : <Component {...pageProps} />
                        }

                    </Orientation>
                </DeviceOrientation>

                <Footer active={contextState.footerContext || footer} setActive={setFooter}><div className={styles.wrapper}>
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
                </div></Footer>
            </div>
        </Context.Provider>
    </>
}

function NdPhone ({tt}) {
    return <div className={styles.ndPhone}>
        <MdOutlineDesktopAccessDisabled />
        <div className={styles.ndPhoneContent}>{tt && tt.devTitle1}</div>
        <AiOutlineMobile />
        <div className={styles.ndPhoneContent}>{tt && tt.devTitle2}</div>
    </div>
}

export default MyApp