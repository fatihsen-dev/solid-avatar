import { randomNum } from "@/utils/random";
import {
   ChinT,
   EarsT,
   EyesT,
   GlassesT,
   HairT,
   HeadGearT,
   HeadT,
   MouthT,
   NoseT,
   WomanT,
} from "./props";

export const randomWoman = (): WomanT => {
   return {
      gender: "woman",
      chin: randomNum(0, 2) as ChinT,
      ears: randomNum(0, 3) as EarsT,
      eyes: randomNum(0, 3) as EyesT,
      glasses: randomNum(0, 4) as GlassesT,
      hair: randomNum(0, 5) as HairT,
      head: randomNum(1, 2) as HeadT,
      headGear: randomNum(0, 1) as HeadGearT,
      mouth: randomNum(0, 6) as MouthT,
      nose: randomNum(0, 2) as NoseT,
   };
};
