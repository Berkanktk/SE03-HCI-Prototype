<template>
  <div class="container d-flex align-items-center justify-content-center flex-column">
    <div class="col-12 col-xl-6 col-lg-8 col-md-10 col-sm-12">
      <h1 class="mt-5 mb-5 text-center">FAQ</h1>

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
  metaInfo: {
    title: "Search support guides",
    htmlAttrs: {
      lang: 'da-DK'
    },
    meta: [
      {charset: 'UTF-8'},
      {name: 'description', content: 'Search for support guides'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'keywords', content: 'ticket support search guide'},
      {name: 'audience', content: 'everyone'},
      {name: 'author', content: 'SDU'},
      {name: 'publisher', content: 'SDU'},
    ]
  },
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