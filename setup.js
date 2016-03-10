var the_canvas = document.getElementById("canvas");
var start_button = document.getElementById("start");
var restart_button = document.getElementById("restart");
var ctx = the_canvas.getContext("2d");
var grid;
var started;


var generate = function generate(){
    grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var randomx1 = Math.floor(Math.random() * 4);
    var randomy1 = Math.floor(Math.random() * 4);
    var randomx2 = Math.floor(Math.random() * 4);
    var randomy2 = Math.floor(Math.random() * 4);
    started = true;
    while (randomx1 == randomx2 && randomy1 == randomy2){
	randomx2 = Math.floor(Math.random() * 4);
	randomy2 = Math.floor(Math.random() * 4);
    }
    grid[randomx1][randomy1] = 3;
    grid[randomx2][randomy2] = 3;
    ctx.beginPath();
    for (a = 0; a < 4;a++){
	for (b = 0; b < 4;b++){
	    ctx.fillStyle = "lightblue";
	    ctx.fillRect(a * 100 + 8, b * 100 + 8, 84, 84);
	    if (grid[a][b] != 0){
		ctx.fillStyle = "#FFA500";
		ctx.fillRect(a * 100 + 8, b * 100 + 8, 84, 84);
		ctx.font = "50px Sans-serif";
		ctx.fillStyle = "white";
		ctx.fillText(grid[a][b], a * 100 + 35, b * 100 + 68)
	    }
	}
    }
    ctx.closePath();
}

var restart = function restart(){
    if (started == true){
	generate();
    }
}
start_button.addEventListener("click", generate);
restart_button.addEventListener("click", restart);
