import {useState} from 'react'
import styles from './styles.module.css'
import styled from "@emotion/styled";

function Carousel (props) {
    const [active, setActive] = useState(1)
    return <div className="wrapper">
        <div className={styles.carousel}>
            <div className={styles.carouselItem}>
                <div className={styles.carouselItemHead}>
                    🐳
                </div>
                <div className={styles.carouselItemBody}>
                    <p className={styles.title}>spouting whale</p>
                    <p>Unicode: U+1F433</p>
                </div>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.carouselItemHead}>
                    🐋
                </div>
                <div className={styles.carouselItemBody}>
                    <p className={styles.title}>whale</p>
                    <p>Unicode: U+1F40B</p>
                </div>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.carouselItemHead}>
                    🐬
                </div>
                <div className={styles.carouselItemBody}>
                    <p className={styles.title}>dolphin</p>
                    <p>Unicode: U+1F42C</p>
                </div>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.carouselItemHead}>
                    🐟
                </div>
                <div className={styles.carouselItemBody}>
                    <p className={styles.title}>fish</p>
                    <p>Unicode: U+1F41F</p>
                </div>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.carouselItemHead}>
                    🐠
                </div>
                <div className={styles.carouselItemBody}>
                    <p className={styles.title}>tropical fish</p>
                    <p>Unicode: U+1F420</p>
                </div>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.carouselItemHead}>
                    🐡
                </div>
                <div className={styles.carouselItemBody}>
                    <p className={styles.title}>blowfish</p>
                    <p>Unicode: U+1F421</p>
                </div>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.carouselItemHead}>
                    🦈
                </div>
                <div className={styles.carouselItemBody}>
                    <p className={styles.title}>shark</p>
                    <p>Unicode: U+1F988</p>
                </div>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.carouselItemHead}>
                    🐙
                </div>
                <div className={styles.carouselItemBody}>
                    <p className={styles.title}>octopus</p>
                    <p>Unicode: U+1F419</p>
                </div>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.carouselItemHead}>
                    🐚
                </div>
                <div className={styles.carouselItemBody}>
                    <p className={styles.title}>spiral shell</p>
                    <p>Unicode: U+1F41A</p>
                </div>
            </div>
        </div>
    </div>
}

export default Carousel