<template>
  <div>
    <b-navbar class="navbar" >
      <b-navbar-brand to="/">Ticketo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/create-form">Opret ticket</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Søg"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Søg</b-button>
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
@import url('https://fonts.googleapis.com/css?family=Inter');

.form-inline{
  display: flex;
}
a.navbar-brand{
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: white;

}
a.nav-link{
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  color: white;
  background-color: white;
  border-radius: 4px;
  color: #7749F8;
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
}
</style>