var Block = class Block {
  constructor(x, y, v) {
    this.x = x;
    this.y = y;
    this.v = v;
  }

    get x(){
	return this.x;
    }
    get y(){
	return this.y;
    }
    get v(){
	return this.z;
    }
    set x(x){
	this.x = x;
    }
    set y(y){
	this.y = y;
    }
    set v(v){
	this.v = v;
    }
};

var Game = class Game {
    constructor(){
	this.blocks = [];
	for(var i=0;i<4;i++){
	}
    }

}
