import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    
      <div className="h-screen flex">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
      <Link href="/"> 
      {/* Display logo on medium and larger screens */}
      <Image
        className="hidden md:hidden lg:block xl:block p-4"
        src="/logo.svg"
        alt="logo"
        width={150}
        height={150}
      />
      {/* Display icon on small screens */}
      <Image
        className="block lg:hidden xl:hidden md:block p-4"
        src="/icon.svg"
        alt="icon"
        width={100}
        height={100}
      />
      {/* <span className="hidden lg:block">SchooLama</span> */}

      </Link>

      <Menu />



        </div>

        {/* RIGHT */}
        <div className="w-[86%] md:W-[92%] lg:w-[84%] xl:w[86%] bg-gray-100 overflow-scroll">
        <Navbar />
        </div>
        {children}
     


      </div>
      
    )    
  }