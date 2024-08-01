import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";

export type GlobalValues = {
  navbarVisibility: boolean;
  setNavbarVisibility: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  teamRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
  serviceRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
  homeRef: RefObject<HTMLDivElement>;
};
export const globalContext = createContext<GlobalValues | null>(null);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [navbarVisibility, setNavbarVisibility] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const value = {
    navbarVisibility,
    setNavbarVisibility,
    isMenuOpen,
    setIsMenuOpen,
    teamRef,
    contactRef,
    serviceRef,
    projectRef,
    homeRef,
  };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export const useGlobal = () => useContext(globalContext);
