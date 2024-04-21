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
         return <path d='M137 260.299H121' stroke={colors.base} strokeWidth='6' />;
      case 1:
         return (
            <path
               d='M148.5 256.504C139.5 265.504 119.5 265.504 110.5 256.504'
               stroke={colors.base}
               strokeWidth='6'
            />
         );
      case 2:
         return (
            <path
               d='M149 264.379C138.471 255.168 118.617 256.905 111 264.379'
               stroke={colors.base}
               strokeWidth='6'
            />
         );
      case 3:
         return (
            <>
               <path
                  d='M151 258.129C146.026 257.087 143.006 255.983 138.253 255.211C135.553 254.773 132.761 256.232 130 256.234C127.161 256.236 124.354 254.792 121.711 255.211C116.504 256.037 113.421 257.087 109 258.129'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M142 264.129C138.846 266.882 120.783 266.709 118 264.129'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 4:
         return (
            <>
               <path
                  d='M151 258.129C146.026 257.087 143.006 255.983 138.253 255.211C135.553 254.773 132.761 256.232 130 256.234C127.161 256.236 124.354 254.792 121.711 255.211C116.504 256.037 113.421 257.087 109 258.129'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M139 262.129C136.635 266.258 123.087 265.998 121 262.129'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M111.5 256.129L113.758 270.051C113.93 271.114 115.429 271.191 115.71 270.152L119.5 256.129'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M148.5 256.129L146.242 270.051C146.07 271.114 144.571 271.191 144.29 270.152L140.5 256.129'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 5:
         return (
            <>
               <path
                  d='M149 258.105C138.471 267.317 118.617 265.579 111 258.105'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M116.5 262.129L118.201 272.091C119.196 277.918 124.714 281.843 130.545 280.872V280.872C136.34 279.906 140.282 274.46 139.388 268.653L139 266.129'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path d='M127 263.129L129 273.629' stroke={colors.base} strokeWidth='3' />
            </>
         );
      case 6:
         return (
            <>
               <path
                  d='M151 258.129C146.026 257.435 143.006 256.698 138.253 256.184C135.553 255.892 132.761 256.865 130 256.866C127.161 256.867 124.354 255.904 121.711 256.184C116.504 256.735 113.421 257.435 109 258.129'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M143 262.629C134.972 266.939 125.5 267.129 118 262.629M125.5 248.129L129.7 249.529C129.895 249.594 130.106 249.597 130.303 249.538L135 248.129'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
   }
}
