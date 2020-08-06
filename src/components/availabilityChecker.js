import React, {useState} from 'react';
import DatePicker from './datePicker';
import moment from 'moment';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';

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

const SERVER_URL = "http://reefton-hideaway.appspot.com/process_form.php"

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

    const [roomCount, setRoomCount] = useState(1);

    const [paxCount, setPaxCount] = useState(1);

    const updateDates = (startDate, endDate) => {
        setCheckInDate(startDate);
        setCheckOutDate(endDate);
    }

    return(
        <div className="AvailabilityChecker" id="availability">

            <h2>Request a room</h2>
            <p>Let us know your intentions and we'll get back to you.</p>
            <div className="DateInput-wrapper">
                <div>
                    <span className="DateInput-title">Checking in</span>
                    <DateInput date={todayDate} type="Check in" setDate={setCheckInDate} setShowDatePicker={setShowDatePicker}/>
                </div>
                <div className="vertical-border"></div>
                <div>
                    <span className="DateInput-title">Checking out</span>
                    <DateInput date={tomorrowDate} type="Check out" setDate={setCheckOutDate} setShowDatePicker={setShowDatePicker}/>
                </div>
                <RoomNumber roomCount={roomCount} setRoomCount={setRoomCount} />
                <PaxNumber paxCount={paxCount} setPaxCount={setPaxCount} />
            </div>

            <div className="contact-details">
                <input id="input-name" className="Input-name" type="text" placeholder="Name" required name="Name" />
                <input id="input-email" className="Input-email" type="email" placeholder="Email" required name="Email" />
                <input id="input-roomtype" className="Input-roomtype" type="text" placeholder="Room Type" required name="Message" />
            </div>

            <CheckAvailabilityBtn 
                obj={{
                    checkInDate: startDate,
                    checkOutDate: endDate,
                    roomCount,
                    paxCount: paxCount,
                    name: document.getElementById('input-name').value,
                    email: document.getElementById('input-email').value,
                    roomType: document.getElementById('input-roomtype').value,
                }}
            />

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

function Minus({
    callback
}){
    return(
        <div className="Minus" onClick={()=>callback()}>
            <img src={minus} alt="" />
        </div>
    )
}

function Plus({
    callback
}){
    return(
        <div className="Plus" onClick={()=>callback()}>
            <img src={plus} alt="" />
        </div>
    )
}

function RoomNumber({
    roomCount,
    setRoomCount
}){
    return(
        <div className="RoomNumber">
            <Minus callback={()=>setRoomCount(Math.max(0,roomCount-1))}/>
            <div>
                {roomCount}
                {roomCount === 1 ? " Room" : " Rooms"}
            </div>
            <Plus callback={()=>setRoomCount(++roomCount)}/>
        </div>
    )
}

function PaxNumber({
    paxCount,
    setPaxCount,
}){
    return(
        <div className="PaxNumber">
            <Minus callback={()=>setPaxCount(Math.max(0, paxCount-1))}/>
            <div>
                {paxCount}
                {paxCount === 1 ? " Guest" : " Guests"}
            </div>
            <Plus callback={()=>setPaxCount(++paxCount)}/>
        </div>
    )
}


function CheckAvailabilityBtn ({
    obj
}){
    return(
        <button 
            className="CheckAvailability" 
            onClick={()=>{sendData(obj)}}>
            Notify Reefton Hideaway
        </button>
    )
}

const sendData = (obj) => {
    console.log('sending data: ', obj);
}