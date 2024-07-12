import Reveal from "../components/Reveal";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col md:flex-row gap-4 p-4">
      <div className="flex-1 bg-zinc-800 p-4 text-white text-center flex flex-col items-center justify-center">
        <div className="text-4xl md:text-7xl font-black tracking-tighter text-zinc-100 max-w-full">
          <Reveal>
            <>Welcome to our Construction Company</>
          </Reveal>
        </div>
        <div className="mt-6 text-white max-w-full">
          <Reveal>
            <>Building dreams, one project at a time.</>
          </Reveal>
        </div>
        <div className="self-start p-5 md:p-6 mt-10 lg:mt-16 font-bold text-center bg-white rounded-xl text-stone-950 ml-auto mr-auto cursor-pointer">
          <Reveal>
            <>Contact Us</>
          </Reveal>
        </div>
      </div>
      <div className="flex-1 bg-zinc-100 p-4  text-center">
        <Reveal>
          <>ILLUSTRATION ACTIVE PART</>
        </Reveal>
      </div>
    </div>
  );
}
