// game vars
var
	field_size = [15, 15],
	// snake_array
	snake_head = [0, 6],
	snake_direction = 0,
	food_pos = [1, 3],

// graphic vars
	cell_size = 10;
	// colors...
	
setInterval(compute, 1000);

function compute() {
// while true
	// if key pressed
		// change direction
	// step
	// case direction
		snake_head[0] += 1;
	
	draw();
}

function draw() {
  var canvas = document.getElementById('canvas');
  
  if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
  
	ctx.fillStyle="gray";
	ctx.fillRect(0, 0, 150, 150);

	// field
		// for
			// for
			
	// food
	ctx.fillStyle="#990000";
	ctx.fillRect(food_pos[0]*cell_size, 
				 food_pos[1]*cell_size, 
				 cell_size, 
				 cell_size);

	ctx.fillStyle="black";
	// for
		// snake
		ctx.fillRect(snake_head[0]*cell_size, 
					 snake_head[1]*cell_size, 
					 cell_size, 
					 cell_size);
  }
}
