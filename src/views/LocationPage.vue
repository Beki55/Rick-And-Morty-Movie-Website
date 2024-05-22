<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";

const id = useRoute().params.id;
const locationQuery = gql`
  query {
    location(id:${id}){
	  name
      type
      dimension
      created
      residents{
        name
        status
        species
        gender
        image
      }
    }
  }
`;

const { result, error, loading } = useQuery(locationQuery);
</script>

<template>
  <div>
    <section>
      <div class="flex justify-center items-center">
        <div>
          <p class="flex justify-center text-4xl mt-24 pt-12">Location</p>
          <span class="flex justify-center text-4xl text-blue-400 mb-12"
            >——o——</span
          >
          <div>
            <p class="mb-6 text-2xl">Full detail of the location</p>
            <div class="items-center justify-center">
              <p v-if="error">Something went wrong...</p>
              <p v-if="loading">Loading...</p>
              <div v-else>
                <div
                  class="flex flex-wrap bg-black p-10 w-[800px] text-2xl mb-4"
                >
                  <div class="flex justify-center">
                    <div>
                      Location Name :
                      <span class="text-red-400">
                        {{ result.location.name }}<br
                      /></span>
                      Location Type :
                      <span class="text-red-400"
                        >{{ result.location.type }}<br
                      /></span>
                      Location Dimension :
                      <span class="text-red-400"
                        >{{ result.location.dimension }}<br
                      /></span>
                      Location Created :
                      <span class="text-red-400"
                        >{{ result.location.created }}<br
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
      <div class="flex justify-center items-center mb-48">
        <div class="items-center justify-center">
          <p class="my-6 ml-24 text-2xl">Residents in the location</p>
          <p v-if="error">Something went wrong...</p>
          <p v-if="loading">Loading...</p>
          <div class="h-96 overflow-y-auto mx-24" v-else>
            <div
              v-for="loc in result.location.residents"
              :key="loc.id"
              class="flex flex-wrap bg-black p-10 w-[800px] text-2xl mb-4"
            >
              <div class="w-1/4">
                <img :src="loc.image" alt="" />
              </div>
              <div class="flex justify-center w-3/4">
                <div>
                  Resident Name :
                  <span class="text-red-400"> {{ loc.name }}<br /></span>
                  Resident Status :
                  <span class="text-red-400">{{ loc.status }}<br /></span>
                  Resident Species :
                  <span class="text-red-400">{{ loc.species }}<br /></span>
                  Resident Gender :
                  <span class="text-red-400">{{ loc.gender }}<br /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
