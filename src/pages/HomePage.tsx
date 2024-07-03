export default function HomePage() {
  return (
    <div className="w-full h-[100vh]">
      <div className="justify-between pl-20 bg-zinc-900 max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {/* <div className="flex flex-col w-6/12 max-md:w-full"> */}
          <div className="flex flex-col self-stretch my-auto text-2xl tracking-tighter max-w-[816px] max-md:mt-10 max-md:max-w-full">
            <div className="text-7xl font-black tracking-tighter text-zinc-100 max-md:text-4xl">
              Welcome to our Construction Company
            </div>
            <div className="mt-6 text-white max-md:max-w-full">
              Building dreams, one project at a time.
            </div>
            <div className="justify-center self-start p-6 mt-16 font-bold text-center bg-white rounded-xl text-stone-950 max-md:px-5 max-md:mt-10">
              Contact Us
            </div>
          </div>
          {/* </div> */}
          <div className="flex flex-col ml-5 w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow justify-center items-center px-16 pb-20 text-3xl font-black tracking-tighter text-center text-white bg-white bg-opacity-10 pt-[468px] max-md:px-5 max-md:pt-10 max-md:mt-10 max-md:max-w-full">
              ILLUSTRATION ACTIVE PART
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
