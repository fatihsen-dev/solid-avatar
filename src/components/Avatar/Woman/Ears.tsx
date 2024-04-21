"use client";
import StoreContext from "@/context/store/context";
import { useContext } from "react";
import { EarsT } from "./props";

interface Props {
   ears: EarsT;
}

export default function Ears({ ears }: Props) {
   const { colors } = useContext(StoreContext);

   switch (ears) {
      case 0:
         return <></>;
      case 1:
         return (
            <>
               <path
                  d='M217.166 160.786C228.953 157.658 240.373 166.91 239.759 179.09L239.677 180.72C239.086 192.446 230.984 202.447 219.635 205.458L213.314 207.135L215.629 161.193L217.166 160.786Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <circle cx='222' cy='233.129' r='9' fill={colors.base} />
               <path
                  d='M38.7364 160.939C26.9978 157.634 15.4395 166.713 15.8695 178.9L15.9271 180.531C16.3411 192.265 24.2911 202.387 35.5932 205.569L41.8885 207.341L40.2665 161.37L38.7364 160.939Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M234.629 168.472L233.474 168.623C227.723 169.372 223.33 174.126 223.039 179.918L222.259 195.384'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M223.127 178.16C227.996 177.787 230.336 178.386 234.026 180.457'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M21.5574 168.366L22.7106 168.534C28.4496 169.37 32.7697 174.19 32.9742 179.986L33.5202 195.461'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M32.912 178.226C28.0492 177.78 25.7006 178.343 21.9804 180.359'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <circle cx='33' cy='233.129' r='9' fill={colors.base} />
               <path d='M222 205.129V227.129' stroke={colors.base} strokeWidth='3' />
               <path d='M33 205.129V227.129' stroke={colors.base} strokeWidth='3' />
            </>
         );
      case 2:
         return (
            <>
               <path
                  d='M217.509 160.786C229.296 157.658 240.716 166.91 240.102 179.09L240.02 180.72C239.429 192.446 231.327 202.447 219.978 205.458L213.657 207.135L215.972 161.193L217.509 160.786Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M38.792 160.939C27.0534 157.634 15.4952 166.713 15.9252 178.9L15.9827 180.531C16.3967 192.265 24.3468 202.387 35.6488 205.569L41.9442 207.341L40.3222 161.37L38.792 160.939Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M234.629 168.472L233.474 168.623C227.723 169.372 223.33 174.126 223.039 179.918L222.259 195.384'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M223.127 178.16C227.996 177.787 230.336 178.386 234.026 180.457'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M21.5574 168.366L22.7106 168.534C28.4496 169.37 32.7697 174.19 32.9742 179.986L33.5202 195.461'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M32.912 178.226C28.0492 177.78 25.7006 178.343 21.9804 180.359'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 3:
         return (
            <>
               <path
                  d='M230.75 157.273C235.989 155.883 241.064 159.995 240.792 165.408L240.02 180.72C239.429 192.446 231.327 202.447 219.978 205.458L213.657 207.135L215.972 161.193L230.75 157.273Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M25.6052 157.226C20.388 155.757 15.251 159.792 15.4421 165.209L15.9827 180.531C16.3967 192.265 24.3468 202.387 35.6488 205.569L41.9442 207.341L40.3222 161.37L25.6052 157.226Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M234.629 168.472L233.474 168.623C227.723 169.372 223.33 174.126 223.039 179.918L222.259 195.384'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M223.127 178.16C227.996 177.787 230.336 178.386 234.026 180.457'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M21.5574 168.366L22.7106 168.534C28.4496 169.37 32.7697 174.19 32.9742 179.986L33.5202 195.461'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M32.912 178.226C28.0492 177.78 25.7006 178.343 21.9804 180.359'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
   }
}
