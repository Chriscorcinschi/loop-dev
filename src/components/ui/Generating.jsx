import { loading } from "../../assets";

export const Generating = ({ className }) => {
   return (
      <div
         className={`flex items-center h-[3.5rem] px-7 bg-n-5/55 rounded-[1.7rem] ${
            className || ""
         } text-base`}
      >
         <img src={loading} alt="Loading" className="w-5 h-5 mr-4" />
         Bring Your Web Vision to Life
      </div>
   );
};
