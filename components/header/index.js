import styles from "./styles.module.css";
import cn from "classnames";
import Select from "../select";
import {useRouter} from "next/router";

function Header () {
    const router = useRouter();
    const langs = [{value: 'en', label: 'en'}, {value: 'ru', label: 'ru'}];
    console.log(router)

    return (
        <div className={styles.root}>
            <div className={styles.helloWrapper}><div className={cn(styles.hello)}><div>В<b>С</b>Я</div><span>кастом <i></i></span></div></div>
            <div className={styles.select}>
                <Select
                    initValue={langs.filter(({ value }) => router.locale === value)[0]}
                    onChange={({ value }) => router.push(router.asPath, router.asPath,{locale: value})}
                    options={langs}
                />
            </div>
        </div>
    )
}

export default Header