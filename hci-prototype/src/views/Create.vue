
<template>

  <div class="box">
    <div class="container d-flex justify-content-center">
      <form action="/">
        <fieldset>
          <legend class="legend">Opret Ticket</legend>

          <hr>

          <div id="form">
            <label>Navn</label><br>
            <input class="custom" type="text" id="fname" placeholder="Navn" required><br><br>
          </div>

          <div id="form">
            <label>E-mail</label><br>
            <input class="custom" type="email" id="email" placeholder="E-mail" required><br><br>
          </div>


          <div id="form">
            <label>Kategori</label><br>
            <select class="custom" name="category" id="category" required>
              <option value="">Vælg Kategori</option>
              <option value="it">IT</option>
              <option value="reklamation">Reklamation</option>
              <option value="Ordre">Ordre</option>
              <option value="teknisk-support">Teknisk support</option>
            </select><br><br>
          </div>

          <div id="form">
            <label>Besked</label><br>
            <textarea class="custom" name="besked" id="besked" cols="40" rows="5" placeholder="Skriv din besked her" required></textarea><br><br>
          </div>


          <div id="buttons">
            <button class="button-afbryd" to="/">Afbryd</button>
            <button class="button-send">Send</button>
          </div>

          <br><br>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.box{
  margin-top: 20px;
}

#buttons{
  float: right;
}

.container {
  padding: 20px;
  margin: auto;
  width: fit-content;
  border:1px solid rgb(185, 185, 185);
  border-radius: 10px;
  box-sizing: border-box;
}

.button-afbryd {
  background-color:#6C757D;
  border-radius:5px;
  border:1px solid #566963;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-size:15px;
  font-weight:bold;
  padding:9px 20px;
  text-decoration:none;
}

.button-afbryd:hover {
  background-color:#df7171;
}

.button-afbryd:active {
  position:relative;
  top:1px;
}

.button-send {
  background-color: #7749f8;
  border-radius:5px;
  border:1px solid #566963;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-size:15px;
  font-weight:bold;
  padding:9px 20px;
  text-decoration:none;
}

.button-send:hover {
  background-color: #8960fb;
}

.button-send:active {
  position:relative;
  top:1px;
}

.legend{
  font-weight: bold;
  font-size: larger;
}

button {
  margin-right: 5px;
}

.custom {
  width: 300px;
  padding: 5px;
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  background-color: white;
  box-shadow: 5px 5px 5px #aaaaaa;
}

</style>
