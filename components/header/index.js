import styles from "./styles.module.css";
import cn from "classnames";
import Select from "../select";
import {useRouter} from "next/router";
import Link from 'next/link'

function Header () {
    const router = useRouter();
    const langs = [{value: 'en', label: 'en'}, {value: 'ru', label: 'ru'}];
    // console.log(router)
    return (
        <div className={styles.root}>
            <div className={'wrapper'}>
                <Link href={'/'}><a className={styles.logo}><img src='/assets/imgs/vsya-logo.png' alt='Кастом одежды, horror, psychedelic'/></a></Link>
                    <Select
                        className={styles.select}
                        initValue={langs.filter(({ value }) => router.locale === value)[0]}
                        onChange={({ value }) => router.push(router.asPath, router.asPath,{locale: value})}
                        options={langs}
                    />
            </div>
        </div>
    )
}

export default Header