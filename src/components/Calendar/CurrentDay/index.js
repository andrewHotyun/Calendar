import React from 'react';
import { format } from 'date-fns';
import { withCurrentDay } from '../../../HOCs/withCurrentDay';
import styles from './CurrentDay.module.css';

const CurrentDay = (props) => {
    const {day} = props;
    return (
        <div className={styles.leftSide}>
            <p className={styles.text}>{format(day, 'cccc')}</p>    
            <p className={styles.number}>{format(day, 'd')}</p>
        </div>
    );
}

const wrappedComponent = withCurrentDay(CurrentDay)

export default wrappedComponent;
