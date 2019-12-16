// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var bug = 1;
// var 2 = electric;
// var 3 = fire;
// var 4 = grass;
// var 5 = normal;
// var 6 = rock;
// var 7 = dark;
// var 8 = fairy;
// var 9 = flying;
// var 10 = ground;
// var 11 = poison;
// var 12 = steel;
// var 13 = dragon;
// var 14 = fighting;
// var 15 = ghost;
// var 16 = ice;
// var 17 = psychic;
// var 18 = water;
function convertString(userChoice){
    if (userChoice == "bug" || userChoice == "Bug"){
        return 1;
    } else if (userChoice == "dark" || userChoice == "Dark"){
        return 2;
    } else if (userChoice == "dragon" || userChoice == "Dragon"){
        return 3;  
    } else if (userChoice == "electric" || userChoice == "Electric"){
        return 4;
    } else if (userChoice == "fairy" || userChoice == "Fairy"){
        return 5;
    } else if (userChoice == "fighting" || userChoice == "Fighting"){
        return 6;
     } else if (userChoice == "flying" || userChoice == "Flying"){
        return 8;
    } else if (userChoice == "ghost" || userChoice == "Ghost"){
        return 9;
    }else if (userChoice == "grass" || userChoice == "Grass"){
        return 10;
    }else if (userChoice == "ground" || userChoice == "Ground"){
        return 11;
    }else if (userChoice == "ice" || userChoice == "Ice"){
        return 12;
    }else if (userChoice == "normal" || userChoice == "Normal"){
        return 13;
    }else if (userChoice == "poison" || userChoice == "Poison"){
        return 14;
    }else if (userChoice == "psychic" || userChoice == "Psychic"){
        return 15;
    }else if (userChoice == "rock" || userChoice == "Rock"){
        return 16;
    }else if (userChoice == "steel" || userChoice == "Steel"){
        return 17;
    }else if (userChoice == "water" || userChoice == "Water"){
        return 18;
    }else if (userChoice == "fire" || userChoice == "Fire"){
        return 7;
    }
     else {
        $("#result").append("Type Correctly");
    }
}
$("#shoot").click(function(){
    var computerChoice = Math.floor(Math.random()*20);
    $("#computerChoice").append("<br>"+computerChoice);
     var userChoice = $(input).val();
    userChoice = convertString(userChoice);
    $("#userChoice").append("<br>"+userChoice);
    if (userChoice == 1 && computerChoice == 9) {
         $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 12) {
     $("#result").append("<br>Lose");
    } else if (userChoice == 1 && computerChoice == 13) {
        $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 14) {
        $("#result").append("<br>Lose"); 
    } else if (userChoice == 1 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 16) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 1 && computerChoice == 17) {
        $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 18) {
        $("#result").append("<br>Lose"); 
    } else if (userChoice == 2 && computerChoice == 11) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 2 && computerChoice == 12) {
        $("#result").append("<br>Win");
    } else if (userChoice == 2 && computerChoice == 13) {
        $("#result").append("<br>Win");
    } else if (userChoice == 2 && computerChoice == 14) {
        $("#result").append("<br>Win");
    } else if (userChoice == 2 && computerChoice == 15) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 2 && computerChoice == 16) {
        $("#result").append("<br>Win");
    } else if (userChoice == 2 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 2 && computerChoice == 18) {
        $("#result").append("<br>Win");
    } else if (userChoice == 2 && computerChoice == 19) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 3 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 3 && computerChoice == 12) {
        $("#result").append("<br>Win");
    } else if (userChoice == 3 && computerChoice == 13) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 3 && computerChoice == 14) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 3 && computerChoice == 15) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 3 && computerChoice == 16) {
        $("#result").append("<br>Win");
    } else if (userChoice == 3 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 3 && computerChoice == 18) {
        $("#result").append("<br>Win");
    } else if (userChoice == 3 && computerChoice == 19) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 4 && computerChoice == 12) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 13) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 14) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 15) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 16) {
        $("#result").append("<br>Win");
    } else if (userChoice == 4 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 18) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 19) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 5 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 5 && computerChoice == 12) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 5 && computerChoice == 13) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 5 && computerChoice == 14) {
        $("#result").append("<br>Win");
    } else if (userChoice == 5 && computerChoice == 15) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 5 && computerChoice == 16) {
        $("#result").append("<br>Win");
    } else if (userChoice == 5 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 5 && computerChoice == 18) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 5 && computerChoice == 19) {
        $("#result").append("<br>Win");
    } else if (userChoice == 6 && computerChoice == 11) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 6 && computerChoice == 12) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 6 && computerChoice == 13) {
        $("#result").append("<br>Win");
    } else if (userChoice == 6 && computerChoice == 14) {
        $("#result").append("<br>Win");
    } else if (userChoice == 6 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 6 && computerChoice == 16) {
        $("#result").append("<br>Win");
    } else if (userChoice == 6 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 6 && computerChoice == 18) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 6 && computerChoice == 19) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 7 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 7 && computerChoice == 12) {
        $("#result").append("<br>Win");
    } else if (userChoice == 7 && computerChoice == 13) {
        $("#result").append("<br>Win");
    } else if (userChoice == 7 && computerChoice == 14) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 7 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 7 && computerChoice == 16) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 7 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 7 && computerChoice == 18) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 7 && computerChoice == 19) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 12) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 8 && computerChoice == 13) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 8 && computerChoice == 14) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 16) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 8 && computerChoice == 18) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 19) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 12) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 13) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 14) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 9 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 16) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 9 && computerChoice == 18) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 19) {
        $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 1) {
        $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 2) {
        $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 3) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 1 && computerChoice == 4) { 
        $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 5) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 1 && computerChoice == 6) {
        $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 7) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 1 && computerChoice == 8) {
        $("#result").append("<br>Win");
    } else if (userChoice == 1 && computerChoice == 9) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 2 && computerChoice == 1) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 2 && computerChoice == 2) {
        $("#result").append("<br>Win");
    } else if (userChoice == 2 && computerChoice == 3) {
        $("#result").append("<br>Win");
    } else if (userChoice == 2 && computerChoice == 4) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 2 && computerChoice == 5) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 2 && computerChoice == 6) {
        $("#result").append("<br>Win");
    } else if (userChoice == 2 && computerChoice == 7) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 2 && computerChoice == 8) {
        $("#result").append("<br>Win");
    } else if (userChoice == 2 && computerChoice == 9) {
        $("#result").append("<br>Win");
    } else if (userChoice == 3 && computerChoice == 1) {
        $("#result").append("<br>Win");
    } else if (userChoice == 3 && computerChoice == 2) {
        $("#result").append("<br>Win");
    } else if (userChoice == 3 && computerChoice == 3) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 3 && computerChoice == 4) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 3 && computerChoice == 5) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 3 && computerChoice == 6) {
        $("#result").append("<br>Win");
    } else if (userChoice == 3 && computerChoice == 7) {
        $("#result").append("<br>Lose")
    } else if (userChoice == 3 && computerChoice == 8) {
        $("#result").append("<br>Win");
    } else if (userChoice == 3 && computerChoice == 9) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 1) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 4 && computerChoice == 2) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 3) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 4) {
        $("#result").append("<br>Lose"); 
    } else if (userChoice == 4 && computerChoice == 5) {
        $("#result").append("<br>Lose"); 
    } else if (userChoice == 4 && computerChoice == 6) {
        $("#result").append("<br>Win");
    } else if (userChoice == 4 && computerChoice == 7) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 8) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 4 && computerChoice == 9) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 5 && computerChoice == 1) {
        $("#result").append("<br>Win");
    } else if (userChoice == 5 && computerChoice == 2) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 5 && computerChoice == 3) {
        $("#result").append("<br>Win");
    } else if (userChoice == 5 && computerChoice == 4) {
        $("#result").append("<br>Win");
    } else if (userChoice == 5 && computerChoice == 5) {
        $("#result").append("<br>Lose"); 
    } else if (userChoice == 5 && computerChoice == 6) {
        $("#result").append("<br>Win");
    } else if (userChoice == 5 && computerChoice == 7) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 5 && computerChoice == 8) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 5 && computerChoice == 9) {
        $("#result").append("<br>Win");
    } else if (userChoice == 6 && computerChoice == 1) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 6 && computerChoice == 2) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 6 && computerChoice == 3) {
        $("#result").append("<br>Win");
    } else if (userChoice == 6 && computerChoice == 4) {
        $("#result").append("<br>Win");
    } else if (userChoice == 6 && computerChoice == 5) {
        $("#result").append("<br>Win");
    } else if (userChoice == 6 && computerChoice == 6) {
        $("#result").append("<br>Win");
    } else if (userChoice == 6 && computerChoice == 7) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 6 && computerChoice == 8) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 6 && computerChoice == 9) {
        $("#result").append("<br>Win");
    } else if (userChoice == 7 && computerChoice == 1) {
        $("#result").append("<br>Win");
    } else if (userChoice == 7 && computerChoice == 2) {
        $("#result").append("<br>Win");
    } else if (userChoice == 7 && computerChoice == 3) {
        $("#result").append("<br>Win");
    } else if (userChoice == 7 && computerChoice == 4) {
        $("#result").append("<br>Win");
    } else if (userChoice == 7 && computerChoice == 5) {
        $("#result").append("<br>Win")
    } else if (userChoice == 7 && computerChoice == 6) {
        $("#result").append("<br>Win");
    } else if (userChoice == 7 && computerChoice == 7) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 7 && computerChoice == 8) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 7 && computerChoice == 9) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 1) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 2) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 8 && computerChoice == 3) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 8 && computerChoice == 4) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 5) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 6) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 7) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 8 && computerChoice == 8) {
        $("#result").append("<br>Win");
    } else if (userChoice == 8 && computerChoice == 9) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 1) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 2) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 3) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 9 && computerChoice == 4) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 5) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 6) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 7) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 9 && computerChoice == 8) {
        $("#result").append("<br>Win");
    } else if (userChoice == 9 && computerChoice == 9) {
        $("#result").append("<br>Win");
    } else if (userChoice == 11 && computerChoice == 11) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 11 && computerChoice == 12) {
        $("#result").append("<br>Win");
    } else if (userChoice == 11 && computerChoice == 13) {
        $("#result").append("<br>Win");
    } else if (userChoice == 11 && computerChoice == 14) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 11 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 11 && computerChoice == 16) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 11 && computerChoice == 17) {
        $("#result").append("<br>Win");
    } else if (userChoice == 11 && computerChoice == 18) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 11 && computerChoice == 19) {
        $("#result").append("<br>Win");
    } else if (userChoice == 12 && computerChoice == 11) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 12 && computerChoice == 12) {
        $("#result").append("<br>Win");
    } else if (userChoice == 12 && computerChoice == 13) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 12 && computerChoice == 14) {
        $("#result").append("<br>Win");
    } else if (userChoice == 12 && computerChoice == 15) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 12 && computerChoice == 16) {
        $("#result").append("<br>Win");
    } else if (userChoice == 12 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 12 && computerChoice == 18) {
        $("#result").append("<br>Win");
    } else if (userChoice == 12 && computerChoice == 19) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 13 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 13 && computerChoice == 12) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 13 && computerChoice == 13) {
        $("#result").append("<br>Win");
    } else if (userChoice == 13 && computerChoice == 14) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 13 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 13 && computerChoice == 16) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 13 && computerChoice == 17) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 13 && computerChoice == 18) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 13 && computerChoice == 19) {
        $("#result").append("<br>Win");
    } else if (userChoice == 14 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 14 && computerChoice == 12) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 14 && computerChoice == 13) {
        $("#result").append("<br>Win");
    } else if (userChoice == 14 && computerChoice == 14) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 14 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 14 && computerChoice == 16) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 14 && computerChoice == 17) {
        $("#result").append("<br>Win");
    } else if (userChoice == 14 && computerChoice == 18) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 14 && computerChoice == 19) {
        $("#result").append("<br>Win");
    } else if (userChoice == 15 && computerChoice == 11) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 15 && computerChoice == 12) {
        $("#result").append("<br>Win");
    } else if (userChoice == 15 && computerChoice == 13) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 15 && computerChoice == 14) {
        $("#result").append("<br>Win");
    } else if (userChoice == 15 && computerChoice == 15) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 15 && computerChoice == 16) {
        $("#result").append("<br>Win");
    } else if (userChoice == 15 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 15 && computerChoice == 18) {
        $("#result").append("<br>Win");
    } else if (userChoice == 15 && computerChoice == 19) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 16 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 16 && computerChoice == 12) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 16 && computerChoice == 13) {
        $("#result").append("<br>Win");
    } else if (userChoice == 16 && computerChoice == 14) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 16 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 16 && computerChoice == 16) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 16 && computerChoice == 17) {
        $("#result").append("<br>Win");
    } else if (userChoice == 16 && computerChoice == 18) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 16 && computerChoice == 19) {
        $("#result").append("<br>Win");
    } else if (userChoice == 17 && computerChoice == 11) {
        $("#reslt").append("<br>Lose");
    } else if (userChoice == 17 && computerChoice == 12) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 17 && computerChoice == 13) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 17 && computerChoice == 14) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 17 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 17 && computerChoice == 16) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 17 && computerChoice == 17) {
        $("#result").append("<br>Win");
    } else if (userChoice == 17 && computerChoice == 18) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 17 && computerChoice == 19) {
        $("#result").append("<br>Win");
    } else if (userChoice == 18 && computerChoice == 11) {
        $("#result").append("<br>Win");
    } else if (userChoice == 18 && computerChoice == 12) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 18 && computerChoice == 13) {
        $("#result").append("<br>Win"); 
    } else if (userChoice == 18 && computerChoice == 14) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 18 && computerChoice == 15) {
        $("#result").append("<br>Win");
    } else if (userChoice == 18 && computerChoice == 16) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 18 && computerChoice == 17) {
        $("#result").append("<br>Win");
    } else if (userChoice == 18 && computerChoice == 18) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 18 && computerChoice == 19) {
        $("#result").append("<br>Win");
    } else if (userChoice == 19 && computerChoice == 11) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 19 && computerChoice == 12) {
        $("#result").append("<br>Win");
    } else if (userChoice == 19 && computerChoice == 13) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 19 && computerChoice == 14) {
        $("#result").append("<br>Win");
    } else if (userChoice == 19 && computerChoice == 15) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 19 && computerChoice == 16) {
        $("#result").append("<br>Win");
    } else if (userChoice == 19 && computerChoice == 17) {
        $("#result").append("<br>Lose");
    } else if (userChoice == 19 && computerChoice == 18) {
        $("#result").append("<br>Win");
    } else if (userChoice == 19 && computerChoice == 19) {
        $("#result").append("<br>Lose");
    }
}); 
