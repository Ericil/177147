var Tile = function(r,c,v){
    this.r = r;
    this.c = c;
    this.v = v;
}

var Game = function(g){
    this.grid = g;
    this.moves = [];
    this.empty = this.countZero();
    this.last = this.print();
}

Game.prototype.countZero = function(){
    var zs = 0;
    for (var i = 0;i<4;i++){
	for (var j = 0;j<4;j++){
	    if (this.grid[i][j] == 0){
		zs += 1;
	    }
	}
    }
    return zs;
}

Game.prototype.mergeV = function(d){ // 1 up
    var q = [];
    var dec;
    var start;
    var end;
    if (d==1){
	start = 0;
	end = 4;
	dec = 1;
    } else {
	start = 3;
	end = -1;
	dec = -1;
    }
    for (var i = 0;i<4;i++){
	var pt = start;
	for (var j = start;j != end; j += dec){
	    var k = new Tile(j,i,this.grid[j][i]);
	    if (k.v==0){
		continue;
	    }
	    if (q.length == 0){
		q.push(k);
	    } else {
		if (q[0].v == k.v){ // if q.push(new thing) == 3 merge elements then out, if not just push and stay
		    if (q.push(k) == 3){
			q = [];
			this.grid[pt][i] = k.v*3;
			this.moves.push([d+2,k.r,k.c,pt,i]);
			pt += dec;
			this.empty += 2;
		    }
		} else { // out the queue, put new stuff in
		    while(q.length > 0){
			this.grid[pt][i] = q.pop().v;
			this.moves.push([d+2,k.r,k.c,pt,i]);
			pt += dec;
		    }
		    q.push(k);
		}
	    }
	}
	while(q.length > 0){ // take out anything remaining in stack
	    this.grid[pt][i] = q.pop().v;
	    this.moves.push([d+2,k.r,k.c,pt,i]);
	    pt += dec;
	}
	while(pt > -1 && pt < 4){ // fill unfilled spots with zero
	    this.grid[pt][i] = 0;
	    pt += dec;
	}
    }
}

Game.prototype.mergeH = function(d){ // 1 left
    var q = [];
    var dec;
    var start;
    var end;
    if (d==1){
	start = 0;
	end = 4;
	dec = 1;
    } else {
	start = 3;
	end = -1;
	dec = -1;
    }
    for (var i = 0;i<4;i++){
	var pt = start;
	for (var j = start;j != end; j += dec){
	    var k = new Tile(i,j,this.grid[i][j]);
	    if (k.v==0){
		continue;
	    }
	    if (q.length == 0){
		q.push(k);
	    } else {
		if (q[0].v == k.v){ // if q.push(new thing) == 3 merge elements then out, if not just push and stay
		    if (q.push(k) == 3){
			q = [];
			this.grid[i][pt] = k.v*3;
			this.moves.push([d-1,k.r,k.c,i,pt]);
			pt += dec;
			this.empty += 2;
		    }
		} else { // out the queue, put new stuff in
		    while(q.length > 0){
			this.grid[i][pt] = q.pop().v;
			this.moves.push([d-1,k.r,k.c,i,pt]);
			pt += dec;
		    }
		    q.push(k);
		}
	    }
	}
	while(q.length > 0){
	    this.grid[i][pt] = q.pop().v;
	    this.moves.push([d-1,k.r,k.c,i,pt]);
	    pt += dec;
	}
	while(pt > -1 && pt < 4){
	    this.grid[i][pt] = 0;
	    pt += dec;
	}
    }
}

Game.prototype.print = function(){
    var t = "";
	for (var i=0;i<4;i++){
	    for(var j=0;j<4;j++){
		t += this.grid[i][j].toString();
	    }
	}
    return t;
}

Game.prototype.lose = function(){
    for(var i=0;i<4;i++){
	for(var j=0;j<4;j++){
	    this.grid[i][j] = ":(";
	}
    }
}

Game.prototype.losecheck = function(){
    for(var i = 0;i<4;i++){
	for(var j=0;j<4;j++){
	    if (j < 2){
		if (this.grid[i][j] == this.grid[i][j+1] && this.grid[i][j] == this.grid[i][j+2]){
		    return 0;
		}
	    }
	    if (i < 2){
		if (this.grid[i][j] == this.grid[i+1][j] && this.grid[i][j] == this.grid[i+2][j]){
		    return 0;
		}
	    }
	}
    }
    this.lose();
    return 1;
}
