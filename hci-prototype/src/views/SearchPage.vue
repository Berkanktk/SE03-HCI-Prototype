<template>
  <div class="container d-flex align-items-center justify-content-center flex-column">
    <h1 class="mt-5 mb-5">FAQ</h1>

    <div class="d-flex align-items-center input-group flex-row">
      <input v-model="searchTerm" placeholder="Search" type="text" class="form-control" />
      <button class="btn btn-primary d-flex align-items-center text-center">
        <span class="material-icons-round">arrow_forward</span>
      </button>
    </div>

    <p>Snickers</p>

    <p>Le message est : {{ searchTerm }}</p>

  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      searchTerm: '',
    }
  }
}
</script>

<style scoped>



</style>