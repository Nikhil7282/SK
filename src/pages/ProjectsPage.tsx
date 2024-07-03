export default function ProjectsPage() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col items-start mt-10 w-full max-w-[1680px] max-md:max-w-full">
        <div className="text-7xl font-black tracking-tighter text-zinc-900 max-md:max-w-full max-md:text-4xl">
          Our Portfolio
        </div>
        <div className="mt-3 text-2xl tracking-tighter text-black w-[816px] max-md:max-w-full">
          Take a look at some of our completed projects that showcase our
          quality and craftsmanship.
        </div>
        <div className="flex flex-wrap justify-center content-center items-center self-stretch px-16 mt-12 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-w-full w-[1257px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-5 pt-5 pb-10 w-full text-xl font-black tracking-tighter text-black rounded-3xl bg-stone-50 max-w-[411px] max-md:mt-3">
                  <div className="justify-center items-center px-16 pt-36 pb-28 whitespace-nowrap bg-white rounded-3xl max-md:px-5 max-md:pt-10">
                    PHOTO
                  </div>
                  <div className="mt-6 text-3xl tracking-tighter">
                    Project 1
                  </div>
                  <div className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla facilisi. Sed euismod, nunc a aliquam aliquet, mi nunc
                    tincidunt nunc, id lacinia nunc nunc nec nunc.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-5 pt-5 pb-10 w-full text-xl font-black tracking-tighter text-black rounded-3xl bg-stone-50 max-w-[411px] max-md:mt-3">
                  <div className="justify-center items-center px-16 pt-36 pb-28 whitespace-nowrap bg-white rounded-3xl max-md:px-5 max-md:pt-10">
                    PHOTO
                  </div>
                  <div className="mt-6 text-3xl tracking-tighter">
                    Project 2
                  </div>
                  <div className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla facilisi. Sed euismod, nunc a aliquam aliquet, mi nunc
                    tincidunt nunc, id lacinia nunc nunc nec nunc.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-5 pt-5 pb-10 w-full text-xl font-black tracking-tighter text-black rounded-3xl bg-stone-50 max-w-[411px] max-md:mt-3">
                  <div className="justify-center items-center px-16 pt-36 pb-28 whitespace-nowrap bg-white rounded-3xl max-md:px-5 max-md:pt-10">
                    PHOTO
                  </div>
                  <div className="mt-6 text-3xl tracking-tighter">
                    Project 3
                  </div>
                  <div className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla facilisi. Sed euismod, nunc a aliquam aliquet, mi nunc
                    tincidunt nunc, id lacinia nunc nunc nec nunc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
