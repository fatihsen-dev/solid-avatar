"use client";
import StoreContext, { store } from "./context";

interface Props {
   children: React.ReactNode;
}

export default function StoreProvider({ children }: Props) {
   return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
