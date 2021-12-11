import styles from './styles.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { useState } from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import {useRouter} from "next/router";

function Btn(props) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    return renderLink(props.href)

    function renderLink (href) {
        return <a className={cn(styles.root, props.className, {[styles.disabled]: props.disabled})} href={href} onClick={(e) => {
            if (props.disabled || loading) {
                e.preventDefault()
            } else {
                if (props.target === '_blank') {
                    setLoading(true)
                    setTimeout(() => setLoading(false), 2000)
                } else {
                    e.preventDefault()
                    setLoading(true)
                    router.push(href)
                }
            }

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