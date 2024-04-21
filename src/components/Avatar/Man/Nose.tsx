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
               d='M142 210.275L144.465 222.449C145.411 227.121 143.691 232.145 139.076 233.34C130.746 235.496 119.487 233.925 114 228.625'
               stroke={colors.base}
               strokeWidth='3'
            />
         );
      case 1:
         return (
            <path
               d='M140 183.275V226.556C140 230.057 138.679 233.667 135.446 235.011C129.135 237.636 120.924 236.174 116 230.625'
               stroke={colors.base}
               strokeWidth='3'
            />
         );
      case 2:
         return (
            <path
               d='M136 183.275L138.299 193.112C140.758 203.632 142 214.399 142 225.203C142 225.65 142 226.101 142 226.556C142 230.057 140.636 233.699 137.279 234.695C130.313 236.761 120.345 234.051 114 230.625'
               stroke={colors.base}
               strokeWidth='3'
            />
         );
      case 3:
         return (
            <>
               <path
                  d='M112.5 230.275C116.434 232.334 119.482 233.881 123.133 235.592C126.785 237.303 129.986 236.912 133.867 235.592C137.747 234.272 142.287 232.323 145.454 230.442C148.62 228.562 150.022 224.842 148.765 221.069C146.315 213.719 140.048 211.262 139.145 202.056L137.5 185.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 4:
         return (
            <path
               d='M110 229.951C114.499 231.967 117.985 233.482 122.161 235.158C126.337 236.833 129.999 236.45 134.437 235.158C138.874 233.865 144.067 231.957 147.689 230.115C151.31 228.273 152.914 224.63 151.476 220.936C148.674 213.738 141.506 207.291 140.474 198.275'
               stroke={colors.base}
               strokeWidth='3'
            />
         );
   }
}
