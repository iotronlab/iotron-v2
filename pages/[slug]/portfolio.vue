<template>
  <v-container>
    <section v-if="pending">
      <Loading message="Fetching..."/>
    </section>

    <section v-else>
      <Breadcrumb :breadcrumb-items="breadcrumbItems" />

      <v-sheet
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
            <h1 class="text-h4 text-center">
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
      </v-sheet>
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