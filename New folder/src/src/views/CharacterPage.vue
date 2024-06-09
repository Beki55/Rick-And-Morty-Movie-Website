<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";


const id = useRoute().params.id;
const characterQuery = gql`
  query {
    character(id:${id}){
      name
      status
      gender
      species
      image
      episode{
        id
        name
        air_date
        episode
        created
      }
      location{
        name
      }
    }
  }
`;

const { result, error, loading } = useQuery(characterQuery);
</script>

<template>
  <section>
    <div class="flex justify-center items-center">
      <div>
        <p class="flex justify-center text-4xl mt-24 pt-12">Characters</p>
        <span class="flex justify-center text-4xl text-blue-400 mb-12"
          >——o——</span
        >
        <div>
          <div class="items-center justify-center">
            <p v-if="error">Something went wrong...</p>
            <font-awesome-icon v-if="loading" :icon="['fas', 'spinner']" spin />
            <div v-else>
              <div class="flex flex-wrap bg-slate-800 p-10 w-[800px] text-2xl mb-4">
                <div class="flex justify-center w-2/3">
                  <div>
                    Character Name :
                    <span class="text-blue-400">
                      {{ result.character.name }}<br
                    /></span>
                    Character Status :
                    <span class="text-blue-400"
                      >{{ result.character.status }}<br
                    /></span>
                    Character Gender :
                    <span class="text-blue-400"
                      >{{ result.character.gender }}<br
                    /></span>
                    Character Species :
                    <span class="text-blue-400"
                      >{{ result.character.species }}<br
                    /></span>
                    <p class="text-lg mt-12">
                      location:
                      <span class="text-blue-400"
                        >( {{ result.character.location.name }} )
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="w-1/3">
                  <img
                    class="h-fit"
                    :src="result.character.image"
                    alt="{{ result.character.name }} Photo"
                  /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div></div>
  </section>

  <section>
    <div class="">
      <div class="justify-center">
        <p class="m-10 mt-24 text-4xl">Episodes the character participated</p>
        <p v-if="error">Something went wrong...</p>
        <p v-if="loading">Loading...</p>
        <div class="flex flex-wrap justify-center mb-8" v-else>
          <div class="flex flex-wrap w-auto mx-10">
            <div
              class="flex flex-wrap m-4"
              v-for="epi in result.character.episode"
              :key="epi.id"
            >
              <div class="flex justify-center">
                <div class="text-sm w-[300px]">
                  Episode Name :
                  <span class="text-blue-400"> {{ epi.name }}<br /></span>
                  Episode Episode :
                  <span class="text-blue-400">{{ epi.episode }}<br /></span>
                  Episode AirDate :
                  <span class="text-blue-400">{{ epi.air_date }}<br /></span>
                  Episode Created :
                  <span class="text-blue-400">{{ epi.created }}<br /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
