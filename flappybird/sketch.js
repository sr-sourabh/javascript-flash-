var b;
var p = [];
var score = 0;
var gameover=0;



function setup() {
  createCanvas(1000,600);
  b = new bird();
  p.push(new pipe());
  
}

function draw() {
	
	
	
	
	if(gameover==1)
	{
		background(255);
		textSize(50);
		text("Score:  ",100,height/2);
		fill(0,0,255);
		text(score/100,width/2-100,height/2);
		
		textSize(20);
		text("(Slide quickly anywhere or use r  to try again  )",100,height/2+50);
		text("(Use space bar or touch to jump )",100,height/2+75);
		
		
		
	}
	
	
	else
	{
		background(32,178,170);
		
		//bird
		b.draw();
		b.update();
		
		//new pipe push
		if(frameCount %100 ==0)
		{
			p.push(new pipe());
		}
		
		for(var i = p.length - 1;i >= 0;i--)
		{
			p[i].show();
			p[i].update();
			
			if(p[i].hits(b))
			{
				gameover = 1;
			}
			
			if(p[i].off())
			{
				p.splice(i,1);
			}
			
		}
		
		//score
		score++;
		
		textSize(30);
		fill(0,0,255);
		text(score/100,30,40);
	}

}

function keyTyped()
{
	if(key == ' ')
	{
		b.up();
		console.log("space");
		
	}
	if(key === "r")
	{
		resetit();
		console.log("f")
	}
	
	return false;
	
}

function touchStarted()
{
	
		b.up();
			//console.log("space");
		
		if(mouseX-pmouseX>100||pmouseX-mouseX>100)
		{
			//console.log(mouseX);
			//console.log(pmouseX);
			resetit();
		}
			
		return false;
	
	
}


function resetit()
{
	gameover = 0;
	p.splice(0,p.length);
	score = 0;
}

