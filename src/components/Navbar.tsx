import Logo from "../assets/Logo.png";
import SlideTabs from "./SlideTabs";
import { useGlobal } from "../context/GlobalContext";

const Navbar = () => {
  const global = useGlobal();
  return (
    <header
      className={`fixed top-2 z-30 w-full md:top-6 ${
        global?.navbarVisibility ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 backdrop-blur-0">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center ">
            <img src={Logo} style={{ height: "45px" }} />
          </div>
          <div className="flex flex-1">
            <SlideTabs />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
