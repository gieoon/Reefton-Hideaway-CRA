import React, {useState} from 'react';
import DatePicker from './datePicker';
import moment from 'moment';

const MONTHS = [
    "Jan", 
    "Feb", 
    "Mar", 
    "Apr", 
    "May", 
    "Jun", 
    "Jul", 
    "Aug", 
    "Sep", 
    "Oct", 
    "Nov", 
    "Dec"
];

const DAYSOFWEEK = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];

export default function AvailabilityChecker({

}){

    const [todayDate, setCheckInDate] = useState(
        // new Date()
        moment()
    );

    const [tomorrowDate, setCheckOutDate] = useState(
        // new Date(todayDate.getTime() + (24 * 60 * 60 * 1000))
        moment().add(1, "days")
    );

    const [showingDatePicker, setShowDatePicker] = useState(false);

    const updateDates = (startDate, endDate) => {
        setCheckInDate(startDate);
        setCheckOutDate(endDate);
    }

    return(
        <div className="AvailabilityChecker" id="availability">

            <h2>Check Availability</h2>
            <div className="DateInput-wrapper">
                <DateInput date={todayDate} type="checkIn" setDate={setCheckInDate} setShowDatePicker={setShowDatePicker}/>
                <div className="vertical-border"></div>
                <DateInput date={tomorrowDate} type="checkOut" setDate={setCheckOutDate} setShowDatePicker={setShowDatePicker}/>
                <PaxNumber />
                <CheckAvailability />
            </div>

            {
                showingDatePicker
                ? <DatePicker 
                    startDate={todayDate} 
                    endDate={tomorrowDate}
                    updateDates={updateDates} />
                : <div></div>
            }

        </div>
    );
}

function DateInput({
    date,
    setDate,
    type,
    setShowDatePicker
}){
    return(
        <div className="DateInput" onClick={()=>setShowDatePicker(true)}>
            <div className="dayOfMonth">{date.date()}</div>
            <div className="details-wrapper">
                <span className="monthName">{MONTHS[date.month() + 1]}</span>
                <span className="dayOfWeek">{date.day().toString().split(" ")[0]}</span>
            </div>
        </div>
    )
}

function PaxNumber({

}){
    return(
        <button className="PaxNumber">
            1 Room, 1 Guest
        </button>
    )
}

function CheckAvailability ({

}){
    return(
        <button className="CheckAvailability">
            Notify Reefton Hideaway
        </button>
    )
}