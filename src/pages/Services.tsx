export default function ServicesPage() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col items-start mt-10 w-full max-w-[1680px] max-md:max-w-full">
        <div className="text-7xl font-black tracking-tighter text-zinc-900 max-md:max-w-full max-md:text-4xl">
          Our Services
        </div>
        <div className="mt-6 text-2xl tracking-tighter text-black max-w-[800px] w-[800px] max-md:max-w-full">
          Discover the wide range of services we offer to meet all your
          construction needs.
        </div>
        <div className="flex-wrap justify-center content-start self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center p-6 w-full text-black rounded-xl bg-stone-50 max-w-[610px] max-md:px-5 max-md:mt-1">
                <div className="text-4xl font-black tracking-tighter">
                  Residential Construction
                </div>
                <div className="mt-3 text-2xl tracking-tighter">
                  Building dream homes that exceed expectations.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center p-6 w-full text-black rounded-xl bg-stone-50 max-w-[610px] max-md:px-5 max-md:mt-1">
                <div className="text-4xl font-black tracking-tighter">
                  Commercial Construction
                </div>
                <div className="mt-3 text-2xl tracking-tighter">
                  Creating functional and impressive commercial spaces.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center p-6 w-full text-black rounded-xl bg-stone-50 max-w-[610px] max-md:px-5 max-md:mt-1">
                <div className="text-4xl font-black tracking-tighter">
                  Remodeling
                </div>
                <div className="mt-3 text-2xl tracking-tighter">
                  Transforming your space into something extraordinary.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center p-6 w-full text-black rounded-xl bg-stone-50 max-w-[610px] max-md:px-5 max-md:mt-1">
                <div className="text-4xl font-black tracking-tighter">
                  Landscaping
                </div>
                <div className="mt-3 text-2xl tracking-tighter">
                  Enhancing outdoor spaces with beautiful designs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
