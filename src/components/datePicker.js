import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./datePicker.scss";

function DatePicker({
  startDate,
  endDate,
  updateDates,
}) {
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    console.log('start: ', startDate, "endDate: ", endDate);
    // setStartDate(startDate);
    // setEndDate(endDate);
    updateDates(startDate, endDate);
  };
  return (
    <div className="DatePicker_custom">
      <DateRangePicker
        startDate={startDate}
        startDateId="tata-start-date"
        endDate={endDate}
        endDateId="tata-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}

        startDatePlaceholderText={"Checking in"}
        endDatePlaceholderText={"Checking out"}
        hideKeyboardShortcutsPanel={true}
        displayFormat={"MMM DD ddd"}
        // anchorDirection={"ANCHOR_LEFT"}
        // orientation={"VERTICAL_ORIENTATION"}
        // horizontalMargin={500}
      />
    </div>
  );
}

export default DatePicker;
