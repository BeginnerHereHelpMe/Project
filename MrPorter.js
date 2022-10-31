
  function functieAdaugaInCos() {
    //produse adaugate in cos
    document.getElementById("cos").innerHTML = "Produse adăugate:";
    var denumireProdus = document.getElementById("denumire").innerHTML;
    document.getElementById("produs1").innerHTML = denumireProdus;
    document.getElementById("produs2").innerHTML = denumireProdus;
    document.getElementById("produs3").innerHTML = denumireProdus;
    
    //valoare comanda
    var valComanda = Number(document.getElementById("valoareComanda").innerHTML);
    var pretProdus = Number(document.getElementById("pret").value);
    valComanda = valComanda + pretProdus;
    document.getElementById("valoareComanda").innerHTML = valComanda;

    //valoare minima 100 lei
    if(valComanda >= 100){
      document.getElementById("comandaMin").innerHTML = "Plasați comanda"
    }
  }
