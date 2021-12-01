import styles from "./styles.module.css";
import {MdScreenRotation} from "react-icons/md";

function ScreenRotation () {
    return <div>
        <MdScreenRotation className={styles.screenRotation} />
    </div>
}

export {
    ScreenRotation,
}