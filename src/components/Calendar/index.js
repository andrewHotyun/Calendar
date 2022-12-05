import React, { Component } from 'react';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay/index'
import CurrentDayContext from "../../contexts/CurrentDayContext";
import styles from './Calendar.module.css'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: new Date()
        }
    }

    activeDay = (day) => {
        this.setState({
            currentDay: day
        })
    }
    render() {
        const {currentDay} = this.state;
        return (
            <div className={styles.calendar}>
                <CurrentDayContext.Provider value = {[currentDay, this.activeDay]}>
                    <CurrentDay/>
                    <CalendarBody/>
                </CurrentDayContext.Provider>
            </div>
        );
    }
}

export default Calendar;
