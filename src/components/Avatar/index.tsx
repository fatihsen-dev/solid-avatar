"use client";
import { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Man from "./Man";
import { ManT } from "./Man/props";
import Woman from "./Woman";
import { WomanT } from "./Woman/props";

type Props = ManT | WomanT;

export default function Index({
   gender,
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
   const avatarRef = useRef<any>(null);

   const downloadSvg = () => {
      const element = document.createElement("a");
      const blob = new Blob([avatarRef.current.outerHTML], { type: "image/svg+xml" });
      let url = URL.createObjectURL(blob);
      element.setAttribute("download", "avatar");
      element.href = url;
      element.click();
   };

   return (
      <div className='flex items-center gap-10 relative'>
         {gender === "man" ? (
            <Man
               head={head}
               chin={chin}
               mouth={mouth}
               eyes={eyes}
               nose={nose}
               hair={hair}
               ears={ears}
               glasses={glasses}
               headGear={headGear}
               avatarRef={avatarRef}
            />
         ) : (
            <Woman
               head={head}
               chin={chin}
               mouth={mouth}
               eyes={eyes}
               nose={nose}
               hair={hair}
               ears={ears}
               glasses={glasses}
               headGear={headGear}
               avatarRef={avatarRef}
            />
         )}
         <button
            className='absolute bottom-1 right-1 z-10 bg-black w-9 aspect-square flex items-center justify-center rounded-md text-xl border border-black hover:bg-white hover:text-black transition-colors'
            onClick={downloadSvg}>
            <MdOutlineFileDownload />
         </button>
      </div>
   );
}
