var mainGame = "Apex Legends";  //Jeu principal (ex : Apex)
var letsPlay1 = "Empty1";//Nom du jeu Let's play Numéro 1
var letsPlay2 = "Empty2";//Nom du jeu Let's play Numéro 2
var activity = "Dj Set";  //DJ Set ou autre activité
function logLets(){
    console.log(letsPlay1);
}
logLets();
var daysParts;

function UpdateDays(){
    daysParts = {
        a : {  //Vendredi
            p1 : mainGame,  //18h - 20h
            p2 : activity,  //20h - 22h
            p3 : activity,  //22h - 00h
            p4 : activity,  //00h - 02h
        },
        b : {  //Samedi
            p1 : mainGame,  //18h - 20h
            p2 : mainGame,  //20h - 22h
            p3 : letsPlay1,  //22h - 00h
            p4 : letsPlay1,  //00h - 02h
        },
        c : {  //Dimanche
            p1 : mainGame,  //18h - 20h
            p2 : mainGame,  //20h - 22h
            p3 : letsPlay2,  //22h - 00h
            p4 : letsPlay2,  //00h - 02h
        },
        d : {  //Lundi
            p1 : mainGame,  //18h - 20h
            p2 : mainGame,  //20h - 22h
            p3 : mainGame,  //22h - 00h
            p4 : letsPlay1,  //00h - 02h
        },
    }
    console.log(daysParts);
    UpdateDaysInterpreter();

}
UpdateDays();



//Days Interpreter ----------------------------------

var gameslist;

function UpdateDaysInterpreter(){
    gameslist = [
    //18h - 19h
    daysParts.a.p1, //Vendredi  || P1
    daysParts.b.p1, //Samedi  || P2
    daysParts.c.p1, //Dimanche  || P3
    daysParts.d.p1, //Lundi  || P4

    //19h - 20h
    daysParts.a.p2, //Vendredi  || P1
    daysParts.b.p2, //Samedi  || P2
    daysParts.c.p2, //Dimanche  || P3
    daysParts.d.p2, //Lundi  || P4
    //20h - 21h
    daysParts.a.p3, //Vendredi  || P1
    daysParts.b.p3, //Samedi  || P2
    daysParts.c.p3, //Dimanche  || P3
    daysParts.d.p3, //Lundi  || P4
    //21h - 22h
    daysParts.a.p4, //Vendredi  || P1
    daysParts.b.p4, //Samedi  || P2
    daysParts.c.p4, //Dimanche  || P3
    daysParts.d.p4, //Lundi  || P4
    
    ];
}

