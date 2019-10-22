
let angle = 10

let paint_mode = false

let current_stroke = 1

let line_mode = false

let diagonal_mode = false

let splatter_mode = false

let black_circle_mode = false

let white_circle_mode = false

function setup() {

	let canvas = createCanvas(700, 500)
	canvas.parent("p5")

	rect(0, 0, width, height)
	
	angleMode(DEGREES)

	fill(255, 0, 0, 200)
	
}


function draw() {

	//draw with circles --> ellipse(mouseX, mouseY, mouseX10, mouseY10)
	//draw with lines --> line (mouseX, mouseY, mouse+10, mouseY+10)
	//draw at an angled line --> line(mouseX, mouseY, 50, 50, angle, angle+50)
	// draw with an arc (piece of circle)--> arc(mouseX, mouseY, 50, 50, angle, angle+50)

	if(paint_mode == true) {
		print('drawing mode is on')
		
		//paint splatter affect
		if (splatter_mode == true){
			strokeWeight(random(1, 5))
		point(mouseX + random(-10, 10), mouseY + random(-10, 10))
		}
		
		//draw with black circles
		if (black_circle_mode == true) {
			fill(0)
			ellipse(mouseX+5, mouseY+5, mouseX, mouseY)
		}

		//draw with white circles
		if (white_circle_mode == true) {
			fill(255, 255, 255)
			ellipse(mouseX+5, mouseY-5, mouseX, mouseY)
		}
		
		//draw with line
		if (line_mode == true) {
			line(mouseX, mouseY, pmouseX, pmouseY)
		}

		//ellipse(mouseX, mouseY, mouseX-10, mouseY-10)
	
		//draw with line from two point
		//line(mouseX, mouseY, 150, 150)

		//ribbon effect - just drawing with diagonal lines
		if (diagonal_mode == true) {
			line(mouseX-10, mouseY-10, mouseX+10, mouseY+10)
		}
		
			//shorter diagonal lines
			//line (mouseX, mouseY, mouseX+10, mouseY+10)
		
		//star



		//draw with x's
		//line(mouseX-10, mouseY-10, mouseX+10, mouseY+10)
		//line(mouseX+10, mouseY-10, mouseX-10, mouseY+10)

		//draws with red cones
		//arc(mouseX, mouseY, 50, 50, angle, angle+50)
		 //angle + 1

		// makes a shape with connecting lines
		//line(0, 0, mouseX, mouseY)
		//line(0, width, mouseX, mouseY)
		//line(height, width, mouseX, mouseY)
		//line(height, 0, mouseX, mouseY)

	} else {
		print('drawing mode is off')
	}
	
	push()
    stroke(0)
    strokeWeight(1)
	// make the bottom toolbar
    fill(135, 206, 250)
    rect(0, 450, width, 50)
    
    // make the side toolbar
    fill(135, 206, 235)
    rect(0, 0, 50, height)

    stroke(0)
    // make the red button
    fill(255, 0, 0)
    rect(10, 10, 30, 30)

    // make the orange button
    fill(255, 140, 0)
    rect(10, 50, 30, 30)

    //make the yellow button
    fill (255, 215, 0)
    rect(10, 90, 30, 30)

    // make the green button
    fill(50, 205, 50)
    rect(10, 130, 30, 30)

    //make the blue button
    fill (30, 144, 255)
    rect(10, 170, 30, 30)

    // make the purple button
    fill (255, 0, 255)
    rect(10, 210, 30, 30)

    //make the black button
    fill(0, 0, 0)
    rect(10, 250, 30, 30)

    //make the white button
    fill(255, 255, 255)
    rect(10, 290, 30, 30)

    //make an increase strokeweight button
    push()
    fill(255, 255, 255)
    rect(10, 330, 30, 30)
    strokeWeight(5)
    line(15, 345, 35, 345)
    pop()

    //make a decrease strokeweight button
    push()
    fill(255, 255, 255)
    rect(10, 370, 30, 30)
    strokeWeight(1)
    line(15, 385, 35, 385)
    pop()
    

    //bottom bar brush buttons

    //diagonal line button
    fill(255, 255, 255)
    rect(60, 460, 30, 30)
    line(60, 460, 90, 490)

    //draw line button
    fill(255, 255, 255)
   	rect(100, 460, 30, 30)
   	line(105, 475, 125, 475)

   	//splatter brush button
   	fill(255, 255, 255)
   	rect(140, 460, 30, 30)
   	fill(0)
   	ellipse(150, 470, 8)
   	ellipse(160, 471, 5)
   	ellipse(151, 480, 3)
   	ellipse(159, 478, 2)

   	//black circle brush button
   	fill(255, 255, 255)
   	rect(180, 460, 30, 30)
   	fill(0)
   	ellipse(195, 475, 20)

   	//white circle brush button
   	fill(255, 255, 255)
   	rect(220, 460, 30, 30)
   	fill(255, 255, 255)
   	ellipse(235, 475, 20)

    pop()

}


