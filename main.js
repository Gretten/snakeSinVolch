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
	// if snake meet wall or self
	// if food

	// todo: 
	// if key pressed		
	var key = 0; 
	
	// change direction
	if (key == 37) // left
		direction = 0;
	else if (key == 38)
		direction = 1;	
	else if (key == 39)
		direction = 2;	
	else if (key == 40)
		direction = 3;	
		
	// step
	// case direction
	if (direction == 0) // left
		snake_head[0] -= 1;
	else if (direction == 1) // up
		snake_head[1] -= 1;
	else if (direction == 2) // right
		snake_head[0] += 1;
	else if (direction == 3) // down
		snake_head[1] += 1;
	
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
