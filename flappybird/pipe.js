function pipe ()
{
	this.topp = random(height/2);
	this.gap = 220;
	
	this.w = 50;
	this.x = width;
	
	this.show = function(){
		fill(50,205,50);
		rect(this.x,0,this.w,this.topp);
		rect(this.x,this.topp+this.gap,this.w,height-this.topp+this.gap);
	}
	this.update = function(){
		this.x -=3;
	}
	
	this.off = function(){
		return (this.x<-this.w);
	}
	
	this.hits= function(b){
		if(b.y-50<this.topp||b.y+50>this.topp+this.gap)
		{
			if(b.x>this.x&&b.x<this.x + this.w)
			{return true;}
		}
		return false;
	}
	
}