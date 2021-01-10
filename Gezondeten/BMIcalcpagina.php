<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gezond eten: Bmi calculator</title>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap" rel="stylesheet">
  <script src="js/bmicalcjavascript.js" defer></script>
</head>


<body>
<?php include "includes/navbar.php"; ?>

  <div class="BmiLayout">
    <h1 id="BMICalctitel">BMI Calculator</h1>
    <p>Hoe lang bent u?: <input type="text" id="height" />
      <select type="multiple" id="heightunits">
        <option value="metres" selected="selected">Centimeter</option>
        <option value="inches">inch</option>
      </select>
    </p>
    <p>Wat is u gewicht?: <input type="text" id="weight" />
      <select type="multiple" id="weightunits">
        <option value="kg" selected="selected">kilogram</option>
        <option value="lb">pond</option>
      </select>
    </p>
    <input type="radio" id="man" name="geslacht" value="man">
    <label for="Man">Man</label><br>
    <input type="radio" id="vrouw" name="geslacht" value="vrouw">
    <label for="Vrouw">Vrouw</label><br>


    <input id="BMIuitrekenbtn" type="submit" value="BMI Uitrekenen" onclick="BerekenBMI();">
    <h1>BMI: <span id="output">?</span></h1>

    <h2>Advies: <span id="comment"> ?</span> </h2>

    <img src="images/bmi-overzicht.jpg" id="bmicalcplaatje" alt="gezond eten" style="width: 500px; height: 450px" />
  </div>
  
</body>

</html>
