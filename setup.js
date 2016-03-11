var the_canvas = document.getElementById("canvas");
var start_button = document.getElementById("start");
var restart_button = document.getElementById("restart");
var ctx = the_canvas.getContext("2d");
var grid;
var started;

var random0to3 = function random0to3(){
    return Math.floor(Math.random() * 4);
}
var generate = function generate(){
    grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var randomx1 = random0to3();
    var randomy1 = random0to3();
    var randomx2 = random0to3();
    var randomy2 = random0to3();
    started = true;
    while (randomx1 == randomx2 && randomy1 == randomy2){
	randomx2 = random0to3();
	randomy2 = random0to3();
    }
    grid[randomx1][randomy1] = 3;
    grid[randomx2][randomy2] = 3;
    ctx.beginPath();
    for (a = 0; a < 4;a++){
	for (b = 0; b < 4;b++){
      drawTile(a, b, a * 100 + 8, b * 100 + 8);
	}
    }
    ctx.closePath();
}

var drawTile = function drawTile(a, b){
    ctx.fillStyle = "lightblue";
	  ctx.fillRect(a * 100 + 8, b * 100 + 8, 84, 84);
	  if (grid[a][b] != 0){
		    ctx.fillStyle = "#FFA500";
		    ctx.fillRect(xcoord, ycoord, 84, 84);
		    ctx.font = "50px Sans-serif";
		    ctx.fillStyle = "white";
		    ctx.fillText(grid[a][b], a * 100 + 35, b * 100 + 68)

var draw_rect = function draw_rect(gridx, gridy){
    var t_x = gridx * 100;
    var t_y = gridy * 100;
    ctx.beginPath();
    ctx.strokeStyle = "#33bbff";
    ctx.moveTo(t_x + 50, t_y + 8);
    ctx.lineTo(t_x + 88, t_y + 8);
    ctx.quadraticCurveTo(t_x + 92, t_y + 8, t_x + 92, t_y + 12);
    ctx.lineTo(t_x + 92, t_y + 88);
    ctx.quadraticCurveTo(t_x + 92, t_y + 92, t_x + 88, t_y + 92);
    ctx.lineTo(t_x + 12, t_y + 92);
    ctx.quadraticCurveTo(t_x + 8, t_y + 92, t_x + 8, t_y + 88);
    ctx.lineTo(t_x + 8, t_y + 12);
    ctx.quadraticCurveTo(t_x + 8, t_y + 8, t_x + 12, t_y + 8);
    ctx.lineTo(t_x + 50, t_y + 8);
    ctx.stroke();
    ctx.closePath();

}
var restart = function restart(){
    if (started == true){
	generate();
    }
}
start_button.addEventListener("click", generate);
restart_button.addEventListener("click", restart);
