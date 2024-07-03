import { forwardRef } from "react";
import Logo from "../assets/Logo.png";

type Props = {
  isVisible: boolean;
};

const Navbar = forwardRef<HTMLDivElement, Props>(({ isVisible }, ref) => {
  return (
    <header
      className={`fixed top-2 z-30 w-full md:top-6 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 backdrop-blur-0">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center ">
            <img src={Logo} style={{ height: "45px" }} />
          </div>
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <button
                onClick={() => {
                  if (ref && "current" in ref && ref.current) {
                    ref.current.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 "
              >
                Team
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 "
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});

export default Navbar;
