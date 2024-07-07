import Reveal from "../components/Reveal";
import { FaHome, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Form from "../components/Form";
import { useGlobal } from "../context/GlobalContext";

const ContactPage = () => {
  const global = useGlobal();
  return (
    <div
      className="w-full h-screen bg-zinc-900 flex flex-col md:flex-row gap-4 p-4"
      ref={global?.contactRef}
    >
      <div className="flex-2 bg-zinc-800 p-4 text-white text-center flex flex-col justify-center items-start">
        <div className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-100 max-w-full">
          <Reveal>
            <div className="m-0 mb-10">Office</div>
          </Reveal>
        </div>
        <div>
          <ul>
            <Reveal>
              <li className="flex items-center gap-2 text-l font-bold p-3">
                <FaHome />
                10/378,Ozhalapathy,Palakkad
              </li>
            </Reveal>
            <Reveal>
              <li className="flex items-center gap-2 text-l font-bold p-3">
                <FaPhoneAlt />
                1234567890
              </li>
            </Reveal>
            <Reveal>
              <li className="flex items-center gap-2 text-l font-bold p-3">
                <MdOutlineMailOutline />
                sheeni@gmail.com
              </li>
            </Reveal>
            <Reveal>
              <li className="flex items-center gap-2 text-l font-bold p-3">
                <FaRegClock />
                Mon-Fri,9:00am -5:00pm{" "}
              </li>
            </Reveal>
          </ul>
        </div>
      </div>
      <div className="flex-1 bg-zinc-500 p-4 text-white text-center">
        <Form />
      </div>
    </div>
  );
};

export default ContactPage;
