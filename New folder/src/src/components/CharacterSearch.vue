<template>
  <section>
    <div class="my-48 flex justify-center">
      <div>
        <p class="text-3xl mb-4 ml-4">
          Enter the id of character you want to search
        </p>

        <input
          v-model="searchQuery"
          @keyup.enter="handleSearchInput"
          class="m-4 shadow-lg border rounded-3xl w-[650px] py-2 px-3 text-gray-700 pl-10"
          type="text"
          placeholder="type 1,2,3..."
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearchInput() {
      // Assuming the ID should be a number
      const id = parseInt(this.searchQuery, 10);

      // Check if the parsed ID is a valid number and greater than 0
      if (!isNaN(id) && id > 0) {
        // Push the route with the ID
        this.$router.push({ name: "character", params: { id: id } });
      } else {
        // Optionally handle invalid input
        alert("Please enter a valid episode ID");
      }
    },
  },
};
</script>

<style></style>
