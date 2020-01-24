import React from 'react'
import preloader from '../../../asses/img/30.gif';
import styles from './Preloader.module.css';

const Preloader = () => {

    return (
        <div className={styles.preloader}>
            <div className={styles.imgBox}>
                <img src={preloader} alt="preloader" />
            </div>
        </div>

    )
}

export default Preloader;