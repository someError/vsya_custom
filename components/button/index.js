import styles from './styles.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { useState } from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function Btn(props) {
    const [loading, setLoading] = useState(false)
    if (props.hrefOut) {
        return renderLink(props.hrefOut)
    }

    return <Link href={props.href}>
        { renderLink() }
    </Link>

    function renderLink (href) {
        return <a className={cn(styles.root, props.className, {[styles.disabled]: props.disabled})} href={href} onClick={(e) => {
            props.disabled && e.preventDefault()
            setLoading(true)
        }}>
            {/*<span className={styles.loading}>Loading{dotsView}</span>*/}
            { loading && <span className={styles.loading}><div>Give a sec <AiOutlineLoading3Quarters className={'rotation'} /></div></span> }
            {/*{ loading && <span className={styles.loading}>Give a sec <AiOutlineLoading3Quarters className={'rotation'} /></span> }*/}
            { props.children }
            { props.descr && <div className={styles.descr}>{props.descr}</div> }
            { props.descrTop && <div className={styles.descrTop}><span>{props.descrTop}</span></div> }
        </a>
    }
}

export default Btn