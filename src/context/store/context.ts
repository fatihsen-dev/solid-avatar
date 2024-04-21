import { createContext } from "react";

interface Store {
   colors: {
      base: string;
      bg: string;
      secondary: string;
   };
   styles: {
      borderRadius: string;
      width: string;
      height: string;
      viewBox: string;
   };
}

export const store: Store = {
   colors: {
      base: "#111",
      bg: "#fff",
      secondary: "#cecece",
   },
   styles: {
      borderRadius: "0.5rem",
      width: "100%",
      height: "100%",
      viewBox: "-70 -35 400 400",
   },
};

const StoreContext = createContext(store);

export default StoreContext;
