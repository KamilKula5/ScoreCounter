const p1Scores = document.querySelector('#p1Score');
const p2Scores = document.querySelector('#p2Score');
const reset = document.querySelector('#reset');
const info = document.querySelector('#info');
let score1Number = 0;
let score2Number = 0;
let score1 = "-0";
let score2 = "0-";

p1Scores.addEventListener("click", function(){
    score1Number++;
    info.innerHTML = score1Number + "-" + score2Number;
    if (score1Number == 5){
        p1Scores.disabled = true;
        p2Scores.disabled = true;
    }
})
p2Scores.addEventListener("click", function(){
    score2Number++;
    info.innerHTML =score1Number + "-" + score2Number;
    if (score2Number == 5){
        p1Scores.disabled = true;
        p2Scores.disabled = true;   
    }
    
})

reset.addEventListener("click", function(){ //resetowanie gry
    score1Number = 0;
    score2Number = 0;
    info.innerHTML = score1Number + "-" + score2Number;
    info.innerHTML = score1Number + "-" + score2Number;
    p1Scores.disabled = false;
    p2Scores.disabled = false;
})