"use client";
import StoreContext from "@/context/store/context";
import { useContext } from "react";
import { GlassesT } from "./props";

interface Props {
   glasses: GlassesT;
}

export default function Glasses({ glasses }: Props) {
   const { colors } = useContext(StoreContext);

   switch (glasses) {
      case 0:
         return <></>;
      case 1:
         return (
            <>
               <path
                  d='M26 158.129C58.7925 150.608 79.5843 149.105 106.924 153.827C120.411 156.157 134.185 156.36 147.695 154.171C176.076 149.572 196.56 150.825 228 158.129'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M45 153.129L53.6346 182.782C56.2874 191.893 63.6929 198.834 72.9557 200.894L87.3579 204.095C103.596 207.705 119 195.349 119 178.715V155.571'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M210 153.129L201.386 183.532C198.732 192.901 191.065 200.001 181.521 201.93L167.15 204.834C151.047 208.088 136 195.778 136 179.349V155.571'
                  stroke={colors.base}
                  strokeWidth='6'
               />
            </>
         );
      case 2:
         return (
            <>
               <circle
                  cx='87.5'
                  cy='175.879'
                  r='28.5'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <circle
                  cx='167.5'
                  cy='175.879'
                  r='28.5'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M114 175.379C125.268 171.141 131.098 171.624 141 175.379'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path d='M196 171.379L228 155.379' stroke={colors.base} strokeWidth='6' />
               <path d='M59 171.379L26 155.379' stroke={colors.base} strokeWidth='6' />
            </>
         );
      case 3:
         return (
            <>
               <path
                  d='M26 158.129C36.736 155.667 46.1857 153.849 55 152.684M116 155.568V155.568C123.445 157.127 131.159 157.404 138.63 155.975C138.754 155.952 138.878 155.928 139 155.904M228 158.129C217.264 155.667 207.814 153.849 199 152.684'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M54.2056 183.56L50.7173 163.392C49.7455 157.774 53.2237 152.297 58.793 151.074C78.8359 146.672 92.5578 147.135 111.055 152.937C115.781 154.419 118.723 159.061 118.324 163.998L116.932 181.224C115.841 194.727 104.564 205.129 91.0167 205.129H79.8252C67.1755 205.129 56.3615 196.025 54.2056 183.56Z'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M199.794 183.56L203.283 163.392C204.255 157.774 200.776 152.297 195.207 151.074C175.164 146.672 161.442 147.135 142.945 152.937C138.219 154.419 135.277 159.061 135.676 163.998L137.068 181.224C138.159 194.727 149.436 205.129 162.983 205.129H174.175C186.825 205.129 197.639 196.025 199.794 183.56Z'
                  stroke={colors.base}
                  strokeWidth='6'
               />
            </>
         );
      case 4:
         return (
            <>
               <path
                  d='M33 149.129C66.3428 156.11 104.5 154.629 140.5 162.629M226 162.129L196.5 161.129'
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M199 176.129V167.546C199 161.642 195.03 156.404 189.249 155.209C174.265 152.112 163.465 152.428 149.666 156.463C144.412 158 141 162.968 141 168.442V176.129C141 189.384 151.745 200.129 165 200.129H175C188.255 200.129 199 189.384 199 176.129Z'
                  fill={colors.base}
                  stroke={colors.base}
                  strokeWidth='6'
               />
            </>
         );
   }
}
