"use client";
import StoreContext from "@/context/store/context";
import { useContext } from "react";
import { HeadGearT } from "./props";

interface Props {
   headGear: HeadGearT;
}

export default function HeadGear({ headGear }: Props) {
   const { colors } = useContext(StoreContext);

   switch (headGear) {
      case 0:
         return <></>;
      case 1:
         return (
            <>
               <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M208.937 285.32C206.891 338.192 182.435 376 129.524 376C77.5163 376 48.5 333.936 36.2285 283.656C34.5354 284.148 21.2475 213.887 22.9834 151.734C24.7192 89.5813 67.2858 39.9998 127.952 39.9998C187.633 39.9998 224.267 86.8125 229 148.936C233 201.436 231.5 247.936 208.937 285.32ZM127 305.436C172.287 305.436 209 254.173 209 190.936C209 127.699 172.287 76.436 127 76.436C81.7127 76.436 45 127.699 45 190.936C45 254.173 81.7127 305.436 127 305.436Z'
                  fill={colors.base}
               />
               <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M53.4653 139.497C75.6639 133.402 100.409 130 126.5 130C153.026 130 178.161 133.517 200.644 139.804C187.291 102.012 159.331 76 127 76C94.7572 76 66.8608 101.871 53.4653 139.497Z'
                  fill={colors.base}
               />
               <path
                  d='M196.796 299.65C203.506 294.694 209.083 287.593 213.282 281.436'
                  stroke={colors.bg}
                  strokeWidth='3'
               />
               <path
                  d='M57.9999 281.936C67.0288 304.716 92.27 329.932 114.115 335.512'
                  stroke={colors.bg}
                  strokeWidth='3'
               />
               <path
                  d='M127 79C159.215 79 186.591 104.927 200 142.5'
                  stroke={colors.bg}
                  strokeWidth='3'
               />
               <path
                  d='M54 142.5C57.3945 132.988 61.684 124.223 66.7205 116.436'
                  stroke={colors.bg}
                  strokeWidth='3'
               />
            </>
         );
   }
}
