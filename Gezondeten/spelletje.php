<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gezond eten: Spelletje</title>
  <link rel="stylesheet" href="css/style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap" rel="stylesheet" />
  <script src="js/spelletje.js" defer></script>
</head>

<body>
  <?php include "includes/navbar.php"; ?>


<h1> Zet dit voedsel van gezond naar ongezond </h1>


<div class="containergame">

  <div draggable="true" class="Happy-meal">
  <h3 id="Happy-MealText"> Happy meal</h3>
  <img src="images/happy-meal.jpg" class="Etenplaatjes-Spelletje"  alt="Happymeal" width="200" height="200">
  </div>
  <div draggable="true" class="Havermout">
    <h3 id="HaverMoutText"> Havermout</h3>
  <img src="images/havermout.jpg" class="Etenplaatjes-Spelletje"   alt="Havermout" width="200" height="200">
  </div>
  <div draggable="true" class="Hotdog">
  <h3 id="HotdogText"> Hotdog</h3>
  <img src="images/hotdog.jpg" class="Etenplaatjes-Spelletje" alt="hotdog" width="200" height="200">
  </div>
</div>

<button class="AntwoordVoedselGamebtn" onclick="Gameantwoord()">Antwoord</button>
<div id="TextGameantwoord">
<h1 id=TextGameantwoordText> Antwoord is: <br> Havermout, hotdog, happymeal.</h1>
</div>

 

  
</body>

</html>

