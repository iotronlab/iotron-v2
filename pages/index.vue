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

      <LazyHomeIntegrations />

        <h1 class="text-h3 text-center mt-12">Tools of the trade</h1>
        <v-col cols="12" lg="10" class="mx-auto">
          <section ref="wrapper" class="demo-text">
            <div ref="wraptext" class="text-h1"></div>
          </section>
          <h2 class="text-h6 mt-6">
            We are on a journey to acquire new skills and upgrade existing ones.
            While on this journey, we have embraced the power of the
            <strong class="accent--text">open web</strong> to affect the maximum
            number of lives in the modern world. But we are always open to exploring
            new possibilities and working with
            <strong class="primary--text">new technologies.</strong>
          </h2>
        </v-col>      
        <v-row no-gutters style="position: relative">
          <v-col cols="12"><LazyHomeTools /></v-col>
        </v-row>
    </v-col></v-img>
  <!-- <LazyHomeDevices /> -->

</template>

<script>
export default {};
</script>

<style>

</style>
