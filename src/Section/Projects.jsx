import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "../components/design/Gradients";
import Arrow from "../assets/svg/Arrow";
import { projects } from "../constants";
import { Heading } from "../components/ui/Heading";
import { Layout } from "../components/ui/Layout";

export const Projects = () => {
   return (
      <Layout crosses id="projects">
         <div className="container relative z-2">
            <Heading
               className="mt-4 md:max-w-md lg:max-w-2xl md:text-center"
               title="Work Showcase"
               text="A mix of design and development projects demonstrating a balanced, performance-driven approach to crafting digital experiences."
            />

            <div className="flex flex-wrap gap-10 mb-10">
               {projects.map((item) => (
                  <div
                     className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                     style={{
                        backgroundImage: `url(${item.backgroundUrl})`,
                     }}
                     key={item.id}
                  >
                     
                     <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                        <h5 className="h5 mb-5">{item.title}</h5>
                        <p className="body-2 mb-6 text-n-3">{item.text}</p>
                        <div className="flex items-center mt-auto gap-2">
                           {item.iconTech.map((icon, index) => (
                              <img
                                 key={index}
                                 src={icon}
                                 width={30}
                                 height={30}
                                 alt={`tech-${index}`}
                              />
                           ))}

                           <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex items-center gap-1 pointer-events-auto"
                           >
                              look
                              <Arrow />
                           </a>
                        </div>
                     </div>

                     {item.light && <GradientLight />}
                     <div
                        className="absolute inset-0.5 bg-n-8"
                        style={{ clipPath: "url(#projects)" }}
                     >
                        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
                           {item.imageUrl && (
                              <img
                                 src={item.imageUrl}
                                 alt={item.title}
                                 className="w-full h-full object-cover"
                                 width={380}
                                 height={362}
                              />
                           )}
                        </div>
                     </div>
                     <ClipPath />
                  </div>
               ))}
            </div>
         </div>
      </Layout>
   );
};
