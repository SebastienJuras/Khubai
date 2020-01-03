/* Simulation du salaire dans une entreprise decentralisé */

function simulerSalaire() {
    /* calcul des variables */
    var nbjour = 216 - 11; /* par defaut on enleve le nb de RTT (ie:11)*/
    var tjm = document.getElementById("tjm").value;

    var rttValeur = Math.round(tjm*11/12);
    var rtt = 0; /* 0 si contrat avec RTT, 1 sinon */
    if (document.getElementById('rttTrue').checked) {
        rtt=0;
        /* affichafe de la valeur du RTT retrouné */
        document.getElementById("rttValeur").innerHTML = "-";
    }
    else
    {
        rtt = 1;
        /* affichafe de la valeur du RTT retrouné */
        document.getElementById("rttValeur").innerHTML = rttValeur.toString() + "€";
    }

    var fdp = 20;
    var ursaff = 1200;
    var retraite = 300;
    var assurance = 25;
    var administration = 90;
    var employabilite = 216;
    var formation = Math.round((tjm*5+ 1000)/12);
    if (document.getElementById('mutuelleStandard').checked) {
        mutuelle=25;
        /* affichafe de la valeur de la mutuelle */
        document.getElementById("mutuelleValeur").innerHTML = mutuelle.toString() + "€";
    }
    else
    {
        mutuelle=60;
        /* affichafe de la valeur de la mutuelle */
        document.getElementById("mutuelleValeur").innerHTML = mutuelle.toString() + "€";
    }
    /* Calcul remise client */
    var remiseClient = Math.round(tjm*0.12);
    document.getElementById("remiseClientBase").innerHTML = remiseClient.toString() + "€";
    var encadrement = 0;
    if (document.getElementById('encadrementTrue').checked) {
        encadrement = 0;
        /* affichafe de la valeur de la remise encadrement */
        document.getElementById("encadrementValeur").innerHTML = encadrement.toString() + "€";
    }
    else
    {
        encadrement = 25;
        /* affichafe de la valeur de la remise encadrement */
        document.getElementById("encadrementValeur").innerHTML = encadrement.toString() + "€";
    }   
    if (document.getElementById('creditTrue').checked) {
        credit = 0;
        /* affichafe de la valeur de la remise encadrement */
        document.getElementById("creditValeur").innerHTML = credit.toString() + "€";
    }
    else
    {
        credit = 10;
        /* affichafe de la valeur de la remise encadrement */
        document.getElementById("creditValeur").innerHTML = credit.toString() + "€";
    }   
    var remiseClientTotal = remiseClient + encadrement + credit;
    document.getElementById("remiseClient").innerHTML = remiseClientTotal.toString() + "€";
    tjm = tjm - remiseClient -35 ; /* le tjm -35 correspond aux services fournies par le client et pas par le consultant, ie credit & */
    /* Calcul du salaire et revenu */

    var salaireTmp = tjm*nbjour/12 - fdp - ursaff - assurance - retraite - administration - employabilite - formation -mutuelle;
    var structure = Math.round(0.125*salaireTmp);
    var servicesConnexes = fdp  + ursaff + assurance + retraite+ administration + employabilite + formation + structure + mutuelle;
    var salaire = Math.round((tjm*nbjour/12-servicesConnexes)*5/6);
    var reserve = Math.round((tjm*nbjour/12-servicesConnexes)/6);
    var revenu = salaire + reserve + rtt*rttValeur;

    /* Maj affichage page */
        /* dans le block situation actuel */
    if (salaire>0) {
        document.getElementById("resultat").innerHTML = "Nous estimons vos nouveaux revenus à <br><B>" + revenu.toString() + "€ </B>par mois";
        /* dans le block situation revenus */
        document.getElementById("salaireBase").innerHTML = salaire.toString() + "€";
        document.getElementById("reserve").innerHTML = reserve.toString() + "€";
        document.getElementById("revenu").innerHTML = revenu.toString() + "€"; 
        document.getElementById("formation").innerHTML = formation.toString() + "€";
        document.getElementById("structure").innerHTML = structure.toString() + "€";
        document.getElementById("servicesConnexes").innerHTML = servicesConnexes.toString() + "€"; 
    }

  }