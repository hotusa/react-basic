import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-date-picker";
import './calendar.css'

export default function TabCalendar() {

    const [date, setDate] = useState(new Date())

    const onChange = date => {
        setDate(date)
    }

    return (
        <>
            <DatePicker
                className={"myCalendar"}
                onChange={onChange}
                value={date}
                clearIcon={null}
                format={"dd/MM/y"}
                dayPlaceholder={"dd"}
                monthPlaceholder={"mm"}
                yearPlaceholder={"yyyy"}
                calendarIcon={<FontAwesomeIcon icon={faCalendarAlt}/>}
            />

            <br/>
            <small>{date ? date.toString() : ''}</small>

            <br/><br/>
            <p>Usa la clase "myCalendar-sm" para hacer un input más pequeño</p>

        </>
    )
}