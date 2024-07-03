export default function ClientsPage() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col mt-10 w-full max-w-[1680px] max-md:max-w-full">
        <div className="self-start text-7xl font-black tracking-tighter text-zinc-900 max-md:max-w-full max-md:text-4xl">
          What Our Clients Say
        </div>
        <div className="mt-3 text-2xl tracking-tighter text-black w-[816px] max-md:max-w-full">
          Read what our satisfied clients have to say about our professionalism,
          reliability, and customer satisfaction.
        </div>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-4 p-4 w-full text-black rounded-3xl bg-stone-50 max-md:flex-wrap max-md:mt-3">
                <div className="justify-center items-center self-start px-3.5 w-16 h-16 text-xs font-black tracking-tight whitespace-nowrap bg-black rounded-[60px]">
                  PHOTO
                </div>
                <div className="flex flex-col flex-1 justify-center pt-1.5 text-xl tracking-tighter max-md:max-w-full">
                  <div className="font-black max-md:max-w-full">John Smith</div>
                  <div className="mt-1 max-md:max-w-full">
                    I am extremely impressed with the professionalism and
                    reliability of this construction company. They completed my
                    project on time and within budget, and the quality of their
                    work exceeded my expectations. I highly recommend them to
                    anyone in need of construction services.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-4 p-4 w-full text-black rounded-3xl bg-stone-50 max-md:flex-wrap max-md:mt-3">
                <div className="justify-center items-center self-start px-3.5 w-16 h-16 text-xs font-black tracking-tight whitespace-nowrap bg-black rounded-[60px]">
                  PHOTO
                </div>
                <div className="flex flex-col flex-1 justify-center pt-1.5 text-xl tracking-tighter max-md:max-w-full">
                  <div className="font-black max-md:max-w-full">
                    Emily Johnson
                  </div>
                  <div className="mt-1 max-md:max-w-full">
                    I had a great experience working with this construction
                    company. They were attentive to my needs and provided
                    excellent customer service throughout the entire project.
                    The team was skilled and efficient, and the end result was
                    exactly what I envisioned. I would definitely hire them
                    again for future construction projects.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-4 p-4 w-full text-black rounded-3xl bg-stone-50 max-md:flex-wrap max-md:mt-3">
                <div className="justify-center items-center self-start px-3.5 w-16 h-16 text-xs font-black tracking-tight whitespace-nowrap bg-black rounded-[60px]">
                  PHOTO
                </div>
                <div className="flex flex-col flex-1 justify-center pt-1.5 text-xl tracking-tighter max-md:max-w-full">
                  <div className="font-black max-md:max-w-full">
                    Michael Williams
                  </div>
                  <div className="mt-1 max-md:max-w-full">
                    I couldn't be happier with the construction services
                    provided by this company. From start to finish, they
                    demonstrated professionalism and attention to detail. The
                    team was knowledgeable, skilled, and completed the project
                    on time. I highly recommend them for any construction needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-3 max-w-full w-[1132px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex gap-4 p-4 w-full text-black rounded-3xl bg-stone-50 max-md:flex-wrap max-md:mt-3">
                <div className="justify-center items-center self-start px-3.5 w-16 h-16 text-xs font-black tracking-tight whitespace-nowrap bg-black rounded-[60px]">
                  PHOTO
                </div>
                <div className="flex flex-col flex-1 justify-center pt-1.5 text-xl tracking-tighter max-md:max-w-full">
                  <div className="font-black max-md:max-w-full">
                    Sophia Brown
                  </div>
                  <div className="mt-1 max-md:max-w-full">
                    Working with this construction company was a pleasure. They
                    were reliable, communicative, and delivered exceptional
                    results. The team went above and beyond to ensure that my
                    project was completed to my satisfaction. I would definitely
                    choose them again for future construction projects.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-4 p-4 w-full text-black rounded-3xl bg-stone-50 max-md:flex-wrap max-md:mt-3">
                <div className="justify-center items-center self-start px-3.5 w-16 h-16 text-xs font-black tracking-tight whitespace-nowrap bg-black rounded-[60px]">
                  PHOTO
                </div>
                <div className="flex flex-col flex-1 justify-center pt-1.5 text-xl tracking-tighter max-md:max-w-full">
                  <div className="font-black max-md:max-w-full">
                    Daniel Davis
                  </div>
                  <div className="mt-1 max-md:max-w-full">
                    I am extremely satisfied with the construction services
                    provided by this company. They were professional, reliable,
                    and delivered high-quality work. The team was responsive to
                    my needs and completed the project within the agreed
                    timeframe. I would highly recommend them to anyone in need
                    of construction services.
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
