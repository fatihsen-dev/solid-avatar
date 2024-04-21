"use client";
import Avatar from "@/components/Avatar";
import { ManT } from "@/components/Avatar/Man/props";
import { randomMan } from "@/components/Avatar/Man/random";
import { WomanT } from "@/components/Avatar/Woman/props";
import { randomWoman } from "@/components/Avatar/Woman/random";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

export default function Page() {
   const [loading, setLoading] = useState(true);
   const [man, setMan] = useState<ManT | null>(null);
   const [woman, setWoman] = useState<WomanT | null>(null);

   useEffect(() => {
      setMan(randomMan());
      setWoman(randomWoman());
      setLoading(false);
   }, []);

   if (loading)
      return (
         <div className='flex h-screen items-center justify-center'>
            <span>Loading...</span>
         </div>
      );

   const handleMan = () => setMan(randomMan());
   const handleWoman = () => setWoman(randomWoman());

   const handleBoth = () => {
      setMan(randomMan());
      setWoman(randomWoman());
   };

   return (
      <div className='h-full flex flex-col items-center justify-center gap-6'>
         <div className='max-w-xl gap-10 w-full inline-flex'>
            {man && (
               <Avatar
                  gender='man'
                  head={man.head}
                  chin={man.chin}
                  mouth={man.mouth}
                  eyes={man.eyes}
                  nose={man.nose}
                  hair={man.hair}
                  ears={man.ears}
                  glasses={man.glasses}
                  headGear={man.headGear}
               />
            )}
            {woman && (
               <Avatar
                  gender='woman'
                  head={woman.head}
                  chin={woman.chin}
                  mouth={woman.mouth}
                  eyes={woman.eyes}
                  nose={woman.nose}
                  hair={woman.hair}
                  ears={woman.ears}
                  glasses={woman.glasses}
                  headGear={woman.headGear}
               />
            )}
         </div>
         <div className='max-w-xl gap-10 w-full flex items-center'>
            <Button onClick={handleMan}>Man</Button>
            <Button onClick={handleWoman}>Woman</Button>
         </div>
         <div className='max-w-xl gap-10 w-full flex items-center'>
            <Button onClick={handleBoth}>Both</Button>
         </div>
      </div>
   );
}
