import "./assets/main.css";

// import { createApp } from "vue";
// import App from "./App.vue";

// const app = createApp(App);

// app.mount("#app");

import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import router from "../src/router";


import App from "./App.vue";



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
app.use(router);
app.mount("#app");
