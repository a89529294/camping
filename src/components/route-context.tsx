"use client";
import { usePathname } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Visibility = "hidden" | "showButton" | "visible";
type Dir = "ltr" | "rtl";

type ContextValue = {
  visibility: Visibility;
  setVisibility: Dispatch<SetStateAction<Visibility>>;
  dir: Dir;
  setDir: Dispatch<SetStateAction<Dir>>;
};

const routeContext = createContext<ContextValue>({} as ContextValue);

export function RouteContextProvider({ children }: { children: ReactNode }) {
  const [visibility, setVisibility] = useState<Visibility>("hidden");
  const [dir, setDir] = useState<Dir>("rtl");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") setVisibility("hidden");
    else setVisibility("visible");
  }, [pathname]);

  return (
    <routeContext.Provider value={{ visibility, setVisibility, dir, setDir }}>
      {children}
    </routeContext.Provider>
  );
}

export const useRouteContext = () => useContext(routeContext);
