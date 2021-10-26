import styles from './styles.module.css'
import cn from 'classnames'
function Creepy (props) {
    return (
        <>
            <div className={styles.root}>
                {/*<p>Ты</p>*/}
                {/*<p className={styles.small}>точно знаешь</p>*/}
                {/*<p>что</p>*/}
                {/*<p className={styles.smaller}>за твоей</p>*/}
                {/*<p>Спиной??</p>*/}
                {/*SADAKO*/}
                { props.children }
            </div>

            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="squiggly-0">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
                        <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6"/>
                    </filter>
                    <filter id="squiggly-1">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/>
                    </filter>

                    <filter id="squiggly-2">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6"/>
                    </filter>
                    <filter id="squiggly-3">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/>
                    </filter>

                    <filter id="squiggly-4">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6"/>
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default Creepy