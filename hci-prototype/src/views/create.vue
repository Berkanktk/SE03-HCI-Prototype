
<template>
        <div class="container">
            <form action="/">
                <fieldset>
                    <legend class="legend">Opret Ticket</legend>

                    <div id="form">
                        <label>Navn</label><br>
                        <input type="text" id="fname" placeholder="Navn" required><br><br>
                    </div>

                    <div id="form">
                        <label>E-mail</label><br>
                        <input type="email" id="email" placeholder="E-mail" required><br><br>
                    </div>
                    

                    <div id="form">
                        <label>Kategori</label><br>
                        <select name="category" id="category" required>
                            <option value="">Vælg Kategori</option>
                            <option value="it">IT</option>
                            <option value="reklamation">Reklamation</option>
                            <option value="Ordre">Ordre</option>
                            <option value="teknisk-support">Teknisk support</option>
                        </select><br><br>
                    </div>

                    <div id="form">
                        <label>Besked</label><br>
                        <textarea name="besked" id="besked" cols="30" rows="10" placeholder="Skriv din besked her" required></textarea><br><br>
                    </div>  

                    <button class="button-afbryd">Afbryd</button>
                    <button class="button-send">Send</button>

                    <br><br>
                </fieldset>
            </form>
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

<style>

     .container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border:1px solid rgb(185, 185, 185);
        border-radius: 10px;
    }

    .button-afbryd {
        background-color:#6C757D;
        border-radius:5px;
        border:1px solid #566963;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
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
        font-family:Arial;
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
</style>
