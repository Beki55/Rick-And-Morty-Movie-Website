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
          <span class="flex justify-center text-4xl text-blue-400 mb-12">——o——</span>
          <div>
            <p class="mb-6 text-2xl">Full detail of the location</p>
            <div class="items-center justify-center">
              <p v-if="error">Something went wrong...</p>
              <p v-if="loading">Loading...</p>
              <div v-else>
                <div class="flex flex-wrap bg-slate-800 p-10 w-[800px] text-2xl mb-4">
                  <div class="flex justify-center">
                    <div>
                      Location Name :
                      <span class="text-blue-400">
                        {{ result.location.name }}<br /></span>
                      Location Type :
                      <span class="text-blue-400">{{ result.location.type }}<br /></span>
                      Location Dimension :
                      <span class="text-blue-400">{{ result.location.dimension }}<br /></span>
                      Location Created :
                      <span class="text-blue-400">{{ result.location.created }}<br /></span>
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
      <div class="container mx-auto">
        <div class="flex justify-center items-center mb-12">
          <div class="text-center">
            <p class="my-6 text-3xl font-semibold">Residents in the Location</p>
          </div>
        </div>
        <div class="flex justify-center">
          <p v-if="error" class="text-red-900">Something went wrong...</p>
          <p v-if="loading" class="text-blue-500">Loading...</p>
          <div v-else class="flex flex-wrap justify-center mx-4">
            <div v-for="loc in result.location.residents" :key="loc.id"
              class="flex flex-col md:flex-row bg-slate-800  p-6 m-4 rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
              <div class="w-full md:w-1/3 mb-4 md:mb-0">
                <img :src="loc.image" alt="Resident Image" class="w-full h-auto rounded-lg" />
              </div>
              <div class="md:w-2/3 md:pl-6">
                <div class="text-lg mb-2">
                  <span>Resident Name : </span>
                  <span class="text-blue-400"> {{ loc.name }} </span>
                </div>
                <div class="text-lg mb-2">
                  <span>Resident Status : </span>
                  <span class="text-blue-400"> {{ loc.status }} </span>
                </div>
                <div class="text-lg mb-2">
                  <span>Resident Species : </span>
                  <span class="text-blue-400"> {{ loc.species }} </span>
                </div>
                <div class="text-lg">
                  <span>Resident Gender : </span>
                  <span class="text-blue-400"> {{ loc.gender }} </span>
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
