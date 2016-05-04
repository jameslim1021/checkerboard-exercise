// Your JS goes here
var body = document.getElementsByTagName("body")[0];

//Checkerboard Red/Black

for (var i = 0; i < 81; i++) {
	var tile = document.createElement("div");
	tile.style.width = '11.1%';
	tile.style.height = '6.5%';
	tile.style.paddingBottom = '11.1%';
	tile.style.float = 'left';
	if (i % 2 === 0) {
		tile.style.backgroundColor = 'red';
	} else {
		tile.style.backgroundColor = 'black';
	}
	body.appendChild(tile);
}

// //Checkboard Random Colors

for (var i = 0; i < 81; i++) {
	var colorR = Math.floor(Math.random()*255)
	var colorG = Math.floor(Math.random()*255)
	var colorB = Math.floor(Math.random()*255)
	var tile = document.createElement("div");
	tile.style.width = '11.1%';
	tile.style.height = '11.1%';
	tile.style.paddingBottom = '11.1%';
	tile.style.float = 'left';
	if (i % 2 === 0) {
		tile.style.backgroundColor = 'rgb('+colorR+','+colorG+','+colorB+')';
		ES6 method tile.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`
	} else {
		tile.style.backgroundColor = 'rgb('+colorR+','+colorG+','+colorB+')';
		ES6 method tile.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`
	}
	body.appendChild(tile);
}


// not really gradient
// var alpha = 1
// for (var i = 0; i < 81; i++) {
// 	var tile = document.createElement("div");
// 	alpha -= 0.01
// 	tile.style.width = '11.1%';
// 	tile.style.height = '11.1%';
// 	tile.style.paddingBottom = '11.1%';
// 	tile.style.float = 'left';
// 	if (i % 2 === 0) {
// 		tile.style.backgroundColor = 'rgba(255,0,0,'+alpha+')';
// 	} else {
// 		tile.style.backgroundColor = 'rgba(69,169,83,'+alpha+')';
// 	}
// 	body.appendChild(tile);
// }
//Gradient colors

var rOne = 27
var gOne = 80
var bOne = 255
var rTwo = 40
var gTwo = 50
var bTwo = 255
for (var i = 0; i < 81; i++) {
	var tile = document.createElement("div");
	rOne += 2
	gOne -= 2
	rTwo -= 2
	gTwo += 2
	tile.style.width = '11.1%';
	tile.style.height = '11.1%';
	tile.style.paddingBottom = '11.1%';
	tile.style.float = 'left';
	if (i % 2 === 0) {
		// tile.style.backgroundColor = 'rgb('+rOne+','+gOne+','+bOne+')';
		tile.style.backgroundColor = `rgba(${rOne}, ${gOne}, ${bOne},1)`
		tile.id = "tileOne"
	} else {
		// tile.style.backgroundColor = 'rgb('+rTwo+','+gTwo+','+bTwo+')';
		tile.style.backgroundColor = `rgba(${rTwo}, ${gTwo}, ${bTwo},1)`
		tile.id = "tileTwo"
	}
	body.appendChild(tile);
}


//Flashing colors
for (var i = 0; i < 81; i++) {
	var colorR = Math.floor(Math.random()*255)
	var colorG = Math.floor(Math.random()*255)
	var colorB = Math.floor(Math.random()*255)
	var tile = document.createElement("div");
	tile.style.width = '11.1%';
	tile.style.height = '11.1%';
	tile.style.paddingBottom = '11.1%';
	tile.style.float = 'left';
	if (i % 2 === 0) {
		tile.style.backgroundColor = 'rgb('+colorR+','+colorG+','+colorB+')';
		// ES6 method tile.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`
	} else {
		tile.style.backgroundColor = 'rgb('+colorR+','+colorG+','+colorB+')';
		// ES6 method tile.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`
	}
	body.appendChild(tile);
}

function changeColor () {
	for (var i = 0; i < body.children.length; i++){
		var r = Math.floor(Math.random()*255)
		var g = Math.floor(Math.random()*255)
		var b = Math.floor(Math.random()*255)
		body.children[i].style.backgroundColor = 'rgb('+r+','+g+','+b+')'
	}
}

setInterval(changeColor, 2000)




