
var j, k
/*
Up = 0
Right = 1
Down = 2
Left = 3

*/1



var slide = function slide2(direction, x0, y0, x1, y1)
{
    var posX = x0*10;
    var posY = y0*10;
    var slideHelper = function slideHelper(){
	console.log(posX+" "+posY+" "+x1+" "+y1);
        if (posX != x1*10 || posY != y1*10)
        {
	    console.log(posX+" "+posY+" "+x1+" "+y1);
            ctx.clearRect(100 * posX + 8, 100 * posY + 8, 100, 100);
            switch (direction){
            case 0:
                // up
		posY -= 1;
                //ctx.translate(0, -1);
                break;
            case 1:
                // right
		posX += 1;
                //ctx.translate(1, 0)
                break;
            case 2:
                // down
		posY += 1;
                //ctx.translate(0, 1)
                break;
            case 3:
                // left
		posX -= 1;
                //ctx.translate(-1, 0)
                break;


            }
            drawTile(x1, y1, posX/10, posY/10);
            slideCode = window.requestAnimationFrame(slideHelper);
        }
    }
    slideHelper();

};
