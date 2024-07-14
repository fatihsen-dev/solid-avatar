"use client";
import StoreContext from "@/context/store/context";
import { useContext } from "react";
import Chin from "./Chin";
import Ears from "./Ears";
import Eyes from "./Eyes";
import Glasses from "./Glasses";
import Hair from "./Hair";
import HeadGear from "./HeadGear";
import Mouth from "./Mouth";
import Nose from "./Nose";
import { ManT } from "./props";

interface Props extends Omit<ManT, "gender"> {
   children?: React.ReactNode;
   avatarRef: any;
}

export default function Man({
   head,
   chin,
   mouth,
   eyes,
   nose,
   hair,
   ears,
   glasses,
   headGear,
   avatarRef,
}: Props) {
   const { colors, styles } = useContext(StoreContext);

   const children = (
      <>
         <Chin chin={chin} />
         <Mouth mouth={mouth} />
         <Eyes eyes={eyes} />
         <Nose nose={nose} />
         <Ears ears={ears} />
         <Glasses glasses={glasses} />
         {hair > 0 ? (
            <Hair hair={hair} />
         ) : headGear > 0 ? (
            <HeadGear headGear={headGear} />
         ) : (
            ""
         )}
      </>
   );

   switch (head) {
      case 1:
         return (
            <svg
               width={styles.width}
               height={styles.height}
               viewBox={styles.viewBox}
               ref={avatarRef}
               fill='none'
               style={{ background: colors.bg, borderRadius: styles.borderRadius }}
               xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='M35 138.275C35 86.9127 76.6375 45.2751 128 45.2751V45.2751C179.362 45.2751 221 86.9127 221 138.275V216.275C221 267.638 179.362 309.275 128 309.275V309.275C76.6375 309.275 35 267.638 35 216.275V138.275Z'
                  fill='transparent'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               {children}
            </svg>
         );
      case 2:
         return (
            <svg
               width={styles.width}
               height={styles.height}
               viewBox={styles.viewBox}
               ref={avatarRef}
               fill='none'
               style={{ background: colors.bg, borderRadius: styles.borderRadius }}
               xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='M128 45.2751C76.6375 45.2751 35 86.9127 35 138.275V216.275C35 251.842 54.9658 269.746 84.301 285.39C95.2437 297.016 110.774 304.275 128 304.275C145.226 304.275 160.756 297.016 171.699 285.39C201.034 269.746 221 251.842 221 216.275V138.275C221 86.9127 179.362 45.2751 128 45.2751Z'
                  fill='transparent'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               {children}
            </svg>
         );
      case 3:
         return (
            <svg
               width={styles.width}
               height={styles.height}
               viewBox={styles.viewBox}
               ref={avatarRef}
               fill='none'
               style={{ background: colors.bg, borderRadius: styles.borderRadius }}
               xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='M128 45.2751C76.6375 45.2751 35 86.9127 35 138.275V191.275L43.8921 234.65C45.6819 247.218 50.6975 273.446 61.209 280.565L90.3024 306.914C98.3189 312.343 104.873 315.042 114.545 314.609L127 314.053L140.32 314.635C149.826 315.051 156.218 312.444 164.148 307.187L194.336 280.503C205.008 273.429 210.162 247.144 212.005 234.474L221 191.275V138.275C221 86.9127 179.362 45.2751 128 45.2751Z'
                  fill='transparent'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               {children}
            </svg>
         );
   }
}
