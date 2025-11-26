import { curve1, curve2, lines } from "../../assets";
import PlusSvg from "../../assets/svg/PlusSvg";

export const RightCurve = () => {
   return (
      <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
         <img src={curve2} width={162} height={76} alt="Curve 2" />
      </div>
   );
};

export const LeftCurve = () => {
   return (
      <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 pl-3 mr-10 pointer-events-none xl:block">
         <img src={curve1} width={522} height={182} alt="Curve 1" />
      </div>
   );
};

//pricing section
export const LeftLine = () => {
   return (
      <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 translate-x-[14.8vw] pointer-events-none">
         <img
            className="w-full"
            src={lines}
            width={1480}
            height={177}
            alt="Lines"
         />
      </div>
   );
};

export const RightLine = () => {
   return (
      <div className="hidden lg:block absolute top-1/2 left-full -ml-[14.8vw] w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
         <img
            className="w-full"
            src={lines}
            width={1480}
            height={177}
            alt="Lines"
         />
      </div>
   );
};

export const BottomLine = () => {
   return (
      <>
         <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

         <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

         <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
      </>
   );
};
