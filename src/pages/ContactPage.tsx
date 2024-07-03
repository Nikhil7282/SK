export default function ContactPage() {
  return (
    <div className="flex flex-wrap justify-center content-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-10 w-full max-w-[1680px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-2xl tracking-tighter max-md:mt-10 max-md:max-w-full">
              <div className="text-7xl font-black tracking-tighter text-zinc-900 max-md:max-w-full max-md:text-4xl">
                Contact Us
              </div>
              <div className="flex flex-wrap gap-5 content-start mt-6 text-black">
                <div className="flex flex-col flex-1 self-start">
                  <div className="font-bold">Phone</div>
                  <div className="mt-1">+1 123-456-7890</div>
                </div>
                <div className="flex flex-col flex-1 whitespace-nowrap">
                  <div className="font-bold">Email</div>
                  <div className="mt-1">info@constructioncompany.com</div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="font-bold">Address</div>
                  <div className="mt-1">123 Main Street, City, State, Zip</div>
                </div>
              </div>
              <div className="justify-center self-start p-6 mt-16 font-bold text-center text-white whitespace-nowrap rounded-xl bg-zinc-900 max-md:px-5 max-md:mt-10">
                Submit
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-12 py-12 w-full text-black rounded-3xl bg-stone-50 max-w-[816px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl font-black tracking-tighter max-md:max-w-full max-md:text-4xl">
                Get in Touch
              </div>
              <div className="flex gap-2.5 mt-6 whitespace-nowrap max-md:flex-wrap">
                <div className="flex flex-col flex-1 py-0.5">
                  <div className="text-base font-medium tracking-widest">
                    Name
                  </div>
                  <div className="justify-center items-start px-6 py-6 mt-3.5 text-xl tracking-tighter bg-white rounded-xl max-md:px-5">
                    John
                  </div>
                </div>
                <div className="flex flex-col flex-1 py-0.5">
                  <div className="text-base font-medium tracking-widest">
                    Surname
                  </div>
                  <div className="justify-center items-start px-6 py-6 mt-3.5 text-xl tracking-tighter bg-white rounded-xl max-md:px-5">
                    Doe
                  </div>
                </div>
              </div>
              <div className="mt-7 text-base font-medium tracking-widest max-md:max-w-full">
                Mail
              </div>
              <div className="justify-center items-start px-6 py-5 mt-3.5 text-xl tracking-tighter whitespace-nowrap bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                johndoe@mail.net
              </div>
              <div className="mt-7 text-base font-medium tracking-widest max-md:max-w-full">
                Address
              </div>
              <div className="justify-center items-start px-6 py-5 mt-3.5 text-xl tracking-tighter bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                Capitol, WA
              </div>
              <div className="mt-7 text-base font-medium tracking-widest max-md:max-w-full">
                Description
              </div>
              <div className="shrink-0 mt-2.5 bg-white rounded-xl h-[156px] max-md:max-w-full" />
              <div className="justify-center p-6 mt-6 text-2xl font-bold tracking-tighter text-center text-white whitespace-nowrap bg-black rounded-xl max-md:px-5 max-md:max-w-full">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
