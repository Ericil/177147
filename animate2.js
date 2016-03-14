

/*
Up = 0
Right = 1
Down = 2
Left = 3

 */
var slide = function slide(m)
{
    //var posX = tileX;
    //var posY = tileY;
    //var posX2 = tileX2;
    //var posY2 = tileY2;
    for (var i = 0;i<m.length;i++){
	m[i].push((m[i][2] - m[i][0])/10);
	m[i].push((m[i][3] - m[i][1])/10);
    }
    var slideHelper = function slideHelper(n){
	if (n >= 10){
	    drawGrid();
	    return;
	}
        for (var i = 0;i<m.length;i++)
        {
	    
            ctx.clearRect(100 * m[i][0] + 8, 100 * m[i][1] + 8, 100, 100);
            m[i][0] += m[i][4];
	    m[i][1] += m[i][5];
	    //drawGrid();
	    drawTile (m[i][2],m[i][3],m[i][0]*100+8,m[i][1]*100+8);
	}
	slideCode = window.requestAnimationFrame(function () { slideHelper (n+1) });
    }

    slideHelper(0);

};
