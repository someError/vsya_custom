import styles from './styles.module.css'
import cn from 'classnames'
import Link from 'next/link'
function Btn(props) {
    if (props.hrefOut) {
        return renderLink(props.hrefOut)
    }
    return <Link href={props.href}>
        { renderLink() }
    </Link>

    function renderLink (href) {
        return  <a className={cn(styles.root, props.className, {[styles.disabled]: props.disabled})} href={href}>
            { props.children }
            { props.descr && <div className={styles.descr}>{props.descr}</div> }
            { props.descrTop && <div className={styles.descrTop}><span>{props.descrTop}</span></div> }
        </a>
    }
}

export default Btn