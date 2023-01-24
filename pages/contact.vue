<template>
  <v-container>
    <!-- Contact Animation here -->
    <v-divider class="mb-4"></v-divider>
    <v-row no-gutters justify="center" class="text-center text-lg-right">
        <v-col cols="12" lg="3">
            <h1 class="text-h2">Contact US</h1>
            <v-divider class="my-2"></v-divider>
            <h2 class="text-h6 mb-4">We are based in the city of joy!</h2>
            <address>
            iotron technologies pvt ltd<br />
            335, Dum Dum Road<br />Kolkata - 74<br />
            WB, India.
            </address>
            <v-divider class="my-2"></v-divider>
            <a href="tel:+91 9046632101">
            <v-icon icon="$phone" color="white" class="mr-2"> </v-icon>
            +91 9046632101
            </a>
            (Mon-Sat 10am-6pm IST)
            <br />
            <a href="mailto:contactus@iotron.co">
            <v-icon icon="$email" color="white" class="mr-2"></v-icon>
            contactus@iotron.co
            </a>
            <v-divider class="my-2"></v-divider>
        </v-col>
        <v-col col="12" lg="6">
            <ContactForm/>
        </v-col>
    </v-row>
  </v-container>

</template>

<script setup>

</script>

<style>

</style>