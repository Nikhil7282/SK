import Photo from "../assets/Photo.png";
import { FaGraduationCap, FaPeopleCarry } from "react-icons/fa";
import { AiFillVideoCamera } from "react-icons/ai";
import Reveal from "../components/Reveal";
import { useGlobal } from "../context/GlobalContext";

const TeamPage = () => {
  const global = useGlobal();

  return (
    <section className="w-full bg-white p-5" ref={global?.teamRef}>
      <div className="md:max-w-[1000px] m-auto grid md:grid-cols-2 max-w-[350px]">
        <div className="justify-center items-center mx-10">
          <Reveal>
            <img
              src={Photo}
              alt="hero"
              className="md:order-last m-auto order-first"
            />
          </Reveal>
        </div>
        <div className="flex flex-col justify-start gap-4">
          <Reveal>
            <h1 className="md:leading-[42px] py-2 text-3xl font-semibold">
              About <span className="text-zinc-900">Us</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className=" text-zinc-900 text-2x1">
              Building excellence with precision, trust, quality, innovation,
              sustainability, reliability, and craftsmanship.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="py-6 flex">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <Reveal>
                  <FaGraduationCap size={30} />
                </Reveal>
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">100 +</h1>
                <p className="text-[#60737a]">Instructors</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <Reveal>
                  <AiFillVideoCamera size={30} />
                </Reveal>
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">10,000 +</h1>
                <p className="text-[#60737a]">Videos</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <FaPeopleCarry size={30} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">3000 +</h1>
                <p className="text-[#60737a]">Users</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <FaGraduationCap size={30} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">300 +</h1>
                <p className="text-[#60737a]">Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
