import styles from "./styles.module.css";
import Creepy from "../creepy";
import {GiDiamondsSmile, GiGhost, GiTie, GiTv} from "react-icons/gi";
import {useEffect} from "react";
import cn from 'classnames'

function LoadingScreen (props) {
    const {totalLoads, curLoads} = props
    console.log(curLoads, totalLoads)
    console.log(-(101 - (curLoads / totalLoads * 100) ) + '%', 'wtf')
    const passedInlineStyle = { '--loadPercent': -(101 - (curLoads / totalLoads * 100) ) + '%'}
    return <div style={passedInlineStyle} className={styles.sliderPreloadWrapper}>
        <div>
            <Creepy>
                <div data-percent={curLoads /totalLoads} className={cn(styles.sliderPreloader)} />
                <div><GiTv /><GiTie /><GiDiamondsSmile /><GiGhost/></div>
            </Creepy>
        </div>
    </div>
}

export default LoadingScreen