import { Dispatch, MouseEventHandler, SetStateAction, useRef } from "react";

type Props = {
  children: String;
  onClick: MouseEventHandler<HTMLLIElement>;
  setPosition: Dispatch<
    SetStateAction<{ width: number; opacity: number; left: number }>
  >;
};

function Tabs({ children, onClick, setPosition }: Props) {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs  text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      onClick={onClick}
    >
      {children}
    </li>
  );
}

export default Tabs;
