import { format } from 'date-fns';
import React from 'react';

const CurrentDay = () => {
    const {day} = props;
    return (
        <div>
            <p>{format(day, 'cccc')}</p>    
            <p>{format(day, 'd')}</p>
        </div>
    );
}

export default CurrentDay;
