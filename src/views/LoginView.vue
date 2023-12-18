<script>

</script>

<template>
  <body id="achtergrond2">
    <!--login-->
    <div class="login">
      <div class="login__layout">
        <div class="login__links">
          <h1>Log in bij lv Visials</h1>

          <!--labels -->
          <form class="logvenin__geges" action="mailto:info@exameples.com?subject=Antwoord op contactformulier" method="post" enctype="text/plain">
            <!--email met placeholder-->
            <label class="login__gegevens__adres__tekst" for="mailadres">Email adres</label>
            <input class="login__gegevens__adres__kader" type="email" id="mailadres" name="mailadres" required minlength="2" maxlength="100" placeholder="Example.info@gmail.com"><br><br>

            <!--wachtwoord-->
            <label class="login__gegevens__wachtwoord__tekst" for="wachtwoord">Wachtwoord</label>
            <input class="login__gegevens__wachtwoord__kader" type="password" id="wachtwoord" name="Wachtwoord" required placeholder="Wachtwoord"><br><br>

            <div class="login__radio__forgot">
              <input type="radio" name="radiobuttons" id="radio1" value="radio1">
              <label for="radio1">Aangemeld blijven?</label>
              <a href="#">Wachtwoord vergeten?</a>
            </div>

            <!--verzenden-->
            <div class="login__sumbit">
              <button type="submit">Log in</button>
            </div>


            <div class="login__signin__more">
              <p>Of aanmelden met:</p>
              <a><i class="fa-brands fa-google"></i></a>
              <a><i class="fa-brands fa-facebook"></i></a>
            </div>
          </form>
        </div>

        <div class="signin__rechts">
          <h1>Hallo daar!</h1>
          <p>Heb je nog geen account? Maak er dan nu één</p>

          <div class="signin__sumbit">
            <button type="submit">Registreer</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
