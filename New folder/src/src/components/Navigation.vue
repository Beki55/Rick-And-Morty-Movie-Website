<template>
  <nav class="bg-gray-800 fixed w-full top-0 z-10 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-xl font-bold ml-10">
        <router-link to="/" class="text-white">
          Rick And Morty
        </router-link>
      </div>
      <div class="block lg:hidden">
        <button id="menu-button" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div class="hidden lg:block">
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
    <div id="mobile-menu" class="hidden lg:hidden">
      <ul class="flex flex-col space-y-2 mt-4 ml-10">
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
  </nav>
</template>

<script>
export default {
  mounted() {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
