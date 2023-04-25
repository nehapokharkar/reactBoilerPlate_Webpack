import React from 'react';
import styles from './ProgressBar.module.scss'
import { IProgressBarProps } from './ProgressBar.type';

const ProgressBar = ({ percent, showValueBelow, showValueSide }: IProgressBarProps) => {
    return (
        <>
            {
                showValueSide ? (
                    <div className={styles.barContainer}>
                        <div className={styles.progressBarSide}>
                            <div className={styles.progressBarSide__inner} style={{ width: `${percent}%` }}></div>
                        </div>
                        <span className={styles.percent}>{percent}%</span>
                    </div>
                ) : (
                    <div className={styles.progressBar}>
                        <div className={styles.progressBar__inner} style={{ width: `${percent}%` }}></div>
                        {
                            showValueBelow && <span className={styles.progressBar__percent}>{percent}%</span>
                        }
                    </div>
                )
            }
        </>

    );
};

export default ProgressBar;
