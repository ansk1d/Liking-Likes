
var count = 0;
var countElement = document.querySelector("#count");
// var countElement = document.querySelector("#count2");
// var countElement = document.querySelector("#count3");


function liked(){
    count++;
    countElement.innerText = count + "like(s)";

}
// function liked2(){
//     count2++;
//     countElement.innerText = count2 + "like(s)";
// }
// function liked3(){
//     count3++;
//     countElement.innerText = count3 + "like(s)";
// }