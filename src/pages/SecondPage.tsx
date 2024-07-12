import Reveal from "../components/Reveal";

export default function SecondPage() {
  return (
    <div className="w-full h-screen  bg-zinc-900 flex flex-col md:flex-row gap-4 p-4">
      <div className="flex-1 bg-zinc-800 p-4 text-white text-center ">
        <Reveal>
          <div className="text-4xl md:text-7xl font-black tracking-tighter text-zinc-100 max-w-full">
            Building Dreams, One Project at a Time{" "}
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-6 text-white max-w-full">
            Experience the excellence of our construction company, trusted by
            clients worldwide.{" "}
          </div>
        </Reveal>
        <Reveal>
          <div className="self-start p-5 md:p-6 mt-10 lg:mt-16 font-bold text-center bg-white rounded-xl text-stone-950">
            Learn More
          </div>
        </Reveal>
      </div>
      <div className="flex-1 bg-zinc-500 p-4 text-white text-center">Div 2</div>
    </div>
  );
}
