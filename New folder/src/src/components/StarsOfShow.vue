<template>
  <div>
    <p class="flex justify-center text-4xl mt-12">Stars of the show</p>
    <span class="flex justify-center text-4xl text-blue-400 mb-24">——o—o——</span>
    <div class="mx-6 md:mx-12 lg:mx-24">
      <swiper
        class="h-96"
        :modules="modules"
        :breakpoints="{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          }
        }"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="">
          <img src="../assets/star/chris parnell.webp" alt="Chris Parnell" class="mx-auto " />
          <p class="text-center mt-2">Chris Parnell</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/star/dan harmon.webp" alt="Dan Harmon" class="mx-auto" />
          <p class="text-center mt-2">Dan Harmon</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/star/echo.jpg" alt="Echo Kellum" class="mx-auto w-72" />
          <p class="text-center mt-2">Echo Kellum</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/star/jhon oliver.webp" alt="John Oliver" class="mx-auto" />
          <p class="text-center mt-2">John Oliver</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/star/justin roiland.webp" alt="Justin Roiland" class="mx-auto" />
          <p class="text-center mt-2">Justin Roiland</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/star/sarah.avif" alt="Sarah Chalke" class="mx-auto w-72" />
          <p class="text-center mt-2">Sarah Chalke</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/star/spencer grammer.webp" alt="Spencer Grammer" class="mx-auto" />
          <p class="text-center mt-2">Spencer Grammer</p>
        </swiper-slide>
        <!-- Additional slides here -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: "App",
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped>

</style>
