import styles from './styles.module.css'
import cn from 'classnames'
function Btn(props) {
    return <a className={cn(styles.root, props.className)} href="#">{props.children}</a>
}

export default Btn