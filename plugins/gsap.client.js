import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

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
      DrawSVGPlugin,
      // ScrollSmoother
    },
  };
});
