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
            <>
               <path
                  d='M114 288.275C120.395 281.609 134.605 281.609 141 288.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path d='M127.5 297.275V288.275' stroke={colors.base} strokeWidth='3' />
            </>
         );
      case 2:
         return (
            <ellipse
               cx='127.5'
               cy='284.775'
               rx='8.5'
               ry='4.5'
               stroke={colors.base}
               strokeWidth='3'
            />
         );
      case 3:
         return <path d='M127.5 297.275V288.275' stroke={colors.base} strokeWidth='3' />;
   }
}
