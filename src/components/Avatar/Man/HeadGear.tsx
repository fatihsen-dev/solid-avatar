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
                  d='M28.0554 109.222C49.1506 94.9302 74.6004 86.582 102 86.582H154C181.4 86.582 206.849 94.9302 227.945 109.222C226.172 55.5489 182.104 12.582 128 12.582C73.8961 12.582 29.8276 55.5489 28.0554 109.222Z'
                  fill={colors.base}
               />
               <path
                  d='M20 104.315C20 96.6113 24.6654 89.6268 31.8543 86.8587C102.026 59.8388 147.818 59.9702 223.646 87.0379C231.088 89.6943 236 96.8103 236 104.712V148.59C236 153.033 230.387 155.546 226.695 153.073C182.165 123.255 76.7322 119.927 29.2374 152.955C25.5894 155.491 20 153.033 20 148.59V104.315Z'
                  fill={colors.base}
               />
               <path
                  d='M51.5 81.5822C80.3052 71.7593 97.1591 68.9919 128.5 69.0822'
                  stroke={colors.secondary}
                  strokeWidth='3'
               />
               <path d='M31.5 97.582V139.582' stroke={colors.secondary} strokeWidth='3' />
               <path d='M48 89.582V104.582' stroke={colors.secondary} strokeWidth='3' />
               <path d='M222 119.582V134.582' stroke={colors.secondary} strokeWidth='3' />
            </>
         );
   }
}
