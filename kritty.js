var Block = function (x,y,v) {
    this.x = x;
    this.y = y;
    this.v = v;
};

var Game = function(){
    this.blocks = [];
    for(var i=0;i<4;i++){
	this.blocks[i] = [new Block(i,0,0), new Block(i,1,0), new Block(i,2,0), new Block(i,3,0)]
    }
}
Game.prototype.mH = function(d,n){ //1 = left
	if(d==1){
	    for(var i=1;i<4;i++){
		if(this.blocks[n][i].v != 0){
		    var j = i-1;
		    while(j>=0){
			if(this.blocks[n][j].v != 0){
			    if ( this.blocks[n][j].v == this.blocks[n][i].v ){
				this.blocks[n][j].v += this.blocks[n][i].v;
				this.blocks[n][i] = new Block(n,i,0);
			    } else {
				this.blocks[n][j+1].v = this.blocks[n][i].v;
				if (j+1 != i){
				    this.blocks[n][i] = new Block(n,i,0);
				}
			    }
			    j = -1;
			} else {
			    if (j==0){
				this.blocks[n][j].v = this.blocks[n][i].v;
				this.blocks[n][i] = new Block(n,i,0);
			    }
			    j -= 1;
			}
		    }
		}
	    }
	} else {
	    for(var i=2;i>=0;i--){
		if(this.blocks[n][i].v != 0){
		    var j = i+1;
		    while(j<=4){
			if(this.blocks[n][j].v != 0){
			    if ( this.blocks[n][j].v == this.blocks[n][i].v ){
				this.blocks[n][j].v += this.blocks[n][i].v;
				this.blocks[n][i] = new Block(n,i,0);
			    } else {
				this.blocks[n][j-1].v = this.blocks[n][i].v;
				if (j-1 != i){
				    this.blocks[n][i] = new Block(n,i,0);
				}
			    }
			    j = 5;
			} else {
			    if (j==0){
				this.blocks[n][j].v = this.blocks[n][i].v;
				this.blocks[n][i] = new Block(n,i,0);
			    }
			    j += 1;
			}
		    }
		}
	    }
	}
}
Game.prototype.mV = function(d,n){ //1 = up
	if(d==1){
	    for(var i=1;i<4;i++){
		if(this.blocks[i][n].v != 0){
		    var j = i-1;
		    while(j>=0){
			if(this.blocks[j][n].v != 0){
			    if ( this.blocks[j][n].v == this.blocks[i][n].v ){
				this.blocks[j][n].v += this.blocks[i][n].v;
				this.blocks[i][n] = new Block(i,n,0);
			    } else {
				this.blocks[j+1][n].v = this.blocks[i][n].v;
				if (j+1 != i){
				    this.blocks[i][n] = new Block(i,n,0);
				}
			    }
			    j = -1;
			} else {
			    if (j==0){
				this.blocks[j][n].v = this.blocks[i][n].v;
				this.blocks[i][n] = new Block(i,n,0);
			    }
			    j -= 1;
			}
		    }
		}
	    }
	} else {
	    for(var i=2;i>=0;i--){
		if(this.blocks[i][n].v != 0){
		    var j = i+1;
		    while(j<=4){
			if(this.blocks[j][n].v != 0){
			    if ( this.blocks[j][n].v == this.blocks[i][n].v ){
				this.blocks[j][n].v += this.blocks[i][n].v;
				this.blocks[i][n] = new Block(i,n,0);
			    } else {
				this.blocks[j-1][n].v = this.blocks[i][n].v;
				if (j-1 != i){
				    this.blocks[i][n] = new Block(i,n,0);
				}
			    }
			    j = 5;
			} else {
			    if (j==0){
				this.blocks[j][n].v = this.blocks[i][n].v;
				this.blocks[i][n] = new Block(i,n,0);
			    }
			    j += 1;
			}
		    }
		}
	    }
	}
}

Game.prototype.mergeV = function(d){
    this.mV(d,0);
    this.mV(d,1);
    this.mV(d,2);
    this.mV(d,3);
}
Game.prototype.mergeH = function(d){
    this.mH(d,0);
    this.mH(d,1);
    this.mH(d,2);
    this.mH(d,3);
}

Game.prototype.print = function(){
	var s = "";
	for (var i=0;i<4;i++){
	    for(var j=0;j<4;j++){
		s += ""+this.blocks[i][j].v.toString() + " ";
	    }
	    console.log(s);
	    s = "";
	}
    }
    

var g = new Game();

g.blocks[0][0].v = 2;
g.blocks[0][2].v = 2;
g.blocks[0][3].v = 2;
g.print()
g.mergeH(1);
g.print();
g.mergeH(1);
g.print();
