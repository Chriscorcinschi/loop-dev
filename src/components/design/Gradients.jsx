import { gradient } from "../../assets";

export const GradientLight = () => {
   return (
      <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
   );
};

export const GradientHero = () => {
   return (
      <>
         <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
         <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
      </>
   );
};

export const GradientWorkflow = () => {
   return (
      <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
         <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
            <img
               className="w-full"
               src={gradient}
               width={942}
               height={942}
               alt="Gradient"
            />
         </div>
      </div>
   );
};
