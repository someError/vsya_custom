import '../public/styles.css'
import '../public/assets/fonts/stylesheet.css'
import {AnimateSharedLayout} from "framer-motion";
import styles from "./styles.module.css";
import {FiInstagram, FiMail} from "react-icons/fi";
import { MdScreenRotation } from 'react-icons/md'
import Footer from "../components/footer";
import {useState ,useContext, createContext} from "react";
import {useSwipeable} from "react-swipeable";
import Header from '../components/header'
import Context from "../appContext";
import {useRouter} from "next/router";
import i18n from "../i18n";
import dynamic from 'next/dynamic'

const DeviceOrientation = dynamic(() => import('react-screen-orientation'), { ssr: false })
const Orientation = dynamic(() => import('react-screen-orientation').then((module) => module.Orientation), { ssr: false })


function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const tt = i18n[router.locale]
    const [footer, setFooter] = useState(false);
    const [footerContext, setFooterContext] = useState(false);
    const [footerAppHandlerEnabled, setFooterAppHandlerEnabled] = useState(true);
    const [curItemIndex, setCurItemIndex] = useState(2);

    const contextState = {
        footerAppHandlerEnabled,
        setFooterAppHandlerEnabled,
        footerContext,
        setFooterContext,
        curItemIndex,
        setCurItemIndex
    }

    const handlers = useSwipeable({
        onSwipedUp: () => contextState.footerAppHandlerEnabled && setFooter(true),
        onSwipedDown: () => setFooter(false)
    });

    return  <Context.Provider value={contextState}>
        <div className={styles.component} {...handlers}>
            <Header />

            <DeviceOrientation lockOrientation={'portrait'}>
                <Orientation orientation='landscape'>
                    <MdScreenRotation className={styles.screenRotation} />
                </Orientation>
                <Orientation orientation='portrait' alwaysRender={false}>
                    <Component {...pageProps} />
                </Orientation>
            </DeviceOrientation>

            <Footer active={contextState.footerContext || footer} setActive={setFooter}><div className={styles.wrapper}>
                <a href="https://www.instagram.com/vsya_custom" target={'_blank'} className={styles.footerRow}>
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
}

export default MyApp