<script setup>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";

const id = useRoute().params.id;
const EPISODE_QUERY = gql`
  query {
    episode(id:${id}){
        name
        air_date
        episode
        created
        characters {
          name
          status
          species
          gender
          image
        }
    }
  }
`;

const { result, loading, error } = useQuery(EPISODE_QUERY);
</script>

<template>
  <div class="">
  <section>
    <div class="flex justify-center items-center">
      <div>
        <p class="flex justify-center text-4xl mt-24 pt-12">Episode</p>
        <span class="flex justify-center text-4xl text-blue-400 mb-12"
          >——o——</span
        >
        <div>
          <p class="my-6 text-3xl">Full detail of the episode</p>
          <div class="items-center justify-center">
            <p v-if="error">Something went wrong...</p>
            <p v-if="loading">Loading...</p>
            <div v-else>
              <div class="flex flex-wrap bg-slate-800 p-10 w-[800px] text-2xl mb-4">
                <div class="flex justify-center">
                  <div>
                    Episode Name :
                    <span class="text-blue-400">
                      {{ result.episode.name }}<br
                    /></span>
                    Episode Air_Date :
                    <span class="text-blue-400"
                      >{{ result.episode.air_date }}<br
                    /></span>
                    Episode :
                    <span class="text-blue-400"
                      >{{ result.episode.episode }}<br
                    /></span>
                    Episode Created :
                    <span class="text-blue-400"
                      >{{ result.episode.created }}<br
                    /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
  <p class="ml-96 my-6 text-3xl">All characters in the episode</p>
  <div class="flex justify-center">
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <div class="flex flex-wrap justify-center mx-4" v-else>
      <div
        v-for="char in result.episode.characters"
        :key="char.id"
        class="flex flex-wrap mx-4 bg-slate-800 p-10 w-full md:w-1/2 lg:w-1/3 text-2xl mb-4"
      >
        <div class="flex justify-center w-2/3">
          <div class="text-sm">
            Character Name :
            <span class="text-blue-400"> {{ char.name }}<br /></span>
            Character Status :
            <span class="text-blue-400">{{ char.status }}<br /></span>
            Character Gender :
            <span class="text-blue-400">{{ char.gender }}<br /></span>
            Character Species :
            <span class="text-blue-400">{{ char.species }}<br /></span>
          </div>
        </div>
        <div class="w-1/3">
          <img
            class=""
            :src="char.image"
            :alt="char.name"
          /><br />
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<style></style>
