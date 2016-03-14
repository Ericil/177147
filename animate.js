
var j, k
/*
Up = 0
Right = 1
Down = 2
Left = 3

*/1



var slide = function slide2(direction, x0, y0, x1, y1)
{
    console.log("x0: " + x0 + " y0: " + y0 + " direction: "+direction);
    var posX = x0*10;
    var posY = y0*10;
    var slideHelper = function slideHelper(){

        if (Math.abs(posX - (x1 * 10)) > 1 || Math.abs(posY -(y1 * 10))  > 1)
        {
	    console.log(posX+" "+posY+" "+x1+" "+y1);
            ctx.clearRect(100 * posX + 8, 100 * posY + 8, 100, 100);
            switch (direction){
            case 0:
                // up
		            posY -= 1;
                console.log("up");
                break;
            case 1:
                // right
                console.log("right");
		            posX += 1;
              
                break;
            case 2:
                // down
                console.log("down");
		            posY += 1;
             
                break;
            case 3:
                // left
                console.log("left");
		            posX -= 1;
              
                break;


            }
            drawTile(x1, y1, posX/10, posY/10);
            slideCode = window.requestAnimationFrame(slideHelper);
        }
        else {
            console.log("finished");
            return;
        }

    }
    slideHelper();

};
