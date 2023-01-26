import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollToPlugin,
      Draggable,
      // ScrollSmoother,
      DrawSVGPlugin
   
    );
  }

  return {
    provide: {
      gsap,
      Draggable,
      ScrollTrigger,
    DrawSVGPlugin
      // ScrollSmoother
    },
  };
});
