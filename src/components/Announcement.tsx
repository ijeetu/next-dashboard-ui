import { Space_Mono } from "next/font/google"

const Announcement = () => {
  return (
    <div className='bg-white rounded-xl pb-4'>
        <div className=" p-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4">
                <div className=" bg-outSkyLight p-4 bg mx-4 rounded-md ">
                    <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-600">Lorem ipsum dolor sit amet.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1 ">12-9-2024</span>
                    </div>
                    <p className="text-xs mt-1 text-gray-400">Lorem ipsum dolor sit amet, consecteturdantium accusamus ut et perspiciatis quisquam maxime quam itaque eos eius autem delectus?</p>
                    </div>

                    <div className=" bg-outPurpleLight p-4 bg mx-4 rounded-md ">
                    <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-600">Lorem ipsum dolor sit amet.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1 ">12-9-2024</span>
                    </div>
                    <p className="text-xs mt-1 text-gray-400">Lorem ipsum dolor sit amet, consecteturdantium accusamus ut et perspiciatis quisquam maxime quam itaque eos eius autem delectus?</p>
                    </div>

                    <div className=" bg-outYellowLight p-4 bg mx-4 rounded-md ">
                    <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-600">Lorem ipsum dolor sit amet.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1 ">12-9-2024</span>
                    </div>
                    <p className="text-xs mt-1 text-gray-400">Lorem ipsum dolor sit amet, consecteturdantium accusamus ut et perspiciatis quisquam maxime quam itaque eos eius autem delectus?</p>
                    </div>
                    
                    </div>
                    
    </div>
  )
}

export default Announcement