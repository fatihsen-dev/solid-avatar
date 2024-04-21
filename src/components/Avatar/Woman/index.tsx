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
import { WomanT } from "./props";

interface Props extends Omit<WomanT, "gender"> {
   children?: React.ReactNode;
}

export default function Woman({
   head,
   chin,
   mouth,
   eyes,
   nose,
   hair,
   ears,
   glasses,
   headGear,
}: Props) {
   const { colors, styles } = useContext(StoreContext);

   const children = (
      <>
         <Chin chin={chin} />
         <Mouth mouth={mouth} />
         <Eyes eyes={eyes} />
         <Nose nose={nose} />
         <Glasses glasses={glasses} />
         {headGear === 0 && <Ears ears={ears} />}
         {hair > 0 ? (
            <>
               <Hair hair={hair} />
               <Ears ears={ears} />
            </>
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
               fill='none'
               style={{ background: colors.bg, borderRadius: styles.borderRadius }}
               xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='M39.5654 137.841C37.0811 87.3923 77.3144 45.1292 127.824 45.1292V45.1292C178.466 45.1292 218.748 87.6039 216.066 138.174L211.975 215.316C210.838 236.751 203.646 257.425 191.234 274.937L189.806 276.953C175.501 297.135 152.299 309.129 127.561 309.129V309.129C102.755 309.129 79.4981 297.069 65.2053 276.795L63.8876 274.926C51.5479 257.423 44.437 236.772 43.3837 215.382L39.5654 137.841Z'
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
               fill='none'
               style={{ background: colors.bg, borderRadius: styles.borderRadius }}
               xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='M128 45.1292C76.6375 45.1292 39 86.7667 39 138.129L43 226.129C43 261.696 64.9658 279.6 94.301 295.244C105.244 306.87 110.774 314.129 128 314.129C145.226 314.129 151.756 306.87 162.699 295.244C192.034 279.6 212 261.696 212 226.129L218 138.129C218 86.7667 179.362 45.1292 128 45.1292Z'
                  fill='transparent'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               {children}
            </svg>
         );
   }
}
