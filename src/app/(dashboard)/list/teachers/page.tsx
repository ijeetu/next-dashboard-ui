import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";

import Image from "next/image";

const columns = [
  {
    header: "info",
    accessor: "info",
  },
  {
    header: "TeacherID",
    accessor: "teacherID",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: " classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const TeacherList = () => {
  return (
    <div className="bg-white rounded-xl p-4 m-4 flex-1">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-outSky text-white">
              <Image src="/filter.svg" alt="search" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-outSky text-white">
              <Image src="/sort.svg" alt="search" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-outSky text-white">
              <Image src="/plus.svg" alt="search" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default TeacherList;
