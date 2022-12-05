import React from 'react';
import Week from '../Week';
import { getWeeksInMonth, getWeek, getDate, getMonth } from 'date-fns';
import styles from './Month.module.css';
import { withCurrentDay } from '../../../../HOCs/withCurrentDay';


const Month = (props) => {
    const {currentDay} = props;

    const WeeksInMonth = getWeeksInMonth(new Date(2022, getDate(new Date()), getMonth(currentDay)), { weekStartsOn: 0 }); 
    const resultWeek = getWeek(new Date(2022, getMonth(currentDay), 1));  
    
    const arrayOfWeeks = new Array(WeeksInMonth)
                    .fill(null)
                    .map((el, index) => <Week year='2022' week={resultWeek + index} key={index} />)

        return (
        <tbody className={styles.numbersOfMonth}>
           {arrayOfWeeks} 
        </tbody>
         );
}

const wrappedComponent = withCurrentDay(Month);

export default wrappedComponent;


