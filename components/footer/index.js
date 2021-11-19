import styles from './styles.module.css'
import cn from 'classnames'
import {useState, useContext} from "react";
import {useSwipeable} from "react-swipeable";
import Context from "../../appContext";
import {MdClose} from "react-icons/md";

function Footer (props) {
    const appState = useContext(Context);
    const handleClose = () => {
        appState.setFooterContext(false);
        props.setActive(false)
    }

    const handlers = useSwipeable({
        onSwipedDown: handleClose
    })
    return <div {...handlers} className={cn(styles.root, {[styles.active]: props.active})}>
        <div className={styles.blobWrapper} onClick={() => {
            appState.setFooterContext(!props.active);
            props.setActive(!props.active)
        }}><div className={cn('blob', styles.blob)}></div></div>
        <div className={styles.mask} onClick={handleClose} />
        <div className={styles.content}>{ props.children }</div>
    </div>
}

export default Footer