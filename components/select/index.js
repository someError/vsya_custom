import styles from './styles.module.css'
import {useState} from "react";
import cn from 'classnames'
import { IoIosPlanet } from 'react-icons/io'
import { MdLanguage } from 'react-icons/md'

function Select (props) {
    const { options } = props;
    const initVal = props.initValue || options[0];
    const [open, setOpen] = useState(false);
    const [value, setvalue] = useState(initVal);
    const [opts, setOpts] = useState(getOptions(initVal))


    function getOptions(activeValue) {
        return options.filter(({value}) => value !== activeValue.value)
    }

    function handleChange(value) {
        setvalue(value)
        setOpts(getOptions(value))
        setOpen(false)
        props.onChange(value)
    }
    return <div className={styles.wrap}>
        <div className={cn(styles.root, {[styles.open]: open})}>
            <div onClick={() => setOpen(!open)} className={styles.activeValue}>{value.label} <MdLanguage/></div>
            <ul className={styles.ul}>
                {
                    opts.map(option => <li onClick={() => handleChange(option)} className={styles.li}>{ option.label }</li>)
                }
            </ul>
        </div>
        {open && <div className={styles.mask} onClick={() => setOpen(false)} />}
    </div>
}

export default Select