"use client";
import StoreContext from "@/context/store/context";
import { useContext } from "react";
import { EyesT } from "./props";

interface Props {
   eyes: EyesT;
}

export default function Eyes({ eyes }: Props) {
   const { colors } = useContext(StoreContext);

   switch (eyes) {
      case 0:
         return (
            <>
               <path
                  d='M82 169.57H95V174.07C95 177.659 92.0899 180.57 88.5 180.57V180.57C84.9101 180.57 82 177.659 82 174.07V169.57Z'
                  fill={colors.base}
               />
               <path
                  d='M159 169.57H172V174.07C172 177.659 169.09 180.57 165.5 180.57V180.57C161.91 180.57 159 177.659 159 174.07V169.57Z'
                  fill={colors.base}
               />
               <path
                  d='M70 176.32C79 167.32 99 167.32 108 176.32'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M147 176.32C156 167.32 176 167.32 185 176.32'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 1:
         return (
            <>
               <rect
                  x='82.5'
                  y='171.025'
                  width='13'
                  height='22'
                  rx='6.5'
                  fill={colors.base}
               />
               <rect
                  x='159.5'
                  y='171.025'
                  width='13'
                  height='22'
                  rx='6.5'
                  fill={colors.base}
               />
               <path
                  d='M70 164.025C79 155.025 99 155.025 108 164.025'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M147 164.025C156 155.025 176 155.025 185 164.025'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 2:
         return (
            <>
               <rect
                  x='82.5'
                  y='168.025'
                  width='13'
                  height='22'
                  rx='6.5'
                  fill={colors.base}
               />
               <rect
                  x='172.5'
                  y='190.025'
                  width='13'
                  height='22'
                  rx='6.5'
                  transform='rotate(-180 172.5 190.025)'
                  fill={colors.base}
               />
               <path
                  d='M72.8916 170.853C77.5098 160.298 92.9491 156.161 102.226 162.993'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M183.335 170.853C178.716 160.298 163.277 156.161 154 162.993'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 3:
         return (
            <>
               <rect
                  x='82'
                  y='175.025'
                  width='13'
                  height='14'
                  rx='6.5'
                  fill={colors.base}
               />
               <rect
                  x='159'
                  y='175.025'
                  width='13'
                  height='14'
                  rx='6.5'
                  fill={colors.base}
               />
               <path
                  d='M70 164.025C72.3442 161.681 75.4347 159.947 78.8827 158.824M108 164.025C103.086 159.111 94.8919 156.88 87 157.332M66 158.025L72.5 161.525M68 155.025L76 160.025M72 153.025L78.8827 158.824M78.8827 158.824C79.7352 158.547 80.6096 158.306 81.5 158.103M76.8827 151.025L81.5 158.103M81.5 158.103C82.3213 157.916 83.1561 157.76 84 157.637M82 151.025L84 157.637M84 157.637C84.9901 157.492 85.9926 157.39 87 157.332M87 153.025V157.332'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M183 167.025C180.656 164.681 177.565 162.947 174.117 161.824M145 167.025C149.914 162.111 158.108 159.88 166 160.332M187 161.025L180.5 164.525M185 158.025L177 163.025M181 156.025L174.117 161.824M174.117 161.824C173.265 161.547 172.39 161.306 171.5 161.103M176.117 154.025L171.5 161.103M171.5 161.103C170.679 160.916 169.844 160.76 169 160.637M171 154.025L169 160.637M169 160.637C168.01 160.492 167.007 160.39 166 160.332M166 156.025V160.332'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 4:
         return (
            <>
               <path
                  d='M79 167.275H94V173.775C94 177.917 90.6421 181.275 86.5 181.275V181.275C82.3579 181.275 79 177.917 79 173.775V167.275Z'
                  fill={colors.base}
               />
               <path
                  d='M174 167.275H159V173.775C159 177.917 162.358 181.275 166.5 181.275V181.275C170.642 181.275 174 177.917 174 173.775V167.275Z'
                  fill={colors.base}
               />
               <path
                  d='M64.0733 172.779C75.7211 163.047 99.4763 165.175 109.208 176.823'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M188.88 173.26C177.439 163.286 153.645 164.914 143.67 176.355'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 5:
         return (
            <>
               <rect
                  x='82'
                  y='168.525'
                  width='13'
                  height='14'
                  rx='6.5'
                  fill={colors.base}
               />
               <rect
                  x='159'
                  y='168.525'
                  width='13'
                  height='14'
                  rx='6.5'
                  fill={colors.base}
               />
               <path
                  d='M70.8103 167.094V167.094C73.6699 163.095 78.0038 158.569 82.9154 158.793C89.9647 159.114 97.7241 159.614 104.5 162.525'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M182.136 167.095V167.095C179.277 163.095 174.943 158.57 170.031 158.793C162.982 159.114 155.222 159.614 148.447 162.525'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
   }
}
