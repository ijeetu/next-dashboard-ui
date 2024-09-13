"use client"
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className=''>
        

        <Calendar className='w-full bg-white rounded-xl p-4' onChange={onChange} value={value} />
    </div>
  )
}

export default EventCalendar