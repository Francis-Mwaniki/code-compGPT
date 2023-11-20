 import Image from "next/image";
const Banner = () => {
    return (
      <div className=" text-white w-full sm:p-24 rounded-lg text-center sm:mt-32 ">
         <div className="relative">
        <Image
          src="grid.svg"
          alt="background"
          width={1572}
          height={795}
          className="absolute -top-28 -z-10"
        />
      </div>
        <h2 className="text-3xl font-bold mb-4">
            Start Using Code Preview Today
        </h2>
       <div className="flex flex-col gap-y-3 tracking-wide leading-4 font-light justify-center items-center">

       <p className="text-lg">
            Code Preview is a free tool that allows you to preview your code in real time.
        </p>
       
        <p className="text-lg">
            You can use ChatGPT generator to generate code for your website.
            </p>
             <p className="text-lg">
            It&apos;s easy to use and it&apos;s free.
        </p>
       </div>
        <div className="flex justify-center mt-8 items-center w-full max-w-md mx-auto">
          <button className="button-85 m-2 flex justify-center justify-self-center w-full items-center py-4"  onClick={() => {
        window.location.href = "/sign-in"
      }}>Get Started</button>
         
          </div>
      </div>
    );
  };
  
  export default Banner;
  