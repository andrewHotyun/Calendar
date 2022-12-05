import React from 'react';
import { format } from 'date-fns';
import Month from './Month'
import {withCurrentDay} from '../../../HOCs/withCurrentDay'
import styles from './Calendar.module.css';


const CalendarBody = (props) => {

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    return (
        <div className = {styles.rightSide}>
            <div className = {styles.nameDays}>{format(props.currentDay, 'MMMM yyyy')}</div>
            <table>
                <thead>
                    <tr className = {styles.tr}>
                        {weekDays.map((d, day) => <td key = {day} className = {styles.tr}>{d}</td>)}
                    </tr>
                </thead>
                <Month/>
            </table>
        </div>
    );
}

const wrappedContainer = withCurrentDay(CalendarBody)

export default wrappedContainer;
