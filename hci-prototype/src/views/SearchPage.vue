<template>
  <div class="container d-flex align-items-center justify-content-center flex-column">
    <div class="col-lg-6 col-md-8 col-sm-10">
      <h1 class="mt-5 mb-5">FAQ</h1>

      <div class="d-flex align-items-center input-group flex-row mb-4">
        <input v-model="searchTerm" placeholder="Søg" type="text" class="form-control" />
        <button v-on:click="search(searchTerm)" class="btn btn-primary d-flex align-items-center text-center">
          <span class="material-icons-round">arrow_forward</span>
        </button>
      </div>

      <div class="p-3 border rounded w-100 text-start">
        <div v-if="results">

          <div v-for="(item, index) in results" :key="item.name">
            <h2>{{item.name}}</h2>
            <p>{{item.description}}</p>
            <hr v-if="index != results.length - 1">
          </div>

        </div>

        <div v-else>

          <h2 class="">Ofte spurgt</h2>
          <hr>
          <ul>
            <li>
              <router-link to=".">
                Hvordan returnerer jeg en pakke?
              </router-link>
            </li>
            <li>
              <router-link to=".">
                Hvor lang tid tager levering?
              </router-link>
            </li>
            <li>
              <router-link to=".">
                Pris på abonnement?
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      searchTerm: '',
      results: null,
    }
  },
  methods: {
    search : function (searchTerm) {
      if (searchTerm) {
        this.results = [
          {
            name: "Print ordre liste",
            description: "For at printe en ordre liste...",
          },
          {
            name: "Print ordre label",
            description: "For at printe en ordre label...",
          }
        ]
      } else {
        this.results = null;
      }
    }
  }
}
</script>

<style scoped>

</style>