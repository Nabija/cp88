
var canvas= new fabric.Canvas('myCanvas');

 ball_x=0;
 ball_y=0;
 hole_x=800;
 hole_y=400

block_image_width = 5;
block_image_height = 5;

function load_image()
{
	fabric.Image.fromURL(get_image, function(Img) 
    { 
        hole_object = Img;
        hole_object.scaleToWidth(50); 
        hole_object.scaleToHeight(50); 
        hole_object.set({
			top:hole_y, 
			left:hole_x 
	    }); 
        canvas.add(hole_obj); 
        }); 
	new_image();
}

function new_image(){
	fabric.Image.fromURL(ball.png, function(Img) 
    { 
        ball_obj = Img;
        ball_obj.scaleToWidth(50); 
        ball_obj.scaleToHeight(50); 
        ball_obj.set({ 
			top:ball_y,
			left:ball_x 
	    }); 
        canvas.add(ball_obj); 
        }); 
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if ((ball_x==hole_x)&&(ball_y==hole_y)){
        canvas.remove(ball_obj);
        document.getElementById("hd3").innerHTML="You have hit the GOAL!!!";
        document.getElementById("myCanvas").style.borderColor="red";
    }

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y <=500)
    {
        ball_y = ball_y + block_image_height;
        console.log("block_image_height = "+ block_image_height);
        console.log("When Up arrow key is pressed X ="+ ball_x +" , Y ="+ ball_y);
        canvas.remove(ball_obj);
        player_update;
    }
	}

	function down()
	{
		if (ball_y <=450)
    {
        ball_y = ball_y + block_image_height;
        console.log("block_image_height = "+ block_image_height);
        console.log("When Down arrow key is pressed X ="+ ball_x +" , Y ="+ ball_y);
        canvas.remove(ball_obj);
        player_update;
    }
	}

	function left()
	{
		if(ball_x >5)
	{
        ball_y = ball_y + block_image_height;
        console.log("block_image_height = "+ block_image_height);
        console.log("When Left arrow key is pressed X ="+ player_x +" , Y ="+ player_y);
        canvas.remove(ball_obj);
        player_update;
    }
	}

	function right()
	{
		if(ball_x <=1050)
	{
	
        ball_y = ball_y + block_image_height;
        console.log("block_image_height = "+ block_image_height);
        console.log("When Right arrow key is pressed X ="+ ball_x +" , Y ="+ ball_y);
        canvas.remove(ball_obj);
        player_update;
	}
	}
	
}