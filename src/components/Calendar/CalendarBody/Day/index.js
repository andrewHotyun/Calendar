import React from 'react';
import { format, getMonth } from 'date-fns';
import { withCurrentDay } from '../../../../HOCs/withCurrentDay';

const Day = (props) => {
    const {day, currentDay, getActive} = props;
    const setActive = () => {
        getActive(day);
    }

    const cn = format(day, 'd') === format(currentDay, 'd') ? 'active' : 'noactive'

    if (getMonth(day) === getMonth(currentDay)) {
        return (
            <td onClick={setActive} className={cn}>
                {format(day, 'd')}
            </td>)
    } else {
        return <td>{' '}</td>
    }
}

const wrappedComponent = withCurrentDay(Day);

export default wrappedComponent;
