<template>
  <div>
    <b-navbar class="navbar" >
      <b-navbar-brand href="#">Ticketo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Opret ticket</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Søg"></b-form-input>
            <b-button size="lg" class="my-2 my-sm-0" type="submit">Søg</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

.form-inline{
  display: flex;
}

.mr-sm-2{
  margin-right: 8px;
}
.my-sm-0{
  background-color: #7749F8;
  border-color: #ffffff;
}
.navbar{
  padding:12px;
  background-color: #7749F8;
  border-radius: 4px;

}
</style>