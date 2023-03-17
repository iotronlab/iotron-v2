<template>
    <v-col cols="12" lg="10" class="mx-auto">
    <v-row class="text-center" justify="center">
      <v-col v-for="(item, i) in items" :key="i" cols="12" lg="3">
        <h3 class="text-h6 font-weight-black mb-4 mt-2">{{ item.name }}</h3>
        <v-row justify="center" class="text-center" dark>
          <v-col v-for="(service, j) in item.array" :key="j" cols="6" sm="4"
            class="mx-2"
          ><div class="box">
              <v-card class="pa-1 glass-morph box rounded-lg">
                <v-img
                  height="100"
                  contain
                  :src="service.img"
                  :alt="service.name"
                ></v-img
              ></v-card>
            </div>
            <p class="text-body-2 text-uppercase font-weight-black mt-2">
              {{ service.name }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>


const items = [
        {
          name: 'Design Tools',
          array: [
            {
              name: 'Figma',
              img: ('/_nuxt/assets/images/tools/figma.webp'),
            },

            {
              name: 'Adobe XD',
              img: ('/_nuxt/assets/images/tools/xd.webp'),
            },
          ],
        },
        {
          name: 'Client Side Tech',
          array: [
            {
              name: 'Html5',
              img: ('/_nuxt/assets/images/tools/html5.webp'),
            },

            {
              name: 'Css3',
              img: ('/_nuxt/assets/images/tools/css3.webp'),
            },

            {
              name: 'JavaScript',
              img: ('/_nuxt/assets/images/tools/javascript.webp'),
            },
            {
              name: 'VueJS',
              img: ('/_nuxt/assets/images/tools/vue.webp'),
            },

            {
              name: 'ReactJS',
              img: ('/_nuxt/assets/images/tools/react.webp'),
            },
          ],
        },
        {
          name: 'Server Side Tech',
          array: [
            {
              name: 'php',
              img: ('/_nuxt/assets/images/tools/php.webp'),
            },
            {
              name: 'Laravel',
              img: ('/_nuxt/assets/images/tools/laravel.webp'),
            },
            {
              name: 'Python',
              img: ('/_nuxt/assets/images/tools/python.webp'),
            },
            {
              name: 'Django',
              img: ('/_nuxt/assets/images/tools/django.webp'),
            },
            {
              name: 'NodeJS',
              img: ('/_nuxt/assets/images/tools/nodejs.webp'),
            },
            {
              name: 'ExpressJS',
              img: ('/_nuxt/assets/images/tools/express.webp'),
            },
          ],
        },
        {
          name: 'Databases',
          array: [
            {
              name: 'MySQL',
              img: ('/_nuxt/assets/images/tools/sql.webp'),
            },
            {
              name: 'MongoDB',
              img: ('/_nuxt/assets/images/tools/mongodb.webp'),
            },
          ],
        },
        {
          name: 'Deployment Server Stacks',
          array: [
            {
              name: 'Amazon Web Services (AWS)',
              img: ('/_nuxt/assets/images/tools/aws.webp'),
            },
            {
              name: 'Digital Ocean',
              img: ('/_nuxt/assets/images/tools/digitalocean.webp'),
            },
            {
              name: 'Google Cloud Platform (GCP)',
              img: ('/_nuxt/assets/images/tools/googlecloud.webp'),
            },
          ],
        },
      ];


</script>

<style>
ul li{
    list-style-type:disk;
}


.box {
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
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
  filter: blur(3px);
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

.box:hover{
  background: linear-gradient(
    -110deg,
    #02f4c8 20%,
    #41bbf6 10%,
    #41bbf6 50%,
    #02f4c8 20%
  );
  border-radius: 6px;
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