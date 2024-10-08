"use client";
import React from "react";
import Image from "next/image";


import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 80,
    absent: 30,
  },
  {
    name: "Tue",
    present: 50,
    absent: 60,
  },
  {
    name: "Wed",
    present: 75,
    absent: 80,
  },
  {
    name: "Thu",
    present: 40,
    absent: 30,
  },
  {
    name: "Fri",
    present: 70,
    absent: 80,
  },
  {
    name: "Sat",
    present: 30,
    absent: 20,
  },
  {
    name: "Sun",
    present: 10,
    absent: 10,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
        </div>

        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
            <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
            <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}/>
            <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}} />
            <Legend iconType="circle" align="left" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              radius={[10, 10, 0, 0]}
             
            />
            <Bar
              dataKey="absent"
              fill="#c3ebfa"
              radius={[10, 10, 0, 0]}
              
            />
          </BarChart>
        </ResponsiveContainer>
      
    </div>
  );
};

export default AttendanceChart;
