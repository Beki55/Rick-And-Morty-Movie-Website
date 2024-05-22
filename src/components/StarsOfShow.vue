<template>
  <p class="flex justify-center text-4xl mt-12">Stars of the show</p>
  <span class="flex justify-center text-4xl text-blue-400 mb-24">——o—o——</span>
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
</template>

<script></script>

<style></style>
