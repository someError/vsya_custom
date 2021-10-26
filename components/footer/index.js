import styles from './styles.module.css'
import cn from 'classnames'
import {useState} from "react";
import {useSwipeable} from "react-swipeable";

function Footer (props) {
    const handlers = useSwipeable({
        onSwipedDown: () => props.setActive(false)
    })
    return <div {...handlers} className={cn(styles.root, {[styles.active]: props.active})} onClick={() => !props.active && props.setActive(true)}>
        <div className={styles.blobWrapper} onClick={() => props.setActive(!props.active)}><div className={cn('blob', styles.blob)}/></div>
        <div className={styles.mask} onClick={() => props.setActive(false)} />
        <div className={styles.content}>{ props.children }</div>
    </div>
}

export default Footer