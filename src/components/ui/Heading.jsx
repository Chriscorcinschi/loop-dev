import { TagLine } from "./Tagline";

export const Heading = ({ className, title, text, tag }) => {
   return (
      <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-10 `}>
         {title && <h2 className="h2 mb-3">{title}</h2>}
         {tag && <TagLine className="md:justify-center">{tag}</TagLine>}
         {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
      </div>
   );
};
