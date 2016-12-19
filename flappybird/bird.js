 function bird() {
	this.x = 200;
	this.y = height/2;
	this.velocity=0;
	this.gravity = 1.8;
	
	this.draw = function()
	{
		
		fill(255);
		ellipse(this.x,this.y,50);
		
	}
	
	this.update = function()
	{
		
		
		this.velocity +=this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;
		
		
		if (this.y >height)
		{
			this.y = height;
			this.velocity = 0;
			
		}
		
		if (this.y <0)
		{
			this.y = 0;
			this.velocity = 0;
			
			
		}
		
	}
	
	this.up = function()
	{
		this.velocity-=30;
	}
	
	
}