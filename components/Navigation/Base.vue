<template>
    <!-- For desktop -->
  <header class="sticky top-0 z-10 w-full bg-inherit">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2"
      aria-label="navigation"
    >
      <NuxtLink to="/">
        <img class="hidden h-12 w-auto lg:block" src="/logo.webp" alt="" />
       <!-- <img class="h-10 w-auto lg:hidden" src="/icon.png" alt="" /> -->
      </NuxtLink>
      <div class="flex items-center gap-1 font-bold">
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          class="relative hidden py-2 px-4 uppercase tracking-widest transition duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-fuchsia-600 before:transition before:duration-300 before:ease-in-out before:content-[''] hover:text-fuchsia-300 before:hover:scale-x-100 active:text-fuchsia-400 lg:block"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </nav>
  </header>

  <!-- Side bar for mobile -->
  <div class="min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-10" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-primary/10 backdrop-blur-sm transition-opacity"
          >
          </div>
        </TransitionChild>
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex w-4/5 pl-10 md:w-2/5"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel
                  class="pointer-events-auto relative w-screen bg-background/[0.7]"
                >
                  <TransitionChild
                    as="template"
                    enter="ease-in-out duration-500"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                  >
                    <div
                      class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"
                    >
                      <button
                        type="button"
                        class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        @click="sidebarOpen = false"
                      >
                        <span class="sr-only">Close panel</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div class="flex flex-col gap-4 p-4">
                    <hr class="my-2" />
                    <NuxtLink
                      v-for="(item, index) in items"
                      :key="index"
                      :to="item.to"
                      @click="sidebarOpen = false"
                      class="text-base uppercase tracking-wider text-white"
                    >
                      {{ item.title }}
                    </NuxtLink>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<!-- <section>
  <v-dialog v-model="drawer" fullscreen hide-overlay app class="hidden-lg-and-up">
    <v-sheet height="100%">
      <v-btn fab icon fixed right aria-label="close-button" @click.stop="drawer = !drawer">
        <v-icon x-large icon="$close"> </v-icon>
      </v-btn>
      <v-list class="pt-16">
        <v-list-item v-for="(item, i) in navItems" :key="i" :to="item.to" router exact @click.stop="drawer = !drawer">
          <v-list-item-action>
            <v-icon>{{ item.icon }} </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-dialog>

  <v-app-bar fixed app color="transparent">
    <NuxtLink to="/">
      <v-img src="/logo.webp" width="160" alt="logo"></v-img>
    </NuxtLink>
    <v-spacer></v-spacer>

    <v-app-bar-nav-icon aria-label="nav-button" class="hidden-lg-and-up" @click.stop="drawer = !drawer">
      <v-icon x-large icon="$menu"></v-icon>
    </v-app-bar-nav-icon>

    <v-row no-gutters justify="end" align="center" class="hidden-md-and-down">
      <v-switch v-model="$vuetify.theme.dark" inset label="Dark" hide-details class="mr-4 btn-anime"></v-switch>

      <div v-for="(item, i) in navItems" :key="i">
        <v-btn :to="item.to" class="btn-anime">
          {{ item.title }}
        </v-btn>
      </div>
    </v-row>
  </v-app-bar>
</section> -->

<script setup>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const { $gsap: gsap } = useNuxtApp();
const props = defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});

const drawer = ref(false);

const items = ref([
  {
    icon: "mdi-chart-bubble",
    title: "Services",
    to: "/",
  },
  {
    icon: "",
    title: "Portfolio",
    to: "/portfolio",
  },
  {
    icon: "",
    title: "Blogs",
    to: "/blog",
  },
  {
    icon: "",
    title: "Contact",
    to: "/contact",
  },
]);

onMounted(() => {
  revealAnimations();
});

function revealAnimations() {
  //   const GSDevTools = this.$GSDevTools
  const navtl = gsap.timeline({ duration: 1 });
  navtl.to(".btn-anime", { opacity: 1, stagger: 0.1 });
  //   GSDevTools.create({ animation: navtl, minimal: true })
}
</script>

<style scoped>
.btn-anime {
  opacity: 0;
}
</style>
