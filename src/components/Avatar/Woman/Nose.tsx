"use client";
import StoreContext from "@/context/store/context";
import { useContext } from "react";
import { NoseT } from "./props";

interface Props {
   nose: NoseT;
}

export default function Nose({ nose }: Props) {
   const { colors } = useContext(StoreContext);

   switch (nose) {
      case 0:
         return (
            <path
               d='M139.345 212.129L139.843 227.163C139.945 230.213 139.107 233.482 136.399 234.889C131.408 237.481 124.752 236.011 121 230.478'
               stroke={colors.base}
               strokeWidth='3'
            />
         );
      case 1:
         return (
            <path
               d='M140 191.129V226.59C140 230.451 138.293 234.535 134.464 235.023C128.617 235.767 121.63 232.523 117 228.075'
               stroke={colors.base}
               strokeWidth='3'
            />
         );
      case 2:
         return (
            <path
               d='M133 183.129L138.553 206.888C138.851 208.161 139.168 209.428 139.456 210.704C140.119 213.647 141.324 219.667 141.799 226.414C142.045 229.907 140.674 233.609 137.328 234.639C131.181 236.532 123.249 233.853 117 230.478'
               stroke={colors.base}
               strokeWidth='3'
            />
         );
   }
}
