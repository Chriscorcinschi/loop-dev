import js from "@eslint/js";
import {
   projectsImage2,
   file02,
   homeSmile,
   plusSquare,
   workflow1,
   workflow2,
   workflow3,
   workflow4,
   searchMd,
   slack,
   notification1,
   react,
   gsap,
   tailwindcss,
   html5,
   css,
   bootstrap,
   javascript,
   json,
   clerk,
   nodejs,
   mongodb,
   figma,
   github,
   photoshop,
   
} from "../assets";

//pathname.hase only fot #
export const navigation = [
   {
      id: "0",
      title: "Home",
      url: "#hero",
      onlyMobile: true,
   },
   {
      id: "1",
      title: "Skills",
      url: "#skills",
   },
   {
      id: "2",
      title: "Projects",
      url: "#projects",
   },
   /*
   {
      id: "3",
      title: "Service",
      url: "#service",
   },
   */
   {
      id: "4",
      title: "Workflow",
      url: "#workflow",
   },
   /*
   {
      id: "5",
      title: "About Me",
      url: "#about-me",
   },*/

   {
      id: "6",
      title: "Contact",
      url: "#contact",
      onlyMobile: true,
   },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification1];

export const workflow = [
   {
      id: "0",
      title: "Discovery & Planning",
      text: "I analyze goals, requirements, and user experience to define a clear front-end development strategy and establish a solid foundation for the web project.",
      phase: "Phase 1",
      status: "done",
      imageUrl: workflow1,
      colorful: true,
   },
   {
      id: "1",
      title: "Design & Prototyping",
      text: "I create optimized UI/UX wireframes and prototypes, validating the user experience before development and ensuring a modern, accessible design.",
      phase: "Phase 2",
      status: "done",
      imageUrl: workflow2,
   },
   {
      id: "2",
      title: "Development & Implementation",
      text: "I build scalable, high-performance interfaces by applying front-end development best practices and writing clean, efficient, maintainable code.",
      phase: "Phase 3",
      status: "done",
      imageUrl: workflow3,
   },
   {
      id: "3",
      title: "Testing & Deployment",
      text: "I optimize performance, fix critical issues, and deploy web applications through reliable CI/CD pipelines for a production-ready release.",
      phase: "Phase 4",
      status: "progress",
      imageUrl: workflow4,
   },
];

export const skillsText =
   "Expertise in frontend development, UI/UX design, and web performance optimization. Deliver measurable results for brands and users.";

export const skillsContent = [
   {
      id: "0",
      title: "Frontend Development",
      text: "Create fast, responsive, and accessible web apps that scale with your business.",
   },
   {
      id: "1",
      title: "Performance Optimization",
      text: "Boost site speed, improve SEO, and ensure high-quality user experiences.",
      //Web Accessibility (A11y): Build inclusive interfaces that follow accessibility best practices and semantic standards.//
   },
   {
      id: "2",
      title: "UI/UX Design",
      text: "Design intuitive interfaces that users love and interact with effortlessly.",
   },
];

export const skillsbApps = [
   {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
   },
   {
      id: "1",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 36,
   },
   {
      id: "2",
      title: "HTML",
      icon: html5,
      width: 36,
      height: 28,
   },
   {
      id: "3",
      title: "CSS",
      icon: css,
      width: 40,
      height: 40,
   },
   {
      id: "4",
      title: "Javascript",
      icon: javascript,
      width: 30,
      height: 30,
   },
   {
      id: "5",
      title: "Slack",
      icon: slack,
      width: 33,
      height: 33,
   },
   {
      id: "6",
      title: "react",
      icon: react,
      width: 35,
      height: 35,
   },
   {
      id: "7",
      title: "bootstrap",
      icon: bootstrap,
      width: 38,
      height: 32,
   },
];

export const projects = [
   {
      id: "0",
      title: "Cocktail Bar Experience",
      text: "An elegant and interactive website for a premium cocktail bar, featuring fluid animations and a captivating user experience. This modern design combines sophisticated micro-interactions to reflect the meticulous craft of mixology.",
      backgroundUrl: "/assets/projects/card-1.svg",
      iconTech: [react, tailwindcss, gsap],
      imageUrl: projectsImage2,
      url: "https://github.com/",
   },
   {
      id: "1",
      title: "Corporate Website",
      text: "A sleek, mobile-optimized landing page that blends minimalist design with modern functionality to showcase brand identity and drive conversions through compelling storytelling.",
      backgroundUrl: "/assets/projects/card-2.svg",
      iconTech: [html5, css, bootstrap],
      imageUrl: projectsImage2,
      light: true,
      url: "https://chriscorcinschi.github.io/responsive-bootstrap-landing-page/",
   },
   {
      id: "2",
      title: "Travel Explorer",
      text: "A responsive travel website featuring interactive destination search, dynamic content loading, and mobile-first design. Users can explore curated destinations with rich visuals and seamless trip planning.",
      backgroundUrl: "/assets/projects/card-3.svg",
      iconTech: [javascript, html5, json, css],
      imageUrl: projectsImage2,
      url: "https://chriscorcinschi.github.io/wanderlust/",
   },
   {
      id: "3",
      title: "Humanitarian Campaign Website",
      text: "A responsive donation website promoting humanitarian projects in West Africa. Combines emotional storytelling with strategic CTAs to drive GoFundMe conversions through SEO-optimized content and mobile-first design.",
      backgroundUrl: "/assets/projects/card-4.svg",
      iconTech: [html5, css],
      imageUrl: projectsImage2,
      light: true,
      url: "https://chriscorcinschi.github.io/donation-website/",
   },
   {
      id: "4",
      title: "Hotel Booking Platform",
      text: "Full-Stack Web Application a hotel booking platform that connects travelers with luxury hotels worldwide. The application offers an elegant user experience with seamless booking functionality, personalized recommendations, and comprehensive hotel management capabilities for property owners.",
      backgroundUrl: "/assets/projects/card-5.svg",
      iconTech: [react, tailwindcss, clerk, nodejs, mongodb],
      imageUrl: projectsImage2,
      url: "https://github.com/",
   },
   {
      id: "5",
      title: "New project",
      text: "add new project here, blah blah balha",
      backgroundUrl: "/assets/projects/card-6.svg",
      iconTech: [html5, css, javascript],
      imageUrl: projectsImage2,
      url: "https://github.com/",
   },
];

export const socials = [
   {
      id: "0",
      title: "Github",
      iconUrl: github,
      url: "https://github.com/Chriscorcinschi?tab=repositories",
   },
   /*
   {
      
   {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
   },
   {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
   },
   {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
   },
   {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
   }, 
   },*/
];
