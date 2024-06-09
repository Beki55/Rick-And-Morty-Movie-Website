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
import starss from "../components/StarsOfShow.vue";

const router = useRouter();
const stars = ref(starsDT);

const CHARACTERS_QUERY = gql`
  query {
    episodes {
      results {
        id
        episode
        name
      }
    }
    characters {
      results {
        id
        name
        image
        gender
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
    starss,
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
      class="h-screen bg-cover bg-center bg-[url('../assets/rickmort.jpg')]"
    ></section>

    <section>
      <Description />
    </section>

    <section class="mx-10">
      <Genre />
    </section>

    <section>
      <starss />
    </section>

    <section id="E">
      <div>
        <p class="flex justify-center text-4xl mt-12">Episodes</p>
        <span class="flex justify-center text-4xl text-blue-400 mb-24"
          >—o—o—</span
        >
        <p class="text-5xl ml-10 mb-8">All episodes</p>
        <div class="mx-6 md:mx-12 lg:mx-24">
          <p v-if="error">Something went wrong...</p>
          <p v-if="loading">Loading...</p>
          <p v-else>
            <swiper
              :modules="modules"
              :breakpoints="{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }"
              navigation
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide
                v-for="episode in result.episodes.results"
                :key="episode.id"
                class="ml-2 md:ml-4 lg:ml-10"
              >
                <router-link
                  :to="{ name: 'episode', params: { id: episode.id } }"
                >
                  <div class="text-white mx-auto">
                    <img
                      class="mx-auto"
                      src="../assets/images (3).jfif"
                      alt=""
                    />
                    <br />
                    <h3 class="text-lg md:text-xl mx-24">
                      {{ episode.episode }}
                    </h3>
                    <br />
                    <h3 class="text-lg md:text-xl mx-24">{{ episode.name }}</h3>
                    <i class="fas fa-film mx-24"></i>
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

        <div class="mx-6 md:mx-12 lg:mx-24">
          <p v-if="error">Something went wrong...</p>
          <p v-if="loading">Loading...</p>
          <p v-else>
            <swiper
              class="h-[96]"
              :modules="modules"
              :breakpoints="{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }"
              navigation
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide
                v-for="character in result.characters.results"
                :key="character.id"
                class="ml-2 md:ml-4 lg:ml-10 mx-24"
              >
                <router-link
                  :to="{ name: 'character', params: { id: character.id } }"
                >
                  <img class="cursor-pointer" :src="character.image" alt="" />
                  <h3 class="text-2xl ml-4 mb-6">{{ character.name }}</h3>
                  <h3 class="text-xl ml-4 mb-6">
                    Gender : {{ character.gender }}
                  </h3>
                </router-link>
              </swiper-slide>
            </swiper>
          </p>
        </div>
      </div>
    </section>

    <section id="L">
      <div>
        <p class="flex justify-center text-4xl mt-12">Locations</p>
        <span class="flex justify-center text-4xl text-blue-400 mb-24"
          >—o—o—</span
        >
        <p class="text-5xl ml-10 mb-8">All locations</p>
        <div class="mx-6 md:mx-12 lg:mx-24">
          <p v-if="error">Something went wrong...</p>
          <p v-if="loading">Loading...</p>
          <p v-else>
            <swiper
              :modules="modules"
              :breakpoints="{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 8,
                  spaceBetween: 40,
                },
              }"
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
                class="ml-2 md:ml-4 lg:ml-6 xl:ml-10"
              >
                <router-link
                  :to="{ name: 'location', params: { id: location.id } }"
                >
                  <div class="text-white justify-center mx-24">
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

    <section class="justify-between">
      <div class="md:flex md:flex-col lg:flex-row">
        <Creators />
        <Rating />
      </div>
    </section>
  </div>
</template>
