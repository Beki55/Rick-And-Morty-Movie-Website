<template>
  <nav class="bg-gray-800 fixed w-full top-0 z-10 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-xl font-bold ml-10">
        <router-link to="/" class="text-white">
          Rick And Morty
        </router-link>
      </div>
      <div>
        <ul class="flex space-x-4 mr-12">
          <li>
            <router-link to="/" class="text-white">Home</router-link>
          </li>
          <li>
            <router-link to="/episodeSearch/:id" class="text-white"
              >Episode</router-link
            >
          </li>
          <li>
            <router-link to="/characterSearch/:id" class="text-white"
              >Character</router-link
            >
          </li>
          <li>
            <router-link to="/locationSearch/:id" class="text-white"
              >Location</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style></style>
