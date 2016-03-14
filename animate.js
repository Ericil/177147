
var j, k
/*
Up = 0
Right = 1
Down = 2
Left = 3

*/

var slide = function slide(direction, tileX, tileY)
{
    var posX = tileX;
    var posY = tileY;
    var slideHelper = function slideHelper(){
        if (x < tileX + 1 &&  y < tileY + 1 && x > tileX - 1 && y > tileY - 1)
        {
            ctx.clearRect(100 * posX + 8, 100 * posY + 8, 100, 100);
            switch (direction){
            case 0:
                // up
                posY = posY - 1;
                break;
            case 1:
                // right
                posX = posX + 1;
                break;
            case 2:
                // down
                posY = posY + 1;
                break;
            case 3:
                // left
                posX = posX - 1;
                break;


            }
            drawTile(tileX, tileY, posX, posY);
            slideCode = window.requestAnimationFrame(slideHelper);
        }
    }

};

var slide2 = function slide2(direction, x0, y0, x1, y1)
{
    var posX = x0;
    var posY = y0;
    var slideHelper = function slideHelper(){
        if (posX != x1 && posY != y1)
        {
            ctx.clearRect(100 * posX + 8, 100 * posY + 8, 100, 100);
            switch (direction){
            case 0:
                // up
                ctx.translate(0, -1);
                break;
            case 1:
                // right
                ctx.translate(1, 0)
                break;
            case 2:
                // down
                ctx.translate(0, 1)
                break;
            case 3:
                // left
                ctx.translate(-1, 0)
                break;nn


            }
            drawTile(x0, y0, posX, posY);
            slideCode = window.requestAnimationFrame(slideHelper);
        }
    }

};
