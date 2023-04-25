import React from "react";
import styles from './ProgressCircle.module.scss'
import { IProgressCircleProps } from './ProgressCircle.type'

const ProgressCircle = ({ percentage, strokeWidth, strokeColor }: IProgressCircleProps) => {
    const radius = 50 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - percentage / 100 * circumference;

    return (
        <div className={styles.progressCircle}>
            <svg className={styles.progressCircle__svg} viewBox="0 0 100 100">
                <circle
                    className={styles.progressCircle__circle}
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeWidth={strokeWidth}
                    stroke={strokeColor}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <span className={styles.progressCircle__text}>{percentage}%</span>
        </div>
    );
};

export default ProgressCircle;
