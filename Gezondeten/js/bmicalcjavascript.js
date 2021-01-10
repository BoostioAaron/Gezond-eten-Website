function BerekenBMI() {

    var height = Number(document.getElementById("height").value);
    var heightunits = document.getElementById("heightunits").value;
    var weight = Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;
    var man = document.getElementById("man")
    var vrouw = document.getElementById("vrouw")


    if (heightunits == "inches") height *= 2.54;
    if (weightunits == "lb") weight /= 2.20462;


    var BMI = weight / Math.pow(height, 2) * 10000;

    if (man.checked == false && vrouw.checked == false) {
        alert('Kies of u een man of een vrouw bent.');
    }
    else if (man.checked == true) {

        if (BMI < 18.5)
            document.getElementById("comment").innerText = "(Ondergewicht)...Probeer wat meer te eten";
        else if (BMI >= 18.5 && BMI <= 25)
            document.getElementById("comment").innerText = "(Normaal Gewicht)...Ga zo door!";
        else if (BMI >= 25 && BMI <= 30)
            document.getElementById("comment").innerText = "(Overgewicht)...U bent  te zwaar probeer wat minder te eten.";
        else if (BMI > 30)
            document.getElementById("comment").innerText = "(Obesitas)...U bent veel te zwaar. zoek hulp van een proffesional ";

        if (BMI > 0)
            document.getElementById("output").innerText = BMI.toFixed(1);
    }
    else if (vrouw.checked == true) {
        if (BMI < 18.5)
            document.getElementById("comment").innerText = "(Ondergewicht)...Probeer wat meer te eten";
        else if (BMI >= 18.5 && BMI <= 23.5)
            document.getElementById("comment").innerText = "(Normaal Gewicht)...Ga zo door!";
        else if (BMI >= 23.5 && BMI <= 28.5)
            document.getElementById("comment").innerText = "(Overgewicht)...U bent  te zwaar probeer wat minder te eten.";
        else if (BMI > 30)
            document.getElementById("comment").innerText = "(Obesitas)...U bent veel te zwaar. zoek hulp van een proffesional ";

        if (BMI > 0)
            document.getElementById("output").innerText = BMI.toFixed(1);
    }
}