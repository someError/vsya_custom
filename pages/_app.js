import '../public/styles.css'
import '../public/assets/fonts/stylesheet.css'
import {AnimateSharedLayout} from "framer-motion";
import styles from "./styles.module.css";
import {FiInstagram, FiMail} from "react-icons/fi";
import Footer from "../components/footer";
import {useState ,useContext, createContext} from "react";
import {useSwipeable} from "react-swipeable";
import Header from '../components/header'
import Context from "../appContext";


function MyApp({ Component, pageProps }) {
    const [footer, setFooter] = useState(false);
    const [footerContext, setFooterContext] = useState(false);
    const [footerAppHandlerEnabled, setFooterAppHandlerEnabled] = useState(true);

    const contextState = {
        footerAppHandlerEnabled,
        setFooterAppHandlerEnabled,
        footerContext,
        setFooterContext
    }

    const handlers = useSwipeable({
        onSwipedUp: () => contextState.footerAppHandlerEnabled && setFooter(true),
        onSwipedDown: () => setFooter(false)
    })
    return  <Context.Provider value={contextState}>
        <div className={styles.component} {...handlers}>
            <Header />
            <Component {...pageProps} />
            <Footer active={contextState.footerContext || footer} setActive={setFooter}><div className={styles.wrapper}>
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
    </Context.Provider>
}

export default MyApp