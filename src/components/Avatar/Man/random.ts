import { randomNum } from "@/utils/random";
import {
   ChinT,
   EarsT,
   EyesT,
   GlassesT,
   HairT,
   HeadGearT,
   HeadT,
   ManT,
   MouthT,
   NoseT,
} from "./props";

export const randomMan = (): ManT => {
   return {
      gender: "man",
      chin: randomNum(0, 3) as ChinT,
      ears: randomNum(0, 6) as EarsT,
      eyes: randomNum(0, 5) as EyesT,
      glasses: randomNum(0, 5) as GlassesT,
      hair: randomNum(0, 7) as HairT,
      head: randomNum(1, 3) as HeadT,
      headGear: randomNum(0, 1) as HeadGearT,
      mouth: randomNum(0, 7) as MouthT,
      nose: randomNum(0, 4) as NoseT,
   };
};
