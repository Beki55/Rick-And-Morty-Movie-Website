<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import VueAIcarousel from "vue-ai-carousel";
import starsDT from "../data.json";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Description from "../components/Description.vue";
import Genre from "../components/Genre.vue";
import Creators from "../components/Creaters.vue";
import Rating from "../components/Rating.vue";

const router = useRouter();
const stars = ref(starsDT);

const CHARACTERS_QUERY = gql`
  query {
    episodes {
      results {
        id
        name
      }
    }
    characters {
      results {
        id
        name
        image
      }
    }
    locations {
      results {
        id
        name
        dimension
      }
    }
  }
`;

export default {
  components: {
    VueAIcarousel,
    Swiper,
    SwiperSlide,
    Description,
    Genre,
    Creators,
    Rating,
  },

  name: "App",
  setup() {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      result,
      loading,
      error,
      stars,
      router,
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<template>
  <div>
    <section
      class="h-screen bg-cover bg-[url('../assets/rickmort.jpg')]"
    ></section>

    <section>
      <Description />
    </section>

    <section class="mx-10">
      <Genre />
    </section>

    <section>
      <p class="flex justify-center text-4xl mt-12">Stars of the show</p>
      <span class="flex justify-center text-4xl text-blue-400 mb-24"
        >——o—o——</span
      >
      <div class="mx-24">
        <swiper
          class="h-72"
          :modules="modules"
          :slides-per-view="5"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <img src="../assets/star/chris parnell.webp" alt="star.name" />
            <p>Chris Parnell</p>
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/star/dan harmon.webp" alt="star.name" />
            <p>Dan Harmon</p>
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/star/echo.jpg" alt="star.name" />
            <p>Echo Kellum</p>
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/star/jhon oliver.webp" alt="star.name" />
            <p>Jhon Oliver</p>
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/star/justin roiland.webp" alt="star.name" />
            <p>Justin Roiland</p>
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/star/sarah.avif" alt="star.name" />
            <p>Sarah Chalke</p>
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/star/spencer grammer.webp" alt="star.name" />
            <p>Spencer Grammer</p>
          </swiper-slide>
          ...
        </swiper>
      </div>
    </section>

  
    <section id="E">
      <div>
        <p class="flex justify-center text-4xl mt-12">Episodes</p>
        <span class="flex justify-center text-4xl text-blue-400 mb-24"
          >—o—o—</span
        >
        <p class="text-5xl ml-10 mb-8">All episodes</p>
        <div class="mx-24">
          <p v-if="error">Something went wrong...</p>
          <p v-if="loading">Loading...</p>
          <p v-else>
            <swiper
              :modules="modules"
              :slides-per-view="6"
              :space-between="50"
              navigation
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide
                v-for="episode in result.episodes.results"
                :key="episode.id"
                class="ml-10"
              >
                <router-link
                  :to="{ name: 'episode', params: { id: episode.id } }"
                >
                  <div class="text-white">
                    <img class="w-96" src="../assets/images (3).jfif" alt="" />
                    <br />
                    <h3>{{ episode.episode }}</h3>
                    <br />
                    <h3>{{ episode.name }}</h3>
                    <i class="fas fa-film"></i>
                  </div>
                </router-link>
              </swiper-slide>
              ...
            </swiper>
          </p>
        </div>
      </div>
    </section>

    <section id="C">
      <div>
        <p class="flex justify-center text-4xl mt-12">Characters</p>
        <span class="flex justify-center text-4xl text-blue-400 mb-24"
          >—o—o—</span
        >
        <p class="text-5xl ml-10 mb-8">All characters</p>

        <div class="mx-24">
          <p v-if="error">Something went wrong...</p>
          <p v-if="loading">Loading...</p>
          <p v-else>
            <swiper
              class="h-72"
              :modules="modules"
              :slides-per-view="6"
              :space-between="50"
              navigation
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide
                v-for="character in result.characters.results"
                :key="character.id"
                class="ml-10"
              >
                <router-link
                  :to="{ name: 'character', params: { id: character.id } }"
                >
                  <img class="cursor-pointer" :src="character.image" alt="" />
                  <h3 class="text-2xl ml-4 mb-6">{{ character.name }}</h3>
                </router-link>
              </swiper-slide>
              ...
            </swiper>
          </p>
        </div>
      </div>
    </section>

    <section id="L">
      <div>
        <p class="flex justify-center text-4xl mt-12">locations</p>
        <span class="flex justify-center text-4xl text-blue-400 mb-24"
          >—o—o—</span
        >
        <p class="text-5xl ml-10 mb-8">All locations</p>
        <div class="mx-24">
          <p v-if="error">Something went wrong...</p>
          <p v-if="loading">Loading...</p>
          <p v-else>
            <swiper
              :modules="modules"
              :slides-per-view="8"
              :space-between="50"
              navigation
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="mySwiper"
            >
              <swiper-slide
                v-for="location in result.locations.results"
                :key="location.id"
                class="ml-10"
              >
                <router-link
                  :to="{ name: 'location', params: { id: location.id } }"
                >
                  <div class="text-white">
                    <h3>{{ location.id }}</h3>
                    <br />
                    <h3>{{ location.name }}</h3>
                    <br />
                    <h3>
                      {{ location.dimension }}
                      <i class="fas fa-map-marker-alt"></i>
                    </h3>
                  </div>
                </router-link>
              </swiper-slide>
            </swiper>
          </p>
        </div>
      </div>
    </section>

    <section class="ml-10">
      <div class="flex">
        <Creators />
        <Rating />
      </div>
    </section>
  </div>
</template>
