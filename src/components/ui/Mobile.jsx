import { BackgroundCircles, Rings, SideLines } from "../design/Backgrounds";

export const HambugerMenu = () => {
   return (
      <div className="absolute inset-0 pointer-events-none lg:hidden">
         <div className="absolute inset-0 opacity-[.03]">
            <img
               className="w-full h-full object-cover"
               width={688}
               height={953}
               alt="Background"
            />
         </div>

         <Rings />

         <SideLines />

         <BackgroundCircles />
      </div>
   );
};
