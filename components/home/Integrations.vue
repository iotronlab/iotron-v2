<template>
    <v-col cols="12" lg="10" class="mx-auto">
        <h1 class="text-h3">Third Party Integrations</h1>
        <h2 class="text-h6 mt-6">
        Our applications can be
        <strong class="accent--text">integrated</strong> with any
        <strong class="primary--text">third party API</strong> service to provide
        seamless synchronization across all your services. Add the power of the
        <strong class="accent--text">open web</strong> to your application. Some
        of the API services we have worked on
        </h2>
        <div class="box">
            <v-card class="mt-8 py-4 rounded-xl text-center box glass-morph" light>
                <section class="my-6" v-for="(item, i) in items" :key="i">
                <p class="text-h6 font-weight-black">
                    {{ item.name }}
                </p>
                <v-row align="csenter" justify="center" class="text-center">
                    <v-col v-for="(service, j) in item.array" :key="j" cols="6" sm="2">
                    <v-img height="80" contain :src="service.img"></v-img>
                    <p class="text-button font-weight-black">
                        {{ service.name }}
                    </p>
                    </v-col>
                </v-row>
                </section>
            </v-card>
        </div>
  </v-col>
</template>

<script setup>

const items = [
        {
          name: 'Payment Integrations',
          array: [
            {
              name: 'PayPal',
              img: ('/_nuxt/assets/images/integrations/paypal.webp'),
            },

            {
              name: 'Razorpay',
              img: ('/_nuxt/assets/images/integrations/razorpay.webp'),
            },

            {
              name: 'PayU',
              img: ('/_nuxt/assets/images/integrations/payu.webp'),
            },
            {
              name: 'Paytm',
              img: ('/_nuxt/assets/images/integrations/paytm.webp'),
            },
            {
              name: 'Stripe',
              img: ('/_nuxt/assets/images/integrations/stripe.webp'),
            },
          ],
        },
        {
          name: 'Communication Integrations',
          array: [
            {
              name: 'Slack',
              img: ('/_nuxt/assets/images/integrations/slack.webp'),
            },
            {
              name: 'Discord',
              img: ('/_nuxt/assets/images/integrations/discord.webp'),
            },
            {
              name: 'Intercom',
              img: ('/_nuxt/assets/images/integrations/intercom.webp'),
            },
            {
              name: 'Tawk.to',
              img: ('/_nuxt/assets/images/integrations/tawk.webp'),
            },
          ],
        },
        {
          name: 'Courier/Logistics Integrations',
          array: [
            {
              name: 'Shiprocket',
              img: ('/_nuxt/assets/images/integrations/shiprocket.webp'),
            },
            {
              name: 'Pickrr',
              img: ('/_nuxt/assets/images/integrations/pickrr.webp'),
            },
          ],
        },
        {
          name: 'Storage and Analytics Integrations',
          array: [
            {
              name: 'GDrive',
              img: ('/_nuxt/assets/images/integrations/drive.webp'),
            },
            {
              name: 'Amazon s3',
              img: ('/_nuxt/assets/images/integrations/s3.webp'),
            },
            {
              name: 'Firebase',
              img: ('/_nuxt/assets/images/integrations/firebase.webp'),
            },
            {
              name: 'Google Analytics',
              img: ('/_nuxt/assets/images/integrations/ganalytics.webp'),
            },
          ],
        },
      ];

</script>

<style>
.box {
  position: relative;
  z-index: 1;
}

.box::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  filter: blur(7px);
  border-radius: 2%;
  background: linear-gradient(
    -110deg,
    #02f4c8 10%,
    #41bbf6 30%,
    #41bbf6 70%,
    #02f4c8 80%
  );
  background-size: 200% 200%;
  animation: glow 7s linear infinite;
}

@keyframes glow {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 200% 50%;
  }
}
</style>