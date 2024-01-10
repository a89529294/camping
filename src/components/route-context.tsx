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

type ContextValue = {
  visibility: Visibility;
  setVisibility: Dispatch<SetStateAction<Visibility>>;
};

const routeContext = createContext<ContextValue>({} as ContextValue);

export function RouteContextProvider({ children }: { children: ReactNode }) {
  const [visibility, setVisibility] = useState<Visibility>("hidden");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") setVisibility("hidden");
    else setVisibility("visible");
  }, [pathname]);

  return (
    <routeContext.Provider value={{ visibility, setVisibility }}>
      {children}
    </routeContext.Provider>
  );
}

export const useRouteContext = () => useContext(routeContext);
