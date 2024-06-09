<template>
  <div class="mx-6 md:mx-16 lg:mx-24 flex flex-col lg:flex-row mt-10">
    <div class="w-full lg:w-1/4 flex flex-col items-center lg:items-start lg:ml-12">
      <img
        class="hover:scale-110 transition-transform duration-300 mt-12 lg:mt-48"
        src="../assets/image.jpg"
        alt="Rick and Morty"
      />
      <button class="bg-red-900 rounded-lg p-2 w-48 mt-2">
        Add to cart
      </button>
      <button class="bg-red-900 rounded-lg p-2 w-48 mt-2">
        Your favourite
      </button>
      <button class="bg-red-900 rounded-lg p-2 w-48 mt-2">TV Show</button>
      <button class="bg-red-900 rounded-lg p-6 w-48 mt-8 lg:mt-32">
        Scientific fiction
      </button>
    </div>
    <div class="w-full lg:w-3/4 lg:ml-12">
      <div class="mb-12 lg:mb-24">
        <p id="desc" class="flex justify-center text-3xl lg:text-4xl mt-2">Description</p>
        <span class="flex justify-center text-2xl lg:text-4xl text-blue-400 mb-12 lg:mb-24">——o—o——</span>
        <p class="mt-2 flex items-center text-2xl lg:text-3xl">Rick and Morty</p>
        <button class="float-right bg-red-900 rounded-lg p-2 lg:p-4">
          + Add to favourite
        </button>
      </div>
      <div>
        <p>
          Rick and Morty is the Emmy award-winning half-hour animated hit comedy
          series on Adult Swim that follows a sociopathic genius scientist who
          drags his inherently timid grandson on insanely dangerous adventures
          across the universe.
        </p>
        <div class="flex flex-col md:flex-row">
          <p class="w-full md:w-1/2 my-10 lg:my-20">
            Country : United States <br />
            Genre : Drama, Science Fiction<br />
            Date Release : September 4, 2015 (United Kingdom) <br />
            Production companies : Williams Street, Harmonious Claptrap, Starburns
            Industries<br />
            Cast : Tim Robbins, Rebecca Ferguson, Avi Nash, <br />Rashida Jones,
            David Oyelowo, Tim Robbins
          </p>
        </div>
        <p class="text-xl lg:text-2xl mb-4">Story line</p>
        <p>
          The series follows Rick Sanchez, an alcoholic, nihilistic
          super-scientist, and his easily distressed grandson, Morty Smith to
          parallel dimensions and exotic planets with extraterrestrials. These
          adventures commonly cause trouble for Morty's family—Jerry, Beth, and
          Summer—who are often dragged along as well.
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style></style>
