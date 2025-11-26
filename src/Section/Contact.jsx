import { smallSphere, stars } from "../assets";
import { Heading } from "../components/ui/Heading";
import { Layout } from "../components/ui/Layout";
import { ContactForm } from "../components/design/ContactForm";
import { LeftLine, RightLine } from "../components/graphics/Curves";

export const Contact = () => {
   return (
      <Layout className="overflow-hidden" id="contact">
         <div className="container relative z-2 mt-[1.5rem]">
            <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
               <img
                  src={smallSphere}
                  alt="Sphere"
                  width={255}
                  height={255}
                  className="relative z-1"
               />
               <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <img
                     src={stars}
                     alt="Stars"
                     width={950}
                     height={400}
                     className="w-full"
                  />
               </div>
            </div>

            <Heading
               className="text-center"
               title="Get in Touch"
               tag="For collaborations or web projects, you can contact me with a clear overview of your idea."
            />

            <div className="relative">
               <ContactForm />
               <LeftLine />
               <RightLine />
            </div>
         </div>
      </Layout>
   );
};
