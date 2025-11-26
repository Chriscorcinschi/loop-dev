import ButtonGradient from "./assets/svg/ButtonGradient";
import { Projects } from "./Section/Projects";
import { Skills } from "./Section/Skills";
import { Footer } from "./Section/Footer";
import { Header } from "./Section/Header";
import { Hero } from "./Section/Hero";
import { Contact } from "./Section/Contact";
import { Workflow } from "./Section/Workflow";

function App() {
   return (
      <>
         <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <Hero />
            <Workflow />
            <Skills />
            <Projects />
            <Contact />

            <Footer />
         </div>
         <ButtonGradient />
      </>
   );
}

export default App;