function mousePressed(){
	paint_mode = true

	//randomly assings a different color to each mouse press
	//stroke(random(255), random(255), random(255), 100)
}


function mouseReleased() {
	paint_mode = false

}


function mouseClicked() {

	print(int(mouseX), int(mouseY))
	 // check to see if the mouse click was within the red button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
        stroke(255, 0, 0)
    }

    //mouse click within orange button
    if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 90) {
    	stroke (255, 140, 0)
    }

	// check to see if the mouse click was within the yellow button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 130) {
    	stroke(255, 215, 0)
    }

    // check to see if the mouse click was within the green button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 170) {
        stroke(50, 205, 50)
    }

    //mouse click on blue button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 210) {
    	stroke(30, 144, 255)
    }

    //mouse click on purple button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 210 && mouseY < 250) {
    	stroke(255, 0, 255)
    }

    //mouse click on black button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 250 && mouseY < 290) {
    	stroke(0, 0, 0)
    }

    //mouse click on white button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 290 && mouseY < 330) {
    	stroke(255, 255, 255)
    }

    //test if mouse clicked in strokeweight increase box
    if (mouseX > 10 && mouseX < 40 && mouseY > 330 && mouseY < 370) {
    	//strokeWeight(5)
    	current_stroke += 1
    	strokeWeight(current_stroke)
    }

    //test if mouse clicked in strokewieght decrease box
    if (mouseX > 10 && mouseX < 40 && mouseY > 370 && mouseY < 410) {
    	current_stroke -= 1
    	strokeWeight(current_stroke)
    }

    //test if mouse clicked on diagonal_mode draw button
    if (mouseX > 60 && mouseX < 90 && mouseY > 460 && mouseY < 490) {
    	//line(mouseX-10, mouseY-10, mouseX+10, mouseY+10)
    	if (diagonal_mode == false) {
    		diagonal_mode = true
    	} else {
    		diagonal_mode = false
    	}
    
	}

	//test if mouse clicked on line_mode draw button
	if (mouseX > 100 && mouseX < 130 && mouseY > 460 && mouseY < 490) {
		if (line_mode == false) {
			line_mode = true
		} else {
			line_mode = false
		}
	}

	//test mouse click on splatter button
	if (mouseX > 140 && mouseX < 170 && mouseY > 460 && mouseY < 490){
		if (splatter_mode == false) {
			splatter_mode = true
		} else {
			splatter_mode = false
		}
		
	}

	//test mouse click on black_circle button
	if (mouseX > 180 && mouseX < 210 && mouseY > 460 && mouseY < 490){
		if (black_circle_mode == false) {
			black_circle_mode = true
		} else {
			black_circle_mode = false
		}
	}

	//test mouse click on white_circle button
	if (mouseX > 220 && mouseX < 250 && mouseY > 460 && mouseY < 490) {
		if(white_circle_mode == false) {
			white_circle_mode = true
		} else {
			white_circle_mode = false
		}
	}
}





