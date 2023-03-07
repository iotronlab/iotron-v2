<template>
    <div class="portfolioCard">
        <div href="#" class="px-4 py-5 sm:px-6 rounded-lg">
            <img
                alt="Portfolio"
                :src="
                    portfolio.image !== null
                        ? portfolio.image
                        : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
                    "
                class="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 dark:text-slate-50 sm:text-xl">
                {{ portfolio.name }}
            </h3>

            <p class="mt-2 max-w-sm text-gray-700  dark:text-slate-200">
                {{portfolio.client_brief}}
            </p>
                <button type="button" class=" my-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium  rounded-lg text-sm px-5 py-2.5 text-center mr-2 br-2">
                    View Details
                </button>
        </div>
                    <!-- :to="{
                name: 'portfolio-slug',
                params: {
                slug: portfolio.url,
                },
            }" -->
    </div>
</template>

<script setup>

const props = defineProps({
    portfolio : {
        type: Object,
        required: true
    }
});

// console.log(portfolio);

</script>

<style>
    .portfolioCard{
        width: 50vh;        
    }
</style>