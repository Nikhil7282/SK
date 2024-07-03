export default function TeamPage() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col items-start mt-10 w-full max-w-[1680px] max-md:max-w-full">
        <div className="text-7xl font-black tracking-tighter text-zinc-900 max-md:max-w-full max-md:text-4xl">
          Meet Our Team
        </div>
        <div className="mt-3 text-2xl tracking-tighter text-black w-[816px] max-md:max-w-full">
          At XYZ Construction, we have assembled a team of highly skilled
          professionals who are dedicated to delivering exceptional results. Our
          team consists of architects, engineers, and project managers who bring
          their expertise and passion to every project. Get to know our key team
          members below:
        </div>
        <div className="flex flex-wrap justify-center content-center items-center self-stretch px-16 mt-12 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-w-full w-[1257px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center self-stretch px-5 pt-5 pb-10 my-auto w-full text-xl font-black tracking-tighter text-black rounded-3xl bg-stone-50 max-w-[411px] max-md:mt-6">
                  <div className="justify-center items-center px-16 pt-36 pb-28 whitespace-nowrap bg-white rounded-3xl max-md:px-5 max-md:pt-10">
                    PHOTO
                  </div>
                  <div className="mt-6 text-3xl tracking-tighter">
                    John Smith
                  </div>
                  <div className="mt-3">
                    John is a licensed architect with over 10 years of
                    experience in the construction industry. He specializes in
                    designing innovative and sustainable buildings that meet the
                    unique needs of our clients.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center self-stretch px-5 pt-5 pb-10 my-auto w-full text-xl font-black tracking-tighter text-black rounded-3xl bg-stone-50 max-w-[411px] max-md:mt-6">
                  <div className="justify-center items-center px-16 pt-36 pb-28 whitespace-nowrap bg-white rounded-3xl max-md:px-5 max-md:pt-10">
                    PHOTO
                  </div>
                  <div className="mt-6 text-3xl tracking-tighter">
                    Emily Johnson
                  </div>
                  <div className="mt-3">
                    Emily is a talented engineer who has worked on numerous
                    complex construction projects. Her attention to detail and
                    problem-solving skills ensure that our projects are executed
                    flawlessly.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-5 pt-5 pb-10 w-full text-xl font-black tracking-tighter text-black rounded-3xl bg-stone-50 max-w-[411px] max-md:mt-3">
                  <div className="justify-center items-center px-16 pt-36 pb-28 whitespace-nowrap bg-white rounded-3xl max-md:px-5 max-md:pt-10">
                    PHOTO
                  </div>
                  <div className="mt-6 text-3xl tracking-tighter">
                    Michael Davis
                  </div>
                  <div className="mt-3">
                    Michael is a seasoned project manager with a proven track
                    record of successfully delivering projects on time and
                    within budget. His leadership and organizational skills keep
                    our team on track and ensure client satisfaction.
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
