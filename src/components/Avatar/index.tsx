import Man from "./Man";
import { ManT } from "./Man/props";
import Woman from "./Woman";
import { WomanT } from "./Woman/props";

type Props = ManT | WomanT;

export default function index({
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
   return (
      <div className='flex items-center gap-10'>
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
            />
         )}
      </div>
   );
}
