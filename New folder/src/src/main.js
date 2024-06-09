import "./assets/main.css";

// import { createApp } from "vue";
// import App from "./App.vue";

// const app = createApp(App);

// app.mount("#app");

import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import router from "../src/router";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from "./App.vue";

library.add(faSpinner);


const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://rickandmortyapi.com/graphql",
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount("#app");
