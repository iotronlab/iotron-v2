<template>
  <v-col cols="12" lg="10" class="mx-auto">
    <h2 class="text-h4 quote" style="overflow: hidden">
      Our services
      <br />
      Our Diverse Solutions covering the diverse needs of a Modern Business.
    </h2>
    <v-row no-gutters class="text-center">
      <v-col
        v-for="(item, i) in services"
        :key="i"
        cols="12"
        sm="6"
        lg="3"
        class="pa-1"
      >
        <h2 class="text-h5 primary--text my-4">
          {{ item.title }}
        </h2>
      </v-col>
    </v-row>

    <v-divider class="my-2" />

    <v-row no-gutters justify="center">
      <v-col v-for="(item, i) in services" :key="i" cols="12" sm="6" class="pa-1">
        <v-card rounded="xl" class="bg-transparent">
          <v-card-title
            class="text-h5 font-weigh
            t-black"
            style="word-break: normal"
          >
          <b>{{ item.title }}</b>
          </v-card-title>
          <v-card-text class="text-body-1">
            <p v-html="item.text"></p>
            <ul class="font-weight-bold my-2 mx-6">
              <li v-for="(service, i) in item.services" :key="i">
                {{ service }}
              </li>
            </ul>

            <!-- <v-btn
                  class="mt-6"
                  rounded
                  color="accent"
                  :class="{ 'on-hover': hover }"
                  outlined
                >
                  <v-icon left> mdi-phone-message </v-icon> Drop an inquiry
                </v-btn> -->
            <v-btn class="nucard mt-4" text color="accent" rounded
              >Get a Quote</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>
<script setup>
const services = [
    {
        title: 'UI/UX Design',
        text: `Our UI/UX Design team creates an <strong class="accent--text">interactive prototype</strong> of your application through a five-step process that repeats itself until we achieve perfection.
          We work on softwares like <strong class="primary--text">Adobe XD, FIGMA</strong> and with Design Systems like <strong class="accent--text">Material Design (Google), Fluent (Microsoft), HIG (Apple)</strong>
          to design applications that seamlessly adapt to your target platform.`,
        services: [
            'Product Definition',
            'Product Research',
            'User Analysis',
            'Prototype Design',
            'Prototype Validation',
        ],


    },
    {
        title: 'Websites/Progressive Web Applications',
        text: `Progressive Web Apps(PWA) are suitable for applications aiming to <strong class="accent--text">co-exist</strong> on the <strong class="primary--text">web</strong>
          and native platforms like <strong class="primary--text">Android, Windows, and iOS</strong>. Applications may vary from simple systems like portfolios, blogs to more complex systems like social media,
          online stores, eCommerce, CMS, video conferencing, etc. We listed some of the tech stacks used in our applications below.`,
        services: [
            'MERN (React JS)',
            'MEVN (Vue JS)',
            'JAMSTACK (API)',
            'LAMP (Laravel)',
            'Python (Django)',
        ],

    },
    {
        title: 'Enterprise Resource Planning (ERP)',
        text: `Applications to <strong class="accent--text">manage, regulate or automate</strong> at various levels of the <strong class="primary--text">business process</strong> and
          <strong class="primary--text">after-sales</strong>.
        As <strong class="primary--text"><i>modern enterprises</i></strong> have become more complex with more problems and people to deal with,
        it is important to integrate the latest technologies into the system in order to <span class="accent--text">
        optimize</span> the business at every level.`,
        services: [
            'Accounting and Financial Management (AFM)',
            'Customer Relationship Management (CRM)',
            'Supplier Relationship Management (SRM)',
            'Business Intelligence (BI)',
            'Human Resources (HR)',
            'Product Lifecycle Management (PLM)',
            'Supply Chain Management (SCM)',
        ],

    },

    {
        title: 'AI Based Solutions',
        text: `We use Artificial Intelligence (AI) and Machine Learning (ML) to <strong class="accent--text">automate repetitive tasks, better organize business processes,
          and build a personalized customer experience</strong>. Get that edge in innovation to differentiate from the competition. Proven solutions to boost
          sales through <strong class="primary--text">customer engagement, AI assisted search, and feedback analysis</strong>. We work on technologies like <strong class="accent--text">PyTorch, Tensorflow</strong> to build neural networks.`,
        services: [
            'AI Chatbot',
            'Voice Search',
            'Image Search',
            'Customer Behavior Analysis',
            'Customer Feedback Analysis (NLP)',
        ],

    },
];
</script>

<style scoped>
.v-btn {
  box-shadow: 0 0 10px 0 rgba(178 255 89 80%) !important;
  transition: all 0.3s ease 0s;
}

.v-btn.on-hover {
  letter-spacing: 0.15em;
  color: greenyellow;
}

.show-btns {
  color: rgba(255 255 255 100%) !important;
}
</style>