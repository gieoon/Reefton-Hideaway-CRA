import React, { useEffect } from 'react';
import './datePicker.scss';

// Make your own here: https://eternicode.github.io/bootstrap-datepicker



export default function DatePicker({}){

    useEffect(()=>{
        var dateSelect     = document.getElementById('flight-datepicker');
        var dateDepart     = document.getElementById('start-date');
        var dateReturn     = document.getElementById('end-date');
        var spanDepart     = document.getElementsByClassName('date-depart')[0];
        var spanReturn     = document.getElementsByClassName('date-return')[0];
        var spanDateFormat = 'ddd, MMMM D yyyy';
        console.log(dateSelect);
        // This is a Bootstrap/jquery function to implement.
        /*dateSelect.datepicker({
        autoclose: true,
        format: "mm/dd",
        maxViewMode: 0,
        startDate: "now"
        }).on('change', function() {
            console.log(dateDepart, dateReturn);
        var start = Date.format(dateDepart.datepicker('getDate'), spanDateFormat);
        var end = Date.format(dateReturn.datepicker('getDate'), spanDateFormat);
        spanDepart.text(start);
        spanReturn.text(end);
        });
        */
    }, []);

    return(
        <div className="DatePicker">
            <h1>
                <span className="fontawesome-plane"></span> Book your trip
            </h1>
            <h2>Select your travel dates below</h2>
            <div className="input-daterange input-group" id="flight-datepicker">
                <div className="form-item">
                    <label>Check in</label>
                    <span className="fontawesome-calendar"></span>
                    <input className="input-sm form-control" type="text" id="start-date" name="start" placeholder="" data-date-format="DD, MM d"/>
                    <span className="date-text date-depart"></span>
                </div>
                <div className="form-item">
                    <label>Check out</label>
                    <span className="fontawesome-calendar"></span>
                    <input className="input-sm form-control" type="text" id="end-date" name="end" placeholder="" data-date-format="DD, MM d"/>
                    <span className="date-text date-return"></span>
                </div>
            </div>
        </div>
    );
}