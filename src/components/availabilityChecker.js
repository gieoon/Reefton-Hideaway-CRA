import React, {useState, useEffect} from 'react';
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

const SERVER_URL =  
    "https://reefton-hideaway.appspot.com/process_form.php"; 
    // "http://localhost:8080/process_form.php"; 

export default function AvailabilityChecker({

}){

    const [checkInDate, setCheckInDate] = useState(
        // new Date()
        moment()
    );

    const [checkOutDate, setCheckOutDate] = useState(
        // new Date(todayDate.getTime() + (24 * 60 * 60 * 1000))
        moment().add(1, "days")
    );

    const [roomCount, setRoomCount] = useState(1);

    const [paxCount, setPaxCount] = useState(1);

    const updateDates = (startDate, endDate) => {
        console.log("updating for: ", startDate, endDate);
        setCheckInDate(startDate);
        setCheckOutDate(endDate);
    }

    const [success, setSuccess] = useState(false);

    return(
        <div className="AvailabilityChecker" id="availability">
            {!success
            ? <>
                <h2>Request a room</h2>
                    <p>Let us know your intentions and we'll get back to you.</p>
                    <div className="DateInput-wrapper">

                        <DatePicker 
                            startDate={checkInDate} 
                            endDate={checkOutDate}
                            updateDates={updateDates} />

                        <div className="DateInput_wrapper_custom">
                            <div className="DateInput-title">
                                <span className="">Checking in</span>
                                <DateInput date={checkInDate} type="Check in" setDate={setCheckInDate} />
                            </div>
                            <div className="vertical-border"></div>
                            <div className="DateInput-title">
                                <span className="DateInput-title">Checking out</span>
                                <DateInput date={checkOutDate} type="Check out" setDate={setCheckOutDate} />
                            </div>
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
                            checkInDate: checkInDate,
                            checkOutDate: checkOutDate,
                            roomCount,
                            paxCount,
                        }}
                        setSuccess={setSuccess}
                    />
                </>
                : <div>
                    <h2>We've notified Reefton Hideaway, you'll hear back from us soon :)</h2>
                </div>
            }
        </div>
    );
}

function DateInput({
    date,
}){
    useEffect(()=>{
        // console.log('new Date: ', date);
    },[date]);
    // console.log(date.day())
    return(
        <>
        { date
            ? <div className="DateInput_custom">
                <div className="dayOfMonth">{date.date()}</div>
                <div className="details-wrapper">
                    <span className="monthName">{MONTHS[date.month()]}</span>
                    <span className="dayOfWeek">{DAYSOFWEEK[date.day()]}</span>
                </div>
            </div>
            : <></>
        }
        </>
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
            <Minus callback={()=>setRoomCount(Math.max(1,roomCount-1))}/>
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
            <Minus callback={()=>setPaxCount(Math.max(1, paxCount-1))}/>
            <div>
                {paxCount}
                {paxCount === 1 ? " Guest" : " Guests"}
            </div>
            <Plus callback={()=>setPaxCount(++paxCount)}/>
        </div>
    )
}


function CheckAvailabilityBtn ({
    obj,
    setSuccess
}){
    return(
        <button 
            className="CheckAvailability" 
            onClick={()=>{sendData(obj, setSuccess)}}>
            Notify Reefton Hideaway
        </button>
    )
}

const sendData = async (obj, setSuccess) => {
    obj.checkInDate = obj.checkInDate.format('DD/MM/YYYY');
    obj.checkOutDate = obj.checkOutDate.format('DD/MM/YYYY');
    obj.name = document.getElementById('input-name').value;
    obj.email = document.getElementById('input-email').value;
    obj.roomType = document.getElementById('input-roomtype').value;

    console.log('sending data: ', obj);
    setSuccess(true);

    const response = await fetch(SERVER_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(obj)
    })
    console.log(response.text());
    
}