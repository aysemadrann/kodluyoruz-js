let user = prompt("İsminizi Giriniz.");
let firstName = document.querySelector("#username").innerHTML = user;
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let day = date.getDay();
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var myVar=setInterval(function(){myTimer()},1000);
                
function myTimer() {
	var d = new Date();
	document.querySelector("#clock").innerHTML = [ d.toLocaleTimeString() + " " + days[day]];
}

