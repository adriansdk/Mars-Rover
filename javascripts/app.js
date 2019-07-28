// Rover Object Goes Here
// ======================

var rover = {
  direction: "North", 
  xPosition: 5,
  yPosition: 5,
}

var mars = document.getElementById("tableMars");

// TABLE CREATION FUNCTION 
function createMars(){
    for (var i=0; i<10; i++){
      var row = mars.insertRow();
      row.className += "tableRows";
      var collums = document.getElementsByClassName("tableRows");
      for (var j=0; j<10; j++){
        collums[i].insertCell();
      }
    }
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(this.rover.direction){
    case "North":
      this.rover.direction = "West";
      break;

    case "West":
      this.rover.direction = "South";
      break;
    
    case "South":
      this.rover.direction = "East";
      break;
    
    case "East":
      this.rover.direction = "North";
      break;
  }

}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(this.rover.direction){
    case "North":
      this.rover.direction = "East";
      break;

    case "East":
      this.rover.direction = "South";
      break;
    
    case "South":
      this.rover.direction = "West";
      break;
    
    case "West":
      this.rover.direction = "North";
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  if (this.rover.direction === "North" && this.rover.yPosition < 10){  
    this.rover.yPosition = this.rover.yPosition + 1
  } else if (this.rover.direction === "East" && this.rover.xPosition < 10){
    this.rover.xPosition = this.rover.xPosition + 1
  } else if (this.rover.direction === "South" && this.rover.yPosition > 0){
    this.rover.yPosition = this.rover.yPosition - 1
  } else if (this.rover.direction === "West" && this.rover.xPosition > 0){
    this.rover.xPosition = this.rover.xPosition -1
  }
  console.log("The rover is in the X = " + this.rover.yPosition, " Y = " + this.rover.xPosition, " position")
  
}
