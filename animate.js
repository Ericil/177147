
var j, k
/*
Up = 0
Right = 1
Down = 2
Left = 3

*/1



var slide = function slide(direction, x0, y0, x1, y1)
{
   
    var posX = x0;
    var posY = y0;
    var slideHelper = function slideHelper(){
        ctx.clearRect(100 * posX + 8, 100 * posY + 8, 100, 100);
        if (Math.abs(posX - x1) > 1 || Math.abs(posY - y1)  > 1)
        {
	    console.log(posX+" "+posY+" Destination: "+x1+" "+y1);
           
            switch (direction){
            case 0:
                // up
		            posY -= 0.5;
                console.log("up");
                break;
            case 1:
                // right
                console.log("right");
		            posX += 0.5;
                
                break;
            case 2:
                // down
                console.log("down");
		            posY += 0.5;
             
                break;
            case 3:
                // left
                console.log("Left");
		            posX -= 0.5;
              
                break;


            }
            drawTile(x1, y1, posX * 100 + 8, posY * 100 + 8);
            slideCode = window.requestAnimationFrame(slideHelper);
        }
        else {
            drawGrid();
            console.log("finished");
            return;
        }

    }
    slideHelper();

};
