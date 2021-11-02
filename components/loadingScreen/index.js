import styles from "./styles.module.css";
import Creepy from "../creepy";
import {GiDiamondsSmile, GiGhost, GiTie, GiTv} from "react-icons/gi";
import {useEffect} from "react";

function LoadingScreen (props) {
    return <div className={styles.sliderPreloadWrapper}>
        <div>
            <Creepy>
                <div className={styles.sliderPreloader} />
                <div><GiTv /><GiTie /><GiDiamondsSmile /><GiGhost/></div>
            </Creepy>
        </div>
    </div>
}

export default LoadingScreen