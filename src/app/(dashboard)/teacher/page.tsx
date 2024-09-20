import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar"
import "react-big-calendar/lib/css/react-big-calendar.css"

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">

      <div className="h-full bg-white p-4 rounded-xl">
        <h1 className="text-xl font-semibold my-4">Schedule</h1>
        <BigCalendar />
      </div>

      </div>


      {/* MIDDLE */}




      {/* RIGHT */}

      <div className="w-full xl:w-1/3 flex flex-col gap-4"> 
      
      <Announcement />
      
      </div>
     



    </div>
  )
}

export default TeacherPage