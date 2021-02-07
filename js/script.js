// let Car = function (brand,model,color) {
// 	this.brand = brand;
// 	this.model = model;
// 	this.color = color;
// }
// let House = function (number,floor) {
// 	this.number = number;
// 	this.floor = floor;
// }
// land = new House("22","10");
// console.log(land);
// tesla = new Car("tesla","X","black");
// console.log(tesla);
// BMW = new Car("BMW","M6","Blue");
// Mercedes = new Car("Mercedes","GLB 200","Black");
// Audi = new Car("Audi","Q8","white");
// console.log(BMW);
// console.log(Mercedes);
// console.log(Audi)
 let clock = document.getElementById("clock");
 let bodyStyle = document.body.style;
 
 function timer() {
 	time = new Date();
 	let h = time.getHours().toString();
 	let m = time.getMinutes().toString();
 	let s = time.getSeconds().toString();
 	if (h.length<2) {
 		h = "0" + h;
 	}
 	if (m.length<2) {
 		m = "0" + m;
 	}
 	if (s.length<2) {
 		s = "0" + s;
 	}
 	clock.innerHTML = h + ":" + m + ":" + s;
 	bodyStyle.background = "#" + h + m + s;
 	bodyStyle.color = "#" + s + "ffff";
}

let interval;
let isTimeShowed = false;
function onTimer() {
	interval = setInterval(timer,1000);
	
}
function offTimer() {
	clearInterval(interval);
	clock.innerHTML = "00:00:00";
	bodyStyle.background = "white";
	bodyStyle.color = "black";
}
function start() {
	isTimeShowed = !isTimeShowed;
	timer();
	isTimeShowed ? onTimer() : offTimer(); 
}
