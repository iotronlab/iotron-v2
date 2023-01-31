<template>
  <v-app dark>
    <NavigationBase :nav-items="items" />
    <v-main>
      <slot />
    </v-main>
    <LazyFooter :nav-items="items" />
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script setup>

const { $gsap: gsap, $ScrollSmoother: ScrollSmoother } = useNuxtApp();
const drawer = ref(false);
const items = [
  {
    title: 'Services',
    to: '/',
  },
  {
    title: 'Portfolio',
    to: '/portfolio',
  },
  {
    title: 'Blogs',
    to: '/blogs',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
]

onMounted(() => {
  // scrollSmootherInit();
})

function scrollSmootherInit() {
  ScrollSmoother.create({
    content: "#content",
    wrapper: "#wrapper",
    smooth: 1,
    effects: true,
  });
}
</script>

<style>

</style>
