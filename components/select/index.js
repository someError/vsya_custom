import styles from './styles.module.css'
import {useState} from "react";
import cn from 'classnames'
import { RiArrowDownSLine} from 'react-icons/ri'
import { MdLanguage } from 'react-icons/md'
import Creepy from "../creepy";

function Select (props) {
    const { options, value } = props;
    // const value = props.value|| options[0];
    const [open, setOpen] = useState(false);
    // const [value, setvalue] = useState(initVal);
    // const [opts, setOpts] = useState(getOptions(value))


    function getOptions(activeValue) {
        return options.filter((opt) => opt.value !== value.value)
    }

    function handleChange(value) {
        // setvalue(value)
        // setOpts(getOptions(value))
        setOpen(false)
        props.onChange(value)
    }
    return <div className={styles.wrap}>
            <div className={cn(styles.root, {[styles.open]: open}, props.className)}>
                <div onClick={() => setOpen(!open)} className={styles.activeValue}>{value.label}<RiArrowDownSLine/></div>
                <ul className={styles.ul}>
                    {
                        getOptions().map(option => <li onClick={() => handleChange(option)} className={styles.li}>{ option.label }</li>)
                    }
                </ul>
            </div>
            {open && <div className={styles.mask} onClick={() => setOpen(false)} />}
        </div>

}

export default Select