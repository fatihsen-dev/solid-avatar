"use client";

import StoreContext from "@/context/store/context";
import { useContext } from "react";
import { MouthT } from "./props";

interface Props {
   mouth: MouthT;
}

export default function Mouth({ mouth }: Props) {
   const { colors } = useContext(StoreContext);

   switch (mouth) {
      case 0:
         return <path d='M137 260.445H121' stroke={colors.base} strokeWidth='6' />;
      case 1:
         return (
            <path
               d='M148.5 256.65C139.5 265.65 119.5 265.65 110.5 256.65'
               stroke={colors.base}
               strokeWidth='6'
            />
         );
      case 2:
         return (
            <path
               d='M149 264.525C138.471 255.314 118.617 257.051 111 264.525'
               stroke={colors.base}
               strokeWidth='6'
            />
         );
      case 3:
         return (
            <>
               <path
                  d='M154 258.275C148.316 257.234 144.864 256.129 139.432 255.358C136.346 254.919 133.156 256.379 130 256.38C126.756 256.382 123.548 254.938 120.526 255.358C114.576 256.184 111.053 257.234 106 258.275'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M140 265.275C133.95 271.128 122.95 270.063 118 265.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 4:
         return (
            <>
               <path
                  d='M156 258.275C149.842 256.192 146.102 253.983 140.217 252.44C136.875 251.563 133.419 254.482 130 254.485C126.485 254.489 123.01 251.601 119.737 252.44C113.291 254.092 109.474 256.192 104 258.275'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M139 262.275C136.635 266.404 123.087 266.145 121 262.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M111 254.275L113.257 269.319C113.419 270.4 114.95 270.474 115.216 269.413L119 254.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M148 254.275L145.743 269.319C145.581 270.4 144.05 270.474 143.784 269.413L140 254.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 5:
         return (
            <>
               <path
                  d='M151 258.275C146.026 257.234 143.006 256.129 138.253 255.358C135.553 254.919 132.761 256.379 130 256.38C127.161 256.382 124.354 254.938 121.711 255.358C116.504 256.184 113.421 257.234 109 258.275'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M113 269.275V257.859L124.5 255.775L129.5 256.275L136.5 255.275L146 257.275V269.275C146 278.112 138.837 285.275 130 285.275H129C120.163 285.275 113 278.112 113 269.275Z'
                  fill={colors.bg}
                  stroke={colors.base}
               />
               <path d='M130 255.275L130 276.275' stroke={colors.base} />
            </>
         );
      case 6:
         return (
            <>
               <path
                  d='M153 262.275L140.909 256.213C139.712 255.613 138.327 255.522 137.044 255.902C135.017 256.504 131.912 257.321 130 257.322C128.112 257.323 125.524 256.569 123.781 255.975C122.55 255.556 121.205 255.547 119.998 256.033L107 261.264'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M148 265.275C137.825 275.517 119.325 273.655 111 265.275M124.214 245.275L127.45 247.223C129.036 248.178 131.021 248.178 132.607 247.223L135.843 245.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 7:
         return (
            <>
               <path
                  d='M156 266.275L142.282 258.452C140.976 257.708 139.407 257.594 137.982 258.075C135.691 258.849 132.167 259.906 130 259.907C127.857 259.908 124.916 258.93 122.945 258.166C121.581 257.637 120.054 257.626 118.723 258.235L104 264.974'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M150 269.595C138.725 282.294 118.225 279.986 109 269.595M123.643 247.275L129.607 247.849C129.925 247.88 130.246 247.88 130.565 247.849L136.529 247.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
   }
}
