"use client";
import Calendar from "react-calendar";
import { useState } from "react";
import Image from "next/image";

import "react-calendar/dist/Calendar.css";

// TEMPORARY DATA
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className=" bg-white rounded-xl pb-4 ">
      <Calendar
        className="w-full bg-white rounded-xl p-4"
        onChange={onChange}
        value={value}
      />
      <div className=" p-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="add" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div key={event.id} className=" mx-4  p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-outSky even:border-t-outPurple">
            <div className="flex items-center justify-between">
            <h1 className="text-sm font-medium text-gray-600">{event.title}</h1>
            <span className="text-xm text-gray-300">{event.time}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{event.description}</p>
            
          </div>
        ))}
    </div>
    </div>
  );
};
export default EventCalendar;
