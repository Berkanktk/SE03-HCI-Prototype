<template>
  <div>
    <div class="mt-4">
      <h4 >PRINT</h4 >
      <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuidePage"
}
</script>

<style scoped>
h4{
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;

  color: #152536;

}

.container{
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.card{
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: absolute;

  width: 1000px;
  height: 558px;
  left: 300px;
  top: 142px;
}

</style>