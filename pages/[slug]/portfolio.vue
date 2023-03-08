<template>
  <v-container>
    <section v-if="pending">
      <Loading message="Fetching..."/>
    </section>

    <section v-else>
      <Breadcrumb :breadcrumb-items="breadcrumbItems" />
          <v-img
            v-if="portfolio.image != null"
            :aspect-ratio="16 / 9"
            width="100%"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
      <div class="flex flex-col justify-center items-center">
            <div class="relative flex flex-col items-center rounded-[20px]  max-w-[95%] mx-auto bg-slate-400 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:bg-slate-500 dark:text-white dark:!shadow-none p-3">
                  <div>
                    <h2 class="font-weight-bold text-center">Name</h2>
                    <h3 class="subtitle-1 h-6 text-lg">{{ portfolio.name }}</h3>
                  </div>
                <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold text-navy-700 dark:text-white">
                    Client Brief
                    </h4>
                    <p class="mt-2 px-2 text-base text-gray-300">
                    {{ portfolio.client_brief }}
                    </p>
                </div> 
                <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold text-navy-700 dark:text-white">
                    Project Description
                    </h4>
                    <p class="mt-2 px-2 text-base text-gray-300">
                    {{ portfolio.project_description }}
                    </p>
                </div> 
                <div class="grid grid-cols-2 gap-4 px-2 w-full">
                    <div v-if="portfolio.client_location" class="flex flex-col items-start justify-center rounded-2xl bg-slate-400 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm dark:text-white ">Client Location</p>
                      <p class="text-base font-medium text-navy-700 text-gray-600">
                          {{portfolio.client_location}}
                      </p>
                    </div>

                    <div v-if="portfolio.tools != null" class="flex flex-col items-start justify-center rounded-2xl bg-slate-400 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm dark:text-white ">Tools</p>
                      <p class="text-base font-medium text-navy-700 text-gray-600">
                          <v-chip
                            v-for="(tool, i) in portfolio.tools"
                            :key="i"
                            outlined
                            class="ma-1"
                          >
                            {{ tool }}</v-chip
                          >
                      </p>
                    </div>
                    <div v-if="portfolio.services != null" class="flex flex-col items-start justify-center rounded-2xl bg-slate-400 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm dark:text-white ">Services</p>
                      <p class="text-base font-medium text-navy-700 text-gray-600">
                          <v-chip
                            v-for="(service, i) in portfolio.services"
                            :key="i"
                            outlined
                            class="ma-1"
                            >{{ service }}
                          </v-chip>
                      </p>
                    </div>
                    <div v-if="portfolio.external_url != null" class="flex flex-col items-start justify-center rounded-2xl bg-slate-400 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm dark:text-white ">External Urls</p>
                      <p class="text-base font-medium text-navy-700 text-gray-600">
                        <v-btn
                          v-for="(url, i) in portfolio.external_url"
                          :key="i"
                          class="ma-1 btn-creator"
                          :href="url.url"
                          target="_href"
                          rounded
                          dark
                          >{{ url.site }}</v-btn
                        >
                         <v-col class="col-12 pl-0">
                          <v-btn class="btn-agency" outlined @click="share"
                            ><v-icon left icon="$share"></v-icon> Share</v-btn
                          >
                        </v-col>
                      </p>
                    </div>
                    <v-col class="col-12 col-lg-8">
                      <PostImages :images="portfolio.images"
                    /></v-col>
                </div>
            </div>  
        </div>
      <!-- <v-sheet
        color="sucess"
        height="100%"
        width="100%"
        rounded="xl"
        class="mx-auto pa-2"
      >
        <v-card class="mx-auto" max-width="100%" max-height="auto" rounded="xl">
          <v-img
            v-if="portfolio.image != null"
            :aspect-ratio="16 / 9"
            width="100%"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>

          <v-card-title>
            <h1 class="text-h4 text-center my-3 mb-4">
              Case Study - {{ portfolio.name }}
            </h1>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col class="col-12">
                <div>
                  <h2 class="font-weight-bold">Name</h2>
                  <h3 class="subtitle-1">{{ portfolio.name }}</h3>
                </div>
              </v-col>

              <v-col class="col-12">
                <div>
                  <h2 class="font-weight-bold">Client Brief</h2>
                  <h3 class="subtitle-1">{{ portfolio.client_brief }}</h3>
                </div>
              </v-col>

              <v-col class="col-12">
                <div>
                  <h2 v-if="portfolio.client_location" class="font-weight-bold">
                    Client Location
                  </h2>
                  <h3 v-if="portfolio.client_location" class="subtitle-1">
                    {{ portfolio.client_location }}
                  </h3>
                </div>
              </v-col>

              <v-col class="col-12">
                <div>
                  <h2 class="font-weight-bold">Project Description</h2>
                  <h3 class="subtitle-1">
                    {{ portfolio.project_description }}
                  </h3>
                </div>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-col v-if="portfolio.tools != null" class="col-12">
            <h2 class="font-weight-bold">Tools</h2>
            <v-chip
              v-for="(tool, i) in portfolio.tools"
              :key="i"
              outlined
              class="ma-1"
            >
              {{ tool }}</v-chip
            >
          </v-col>
          <v-col v-if="portfolio.services != null" class="col-12">
            <h2 class="font-weight-bold">Services</h2>
            <v-chip
              v-for="(service, i) in portfolio.services"
              :key="i"
              outlined
              class="ma-1"
              >{{ service }}
            </v-chip>
          </v-col>
          <v-card-actions>
            <v-col v-if="portfolio.external_url != null" class="col-12">
              <h2 class="font-weight-bold">External Link</h2>
              <v-btn
                v-for="(url, i) in portfolio.external_url"
                :key="i"
                class="ma-1 btn-creator"
                :href="url.url"
                target="_href"
                rounded
                dark
                >{{ url.site }}</v-btn
              >
            </v-col>
            <v-col class="col-12 pl-0">
              <v-btn class="btn-agency" outlined @click="share"
                ><v-icon left icon="share"></v-icon> Share</v-btn
              >
            </v-col>
          </v-card-actions>
        </v-card>
        <v-col class="col-12 col-lg-8">
          <PostImages :images="portfolio.images"
        /></v-col>
      </v-sheet> -->
    </section>
  </v-container>
    
</template>

<script setup>
const route = useRoute();
const { $useFetchApi: useFetchApi } = useNuxtApp();

const portfolio = ref({})

const breadcrumbItems =  [
    {
        text: 'Home',
        disabled: false,
        to: '/',
    },
    {
        text: 'Portfolios',
        disabled: false,
        to: '/portfolio',
        exact: true,
    },
    {
        text: route.params.slug,
        disabled: true,
        to: '',
    },
]


const reactiveQuery = computed(()=> route.query) 
const {pending, data, error, refresh} = await useFetchApi(`${route.params.slug}/portfolio`, {
    query: reactiveQuery,
    lazy:true
})

watch(data, ()=>{
    portfolio.value = data.value.data
})

    // console.log("portfolio", portfolio.value, data.value.data);

watch(reactiveQuery, ()=>{
    refresh()
})

async function share() {
    const shareData = {
        title: portfolio.value.name,
        text: portfolio.value.project_description,
        url: 'https://www.jetpax.org' + route.path,
    }
    try {
    await navigator.share(shareData)
    } catch (err) {
    console.log(err)
    }
}

</script>