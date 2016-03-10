var the_canvas = document.getElementById("canvas");
var start_button = document.getElementById("start");
var ctx = the_canvas.getContext("2d");
var array = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var randomx1 = Math.floor(Math.random() * 4);
var randomy1 = Math.floor(Math.random() * 4);
var randomx2 = Math.floor(Math.random() * 4);
var randomy2 = Math.floor(Math.random() * 4);


var generate = function generate(){
    while (randomx1 == randomx2 && randomy1 == randomy2){
	randomx2 = Math.floor(Math.random() * 4);
	randomy2 = Math.floor(Math.random() * 4);
    }
    array[randomx1][randomy1] = 3;
    array[randomx2][randomy2] = 3;
    for (a = 0; a < 4;a++){
	for (b = 0; b < 4;b++){
	    ctx.fillStyle = "lightblue";
	    ctx.fillRect(a * 100 + 8, b * 100 + 8, 84, 84);
	    if (array[a][b] != 0){
		ctx.fillStyle = "#FFA500";
		ctx.fillRect(a * 100 + 8, b * 100 + 8, 84, 84);
		ctx.font = "50px Sans-serif";
		ctx.fillStyle = "white";
		ctx.fillText(array[a][b], a * 100 + 35, b * 100 + 68)
	    }
	}
    }
}
start_button.addEventListener("click", generate);
