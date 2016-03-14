var Game = function(grid){
    this.blocks = grid;
    this.empty = 0;
    for(var i=0;i<4;i++){
	for(var j=0;j<4;j++){
	    if (grid[i][j] == 0){
		this.empty += 1;
	    }
	}
    }
}
Game.prototype.mH = function(d,n){ //1 = left
    var a = 0;
	if(d==1){
	    for(var i=1;i<4;i++){
		if(this.blocks[n][i] != 0){
		    var j = i-1;
		    while(j>=0){
			if(this.blocks[n][j] != 0){
			    if ( this.blocks[n][j] == this.blocks[n][i] ){
				this.blocks[n][j] += this.blocks[n][i];
				this.blocks[n][i] = 0;
				a += 1;
				this.empty += 1;
			    } else {
				this.blocks[n][j+1] = this.blocks[n][i];
				if (j+1 != i){
				    this.blocks[n][i] = 0;
				    a += 1;
				}
			    }
			    j = -1;
			} else {
			    if (j==0){
				this.blocks[n][j] = this.blocks[n][i];
				this.blocks[n][i] = 0;
				a += 1;
			    }
			    j -= 1;
			}
		    }
		}
	    }
	} else {
	    for(var i=2;i>=0;i--){
		if(this.blocks[n][i] != 0){
		    var j = i+1;
		    while(j<4){
			if(this.blocks[n][j] != 0){
			    if ( this.blocks[n][j] == this.blocks[n][i] ){
				this.blocks[n][j] += this.blocks[n][i];
				this.blocks[n][i] = 0;
				a += 1;
				this.empty += 1;
			    } else {
				this.blocks[n][j-1] = this.blocks[n][i];
				if (j-1 != i){
				    this.blocks[n][i] = 0;
				    a += 1;
				}
			    }
			    j = 5;
			} else {
			    if (j==3){
				this.blocks[n][j] = this.blocks[n][i];
				this.blocks[n][i] = 0;
				a += 1;
			    }
			    j += 1;
			}
		    }
		}
	    }
	}
    return a;
}
Game.prototype.mV = function(d,n){ //1 = up
    var a = 0;
	if(d==1){
	    for(var i=1;i<4;i++){
		if(this.blocks[i][n] != 0){
		    var j = i-1;
		    while(j>=0){
			if(this.blocks[j][n] != 0){
			    if ( this.blocks[j][n] == this.blocks[i][n] ){
				this.blocks[j][n] += this.blocks[i][n];
				this.blocks[i][n] = 0;
				a += 1;
				this.empty += 1;
			    } else {
				this.blocks[j+1][n] = this.blocks[i][n];
				if (j+1 != i){
				    this.blocks[i][n] = 0;
				    a += 1;
				}
			    }
			    j = -1;
			} else {
			    if (j==0){
				this.blocks[j][n] = this.blocks[i][n];
				this.blocks[i][n] = 0;
				a += 1;
			    }
			    j -= 1;
			}
		    }
		}
	    }
	} else {
	    for(var i=2;i>=0;i--){
		if(this.blocks[i][n] != 0){
		    var j = i+1;
		    while(j<4){
			if(this.blocks[j][n] != 0){
			    if ( this.blocks[j][n] == this.blocks[i][n] ){
				this.blocks[j][n] += this.blocks[i][n];
				this.blocks[i][n] = 0;
				a += 1;
				this.empty += 1;
			    } else {
				this.blocks[j-1][n] = this.blocks[i][n];
				if (j-1 != i){
				    this.blocks[i][n] = 0;
				    a += 1;
				}
			    }
			    j = 5;
			} else {
			    if (j==3){
				this.blocks[j][n] = this.blocks[i][n];
				this.blocks[i][n] = 0;
				a += 1;
			    }
			    j += 1;
			}
		    }
		}
	    }
	}
    return a;
}

Game.prototype.mergeV = function(d){
    return (this.mV(d,0)+
	    this.mV(d,1)+
	    this.mV(d,2)+
	    this.mV(d,3)); 
}
Game.prototype.mergeH = function(d){
    return (this.mH(d,0)+
	    this.mH(d,1)+
	    this.mH(d,2)+
	    this.mH(d,3));
}

Game.prototype.print = function(){
	var s = "";
	for (var i=0;i<4;i++){
	    for(var j=0;j<4;j++){
		s += ""+this.blocks[i][j].toString() + " ";
	    }
	    console.log(s);
	    s = "";
	}
}

Game.prototype.lose = function(){
    for(var i=0;i<4;i++){
	for(var j=0;j<4;j++){
	    this.blocks[i][j] = ":(";
	}
    }
}

Game.prototype.losecheck = function(){
    for(var i = 0;i<4;i++){
	for(var j=0;j<4;j++){
	    if (j != 3){
		if (this.blocks[i][j] == this.blocks[i][j+1]){
		    return 0;
		}
	    }
	    if (i != 3){
		if (this.blocks[i][j] == this.blocks[i+1][j]){
		    return 0;
		}
	    }
	}
    }
    this.lose();
    return 1;
}
