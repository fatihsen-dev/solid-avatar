"use client";
import StoreContext from "@/context/store/context";
import { useContext } from "react";
import { ChinT } from "./props";

interface Props {
   chin: ChinT;
}

export default function Chin({ chin }: Props) {
   const { colors } = useContext(StoreContext);

   switch (chin) {
      case 0:
         return <></>;
      case 1:
         return (
            <path
               d='M119 288.629C123.026 281.962 131.974 281.962 136 288.629'
               stroke='#2B2B2B'
               strokeWidth='3'
            />
         );
      case 2:
         return (
            <ellipse
               cx='127.5'
               cy='284.629'
               rx='8.5'
               ry='4.5'
               stroke='#2B2B2B'
               strokeWidth='3'
            />
         );
   }
}
