<template>
    <v-container fluid>
        <v-row no-gutters justify="center" class="text-center">
            <v-col cols="12" lg="3">
                <NuxtLink to="/">
                <v-img src="/logo.webp" contain class="mx-auto" alt="iotron Logo" />
                </NuxtLink>
                <br />
                <h5 class="text-subtitle-2">
                    iotron technologies pvt ltd<br />
                    335, Dum Dum Road<br />Kolkata - 74<br />
                    WB, India.
                </h5>
                <br />
                <p>
                    <a href="tel:+91 7439 790 770" class="text-decoration-none">
                        <v-icon icon="$phone" class="mr-2"></v-icon>
                        +91 9046632101
                    </a>
                </p>
                <p>
                    <a href="mailto:contactus@iaa.org.in" class="text-decoration-none">
                        <v-icon icon="$email" class="mr-2 "></v-icon>
                        contactus@iotron.co
                    </a>
                </p>
                <section class="text-center">
                    <p class="text-subtitle-2">find us on</p>
                    <v-row no-gutters justify="space-around" class="my-4">
                        <v-btn
                        v-for="(social, i) in socialLinks"
                        :key="i"
                        icon
                        :href="social.url"
                        target="_blank"
                        rel="noopener"
                        >
                        <v-icon :aria-label="social.name" :icon="social.icon"></v-icon>
                        </v-btn>
                    </v-row>
                </section>
            </v-col>
            <v-col cols="12" lg="3" class="pa-2">
                <p v-for="(link, i) in navItems" :key="i" class="subtitle-1 mb-1">
                <NuxtLink :to="link.to" class="text-decoration-none">{{ link.title }}</NuxtLink>
                </p>
            </v-col>
            <v-col cols="12" lg="3">
                <p>
                <NuxtLink to="/verify" class="text-decoration-none"> Verify Certificates </NuxtLink>
                </p>
                <section>
                <p class="caption my-2">Policies</p>
                <!-- <p v-for="(policy, i) in policies" :key="i" class="subtitle-1 mb-1">
                    <NuxtLink :to="'/policy/' + policy.url">
                    {{ policy.title }}
                    </NuxtLink>
                </p> -->
                </section>
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup>

const route = useRoute();
const router = useRouter();

const props = defineProps({
    navItems: {
        type: Array,
        required: true,
    },
});

const socialLinks = [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/jetpaxevents',
          icon: '$facebook',
        },
        {
          name: 'Linkedin',
          url: 'https://www.instagram.com/independentartistassociation',
          icon: '$linkedin',
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC0Q1WPPZBPwfXj3G7ZtGPUQ',
          icon: '$youtube',
        },
        {
          name: 'Google',
          url: 'https://goo.gl/maps/Q6jKTGNSywZPSHj59',
          icon: '$google',
        },
      ];

const policies = ref([]);

// const reactiveQuery = computed(()=>route.query);
// const {pending, data, error, refresh} = await useFetchApi("policy", {
//     onResponseError({request, response, option}){
//         // handle response errors
//     },
//     query: reactiveQuery,
// });

// watch(data, ()=>{
//     policies.value = data.value;
// });

// watch(reactiveQuery, ()=>{
//     refresh();
// })
</script>