import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";

import Link from "next/link";

import Image from "next/image";
import { role, classesData } from "@/lib/data";

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Names",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
  },
  {
    header:"Grade",
    accessor:"grade",
    className: "hidden md:table-cell",
  },
  {
    header:"Supervisor",
    accessor:"supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const ClassList = () => {
  const renderRow = (item: Class) => (
    <tr key={item.id} className="hover:bg-outPurpleLight border-b border-gray-200 even:bg-slate-50 text-sm">
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-outSky text-white">
              <Image src="/view.png" alt="edit" width={16} height={16} />
            </button>
          </Link>
          {role === "teacher" && <button className="w-7 h-7 flex items-center justify-center rounded-full bg-outPurple text-white">
              <Image src="/delete.png" alt="edit" width={16} height={16} />
            </button>}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white rounded-xl p-4 m-4 flex-1">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-outSky text-white">
              <Image src="/filter.svg" alt="search" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-outSky text-white">
              <Image src="/sort.svg" alt="search" width={16} height={16} />
            </button>
            {role === "admin" && (<button className="w-8 h-8 flex items-center justify-center rounded-full bg-outSky text-white">
                <Image src="/plus.svg" alt="search" width={16} height={16} />
            </button>)}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns } renderRow={renderRow} data={classesData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );

};
export default ClassList;