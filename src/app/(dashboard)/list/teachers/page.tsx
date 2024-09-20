import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"
const TeacherList = () => {
  return (
    <div className="bg-white rounded-xl p-4 m-4 flex-1">
      

      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-outSky text-white" >
              <Image src="/filter.svg" alt="search" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-outSky text-white" >
              <Image src="/sort.svg" alt="search" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-outSky text-white" >
              <Image src="/plus.svg" alt="search" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>


      {/* LIST */}


{/* PAGINATION */}
<Pagination />


    </div>
  )
}

export default TeacherList