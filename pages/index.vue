<template>
  <v-img src="/_nuxt/assets/images/gradient.png" cover>
    <v-col cols="12" lg="10" class="mx-auto">

      <h1 class="text-h4 text-sm-h3 text-center">
        <span> <b class="accent--text">ideas</b> that </span>

        <span class="font-weight-black accent--text landing-text">connect</span>
        <!-- <div class="text primary--text"></div> -->
      </h1>
      <v-row no-gutters align="center" justify="center">
        <v-col cols="5">
          <HomeTyped />
        </v-col>
        <v-col cols="7">

          <HomeAnimation />


          <!-- <img src="~/assets/images/gradient.svg" alt="Discover Nuxt 3" /> -->
          <!-- <HomeAnimation /> -->

        </v-col>

      </v-row>

      <v-row no-gutters class="mt-10">
        <HomeServices />
      </v-row>
    </v-col></v-img>
  <!-- <LazyHomeDevices /> -->

</template>

<script>
export default {};
</script>

<style>

</style>
