import React from 'react';
import preloader from '../../../assets/Pulse-1s-200px.svg';
import styles from './Preloader.module.css';

let Preloader = () => {
    return (
        <img className={styles.preloader} src={preloader} />
    )
}

export default Preloader;