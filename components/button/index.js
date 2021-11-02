import styles from './styles.module.css'
import cn from 'classnames'
import Link from 'next/link'
function Btn(props) {
    return <Link href={props.href}>
        <a className={cn(styles.root, props.className, {[styles.disabled]: props.disabled})}>
            { props.children }
            { props.descr && <div className={styles.descr}>{props.descr}</div> }
        </a>
    </Link>
}

export default Btn