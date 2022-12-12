import React from 'react';
import Week from '../Week';
import { getWeeksInMonth, getWeek, getDate, getMonth } from 'date-fns';
import { withCurrentDay } from '../../../../HOCs/withCurrentDay';
import styles from './Month.module.css';

const Month = (props) => {
    const {currentDay} = props;

    const weeksInMonth = getWeeksInMonth(new Date(2022, getDate(new Date()), getMonth(currentDay)), { weekStartsOn: 0 }); 
    const withWeek = getWeek(new Date(2022, getMonth(currentDay), 1));  
    
    const arrayOfWeeks = new Array(weeksInMonth)
                    .fill(null)
                    .map((el, index) => <Week year='2022' week={withWeek + index} key={index} />)

        return (
        <tbody className={styles.numbersOfMonth}>
           {arrayOfWeeks} 
        </tbody>
         );
}

const wrappedComponent = withCurrentDay(Month);

export default wrappedComponent;


