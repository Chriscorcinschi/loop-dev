import { Layout } from "../components/ui/Layout";
import { curve, heroImg } from "../assets";
import Button from "../components/ui/Button";
import { BackgroundCircles } from "../components/design/Parallax";
import { GradientHero, GradientLight } from "../components/design/Gradients";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { Generating } from "../components/ui/Generating";
import { Notification } from "../components/ui/Notification";

import { BottomLine } from "../components/graphics/Curves";

export const Hero = () => {
   const parallaxRef = useRef(null);

   return (
      <Layout
         className="pt-[12rem] -mt-[5.25rem]"
         crosses
         crossesOffset="lg:translate-y-[5.25rem]"
         customPaddings
         id="hero"
      >
         <div className="container relative" ref={parallaxRef}>
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
               <h1 className="h1 mb-6">
                  Transform Your Ideas into a High-Impact{" "}
                  <span className="inline-block relative">
                     Website
                     <img
                        src={curve}
                        alt="Curve"
                        className="absolute top-full left-0 w-full xl:-mt-2"
                        width={624}
                        height={28}
                     />
                  </span>
               </h1>
               <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                  Frontend development delivering fast, responsive, and
                  accessible web interfaces that bring concepts to life and
                  drive real results for brands.
               </p>
               <Button href="#contact" white className="pr-9">
                  Get in Touch
               </Button>
            </div>
            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
               <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                  <div className="relative bg-n-8 rounded-[1rem]">
                     <div className="h-[1.4rem]rounded-t-[0.9rem]" />
                     <div className="aspect-[48/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[900/490] lg:aspect-[970/490]">
                        <img
                           src={heroImg}
                           alt="Idea, process"
                           className="w-full scale-[1.0] translate-y-[8%] md:scale-[0.97] md:-translate-y-[10%] lg:-translate-y-[12%]"
                           width={1024}
                           height={490}
                        />

                        <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-7 md:w-[31rem] md:-translate-x-1/2" />

                        <ScrollParallax isAbsolutelyPositioned>
                           <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                              {heroIcons.map((icon, index) => (
                                 <li key={index} className="p-5">
                                    <img
                                       src={icon}
                                       alt={icon}
                                       width={24}
                                       height={25}
                                    />
                                 </li>
                              ))}
                           </ul>
                        </ScrollParallax>

                        <ScrollParallax isAbsolutelyPositioned>
                           <Notification
                              className="hidden absolute -right-[5.5rem] bottom-[24rem] w-[14rem] xl:flex"
                              title="Clean Code"
                           />
                        </ScrollParallax>
                     </div>
                  </div>

                  <GradientHero />
               </div>

               <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>

               <BackgroundCircles />
            </div>

            <div className="hidden relative z-10 mt-20 lg:block">
               <h5 className="tagline mb-6 text-center text-n-1/50">
                  I help people and businesses create beautiful and engaging
                  content
               </h5>
            </div>
         </div>
         <BottomLine />
      </Layout>
   );
};
