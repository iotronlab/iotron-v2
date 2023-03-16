<template>
  <div class="rounded-lg  overflow-hidden shadow divide-y-2 divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
    <div v-for="(service, serviceIdx) in services" :key="serviceIdx" :class="[serviceIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', serviceIdx === 1 ? 'sm:rounded-tr-lg' : '', serviceIdx === services.length - 2 ? 'sm:rounded-bl-lg' : '', serviceIdx === services.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500']">
      <div class="mt-8">
        <h2 class="text-lg font-medium">
          <div class="focus:outline-none">
            <span class="absolute inset-0 " aria-hidden="true">
                <b>{{ service.title }}</b>
            </span>
          </div>
        </h2>
        <div class="mt-2 text-sm" v-html="service.text"></div>
        <div class="mt-2 text-sm">
            <ul class="font-weight-bold pa-2 mt-3 ml-3">
                <li v-for="(sub, i) in service.services" :key="i" class="text-left ml-4">
                    {{ sub }}
                </li>
            </ul>
        </div>
        <button type="button" class="mx-8 hover:cursor-pointer inline-flex items-start px-6 py-3 border shadow-lg text-base font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Get a Quote</button>
      </div>
    </div>
  </div>
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