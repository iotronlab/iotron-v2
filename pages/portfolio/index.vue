<template>
    <div>
        <v-container fluid>
            <section v-if="pending">
                <loading message="Fetching Portfolios"/>
            </section>
            <section v-else-if="errorMessage != null">
                <lazy-fetch-error />
            </section>
            <section v-else>
                <v-row no-gutters justify="center" align="center" class="mt-16 grid">
                    <v-col cols="12" sm="6">
                        <lazy-breadcrumb :breadcrumb-items="breadcrumbItems"/>
                        <h1 class="el text-h3 font-weight-black">Case Studies</h1>
                    </v-col>
                    <v-btn class="el ma-2" text>
                        Filter <v-icon icon="$filter" right></v-icon>
                    </v-btn>
                </v-row>
                <section v-if="portfolios.length < 1">
                    <v-card height="480" rounded="xl" class="text-center">
                        <h1 class="text-body-1 pa-2 pt-4">
                            There is no data in your portfolio.
                        </h1>
                    </v-card>
                </section>
                <section v-else>
                    <div class="mx-auto pa-0 mt-16 cardContainer">
                        <!-- <v-row class="d-flex justify-center"> -->
                            <div
                            v-for="(portfolio, i) in portfolios"
                            :key="i"
                            class="ma-4"
                            >
                            <NuxtLink :to="{ path: `/${portfolio.url}/portfolio` }" :aria-label="portfolio.name">
                                <LazyPortfolioCard :portfolio="portfolio" />
                            </NuxtLink>
                        </div>
                        <!-- </v-row> -->
                    </div>
                    <div class="text-center">
                        <v-pagination
                            v-model="pageData.current_page"
                            :length="pageData.last_page"
                            total-visible="10"
                            @input="updateQuery(pageData.current_page)"
                        ></v-pagination>
                        </div>
                </section>
            </section>
        </v-container>
    </div>
</template>

<script setup>
const portfolios = ref([]);
const pageData = ref({});
const errorMessage = ref(null);

const route = useRoute();
const { $useFetchApi: useFetchApi } = useNuxtApp();

useHead({
    title: "Portfolios"
})

const breadcrumbItems = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/',
    },
    {
        text: 'Portfolio',
        disabled: true,
        to: 'portfolio',
    },
])

const reactiveQuery = computed(()=> route.query) 
const {pending, data, error, refresh} = await useFetchApi("portfolios", {
    query: reactiveQuery,
    lazy:true
})

watch(data, ()=>{
    portfolios.value = data.value.data,
    pageData.value = data.value.meta
})


watch(reactiveQuery, ()=>{
    refresh()
})
// console.log("portfolios", portfolios.value, data.value.data);

</script>


<style>
    .cardContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>