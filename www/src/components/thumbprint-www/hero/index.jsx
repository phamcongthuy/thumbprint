import React from 'react';
import styles from './index.module.scss';
import heroImg from './heroImg.svg';
import thumbprintLogo from '../../container/thumbprintLogo.svg';

const description = 'Trang lưu trữ nội dung phát triển mảng trại nuôi thỏ, và nội dung phát triển Node.js của Ngothuy.com.';

const Hero = () => (
    <div className={styles.hero}>
        <div className={styles.imageWrap}>
            <img src={heroImg} className={styles.image} alt="" />
        </div>
        <div className={styles.textBlock}>
            <img src={thumbprintLogo} className={styles.logo} alt="Ngothuy.com Studio Database" />
            <div className={styles.subhead}>Ngothuy.com Studio Database</div>
            <div className={styles.description}>{description}</div>
        </div>
    </div>
);

export default Hero;
