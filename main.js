// game vars
var
	field_size = [15, 15];
	// snake_array
	// snake_head
	// snake_direction
	// food_pos

// graphic vars
	// cell size (visible width)
	// colors...

setInterval(draw, 1000);

// while true
	// if key pressed
		// change direction
	// step
	// draw
	// pause

function draw() {
  var canvas = document.getElementById('canvas');
  
  if (canvas.getContext) {
	// ctx.clearRect(45,45,60,60);
	// ctx.strokeRect(50,50,50,50);
	console.log("canvas is successed found");
  
    var ctx = canvas.getContext('2d');

	// field
		// for
			// for
			
	// food
	ctx.fillRect(25, 25, 100, 100);

	// for
		// snake
  }
}
