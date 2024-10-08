import Image from "next/image"
const Navbar = () => {
  return (
    <div className=' flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
      </div>
{/* ICON & USER */}

<div className="flex items-center gap-6 justify-end">
  <div className=" rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
    <Image src="/messages.svg" alt="user" width={40} height={40} />
  </div>
  <div className=" rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
    <Image src="/mic-vocal.svg" alt="annancement" width={40} height={40} />
    <div className="w-5 h-5 bg-purple-500 rounded-full text-xs flex items-center justify-center absolute -top-3 -right-3 text-white">1</div>
  </div>
  <div className="flex flex-col">
    <span className="text-xs leading-3 font-medium">John Doe</span>
    <span className="text-[10px] text-gray-500 text-right">Admin</span>
  </div>
  <Image src="/avatar.png" alt="profile" width={40} height={40} className="rounded-full" />
</div>



    </div>
  )
}

export default Navbar