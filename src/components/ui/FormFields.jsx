export const InputField = ({
   id,
   type,
   name,
   label,
   value,
   onChange,
   required = false,
   error = "",
}) => {
   return (
      <div className="relative ">
         <input
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder=" "
            required={required}
            className={`peer px-4 pt-4 bg-n-8 border w-full h-15 rounded-lg placeholder-transparent focus:outline-none focus:ring-1 transition-colors ${
               error
                  ? "border-red-500/60 focus:ring-red-500 "
                  : "border-n-1/60 focus:ring-color-5"
            }`}
         />
         <label
            htmlFor={id}
            className={`absolute font-code left-4 top-4 transition-all duration-200 peer-focus:top-2 peer-focus:text-xs  
                        peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none ${
                           error
                              ? "text-red-400/80"
                              : "text-n-1/80 peer-[:not(:placeholder-shown)]:text-n-1/60"
                        }`}
         >
            {label} {required && <span className="text-red-500">*</span>}
            {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
         </label>
      </div>
   );
};

export const TextareaField = ({
   id,
   name,
   label,
   value,
   onChange,
   required = false,
   error = "",
}) => {
   return (
      <div className="relative">
         <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder=" "
            rows="8"
            required={required}
            className={`peer px-4 pt-6 bg-n-8 border w-full rounded-lg placeholder-transparent focus:outline-none focus:ring-1 transition-colors ${
               error
                  ? "border-red-500/60 focus:ring-red-500"
                  : "border-n-1/60 focus:ring-color-5"
            }`}
         />
         <label
            htmlFor={id}
            className={`absolute font-code left-4 top-4 transition-all duration-200 peer-focus:top-2 peer-focus:text-xs  
                        peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none ${
                           error
                              ? "text-red-400/80"
                              : "text-n-1/80 peer-[:not(:placeholder-shown)]:text-n-1/60"
                        }`}
         >
            {label} {required && <span className="text-red-500">*</span>}
            {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
         </label>
      </div>
   );
};
