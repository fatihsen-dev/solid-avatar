export type HeadT = 1 | 2;
export type ChinT = 0 | 1 | 2;
export type MouthT = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type EyesT = 0 | 1 | 2 | 3;
export type NoseT = 0 | 1 | 2;
export type HairT = 0 | 1 | 2 | 3 | 4 | 5;
export type EarsT = 0 | 1 | 2 | 3;
export type GlassesT = 0 | 1 | 2 | 3 | 4;
export type HeadGearT = 0 | 1;

export type WomanT = {
   gender: "woman";
   head: HeadT;
   chin: ChinT;
   mouth: MouthT;
   eyes: EyesT;
   nose: NoseT;
   hair: HairT;
   ears: EarsT;
   glasses: GlassesT;
   headGear: HeadGearT;
};
