var the_canvas = document.getElementById("canvas");
var start_button = document.getElementById("start");
var restart_button = document.getElementById("restart");
var ctx = the_canvas.getContext("2d");
var grid;
var game;
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
    game = new Game(grid);
    drawGrid();
    // window.removeEventListener("keypress", pressed);
  //  window.addEventListener("keypress", pressed);
    document.onkeydown = pressed; 
}

var pickRandom = function pickRandom(g){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var randomx1 = random0to3();
    var randomy1 = random0to3();
    while (game.empty > 0 && g[randomx1][randomy1] != 0){
	randomx1 = random0to3();
	randomy1 = random0to3();
    }
    if (game.empty > 0){
	g[randomx1][randomy1] = 3;
    }
}

var drawGrid = function drawGrid(){
    ctx.beginPath();
    for (a = 0; a < 4;a++){
	for (b = 0; b < 4;b++){
	    drawTile(a, b, a * 100 + 8, b * 100 + 8);
	}
    }
    ctx.closePath();
}

var drawTile = function drawTile(a, b, xcoord, ycoord){
    // a and b actually determine the placement of the tile
    // xcoord and ycoord determine what's written on the tile
    ctx.fillStyle = "lightblue";
    ctx.fillRect(a * 100 + 8, b * 100 + 8, 84, 84);
    draw_rect(a, b);
    if (grid[a][b] != 0){
        console.log("printing legit tile: " + "x: " + xcoord  + " y: " + ycoord);
	      ctx.fillStyle = "#FFA500";
	      ctx.fillRect(xcoord, ycoord, 84, 84);
	      ctx.font = "50px Sans-serif";
	      ctx.fillStyle = "white";
	ctx.fillText(grid[a][b], xcoord + 27, ycoord + 60);
    }
    else {
        draw_rect(a, b);
    }
  
}



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

var start = function start(){
    if (started != true){
	generate();
    }
}

var pressed = function pressed(e){
    var a;
    console.log("hello");
    switch(e.keyCode)
    {

        //left
        case 37:
        console.log("left");
	      game.mergeV(1);
        break;
            
        //up
        case 38:
        console.log("up");
	      game.mergeH(1);
        break;
            
        //right
        case 39:

	game.mergeV(-1);
        //window.alert("Uh oh! You're using the forbidden right key. This key isn't allowed for...reasons")
        break;
        
        //down
        case 40:
        console.log("down");
	      game.mergeH(3);
        break;
    }
    var t = game.print();
    if (t != game.last){
	pickRandom(game.grid);
	game.empty -= 1;
	game.last = game.print();
    }
    if (game.empty == 0){
	if (game.losecheck() == 1){
	    window.removeEventListener("keypress",pressed);
	}
    }
    for (var i=0;i<game.moves.length;i++){
	slide( game.moves[i][0], game.moves[i][1], game.moves[i][2], game.moves[i][3], game.moves[i][4]);
    }
    game.moves = [];
    //drawGrid();
}
start_button.addEventListener("click", start);
restart_button.addEventListener("click", restart);
