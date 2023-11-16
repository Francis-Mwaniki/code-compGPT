import Link from "next/link";
import Typing from "./Typing";
import Image from "next/image";
export default function Hero() {
  const introduction = `Welcome to Desishub Coding School! \n If you want to improve your coding skills, \n
  enroll in our courses today and embark on \n
  a journey of learning and growth.`;
  return (
    <div className="rounded-lg px-5 select-none    shadow-none">
       
     
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-start">
      <div className=" p-2 pb-20 md:pb-10 flex flex-col justify-center items-start lg:pt-10 xl:max-w-xl">
        <h1 className="text-[1.8rem] sm:text-4xl lg:text-[3rem] md:font-extrabold lg:leading-[3.2rem] font-bold bg-gradient-to-r from-blue-800 via-neutral-100 to-pink-600 bg-clip-text text-transparent  leading-8 md:leading-10">
          <span className="text-pink-500">Learning</span> to{" "}
          <span className="text-pink-500">Code</span> has never been easier.
        </h1>
        <p className="leading-relaxed text-gray-300 text-[1rem] sm:text-lg my-5 md:my-7 md:text-xl sm:pl-4">
          All the <strong className="text-white mx-1">skills</strong> that
            you need to become a{" "} <strong className="text-white mx-1">professional</strong> developer
        </p>
        <div className="flex justify-center items-center w-full max-w-sm  gap-3 mx-auto sm:space-y-4 md:space-y-0">
          <Link
            href="#"
            className="  text-center flex button-85 justify-center items-center  justify-self-center w-full py-4"
          >
            Join Us Today
          </Link>
          
        </div>
      </div>
      {/* Card */}
      <div className=" bg-gradient-to-r from-blue-750 to-indigo-900 rounded-lg select-none border border-blue-850 relative ">
        {/* top line */}
        <div className="flex flex-row">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
          <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
        </div>
        {/* 3 dots */}
        <div className="px-8 py-5 bg-gradient-to-r from-slate-950 via-gray-950 to-slate-950">
          <div className="flex flex-row space-x-2">
            <div className="rounded-full bg-red-400 w-3 h-3"></div>
            <div className="rounded-full bg-orange-400 w-3 h-3"></div>
            <div className="rounded-full bg-green-200 w-3 h-3"></div>
          </div>
        </div>
        {/* Content */}
        <div className="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden min-h-[280px] bg-gradient-to-r from-slate-950 via-gray-950 to-slate-950">
          <code className="font-mono text-xl">
            <Typing />
          </code>
        </div>
      </div>
    </div>
    </div>
  );
}