// Rover Object Goes Here
// ======================
var myRover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;

    case "E":
    rover.direction = "N";
      break;

    case "S":
    rover.direction = "E";
      break;

    case "W":
    rover.direction = "S";
    break;
  }
  console.log("La dirección de Rover es " + rover.direction);
  myRover.travelLog.push( "turnLeft: " + rover.direction);
}

turnLeft(myRover);

function turnRight(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;

    case "E":
    rover.direction = "S";
      break;

    case "S":
    rover.direction = "W";
      break;

    case "W":
    rover.direction = "N";
    break;
  }
  console.log("La dirección de Rover es " + rover.direction);
  myRover.travelLog.push( "turnRight: " + rover.direction);
}
turnRight(myRover);

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      rover.y--;
      break;
    
    case "E":
      rover.x++;
      break;
    
    case "S":
      rover.y++;
      break;

    case "W":
      rover.x--;
      break;
  }
  console.log("Posición horizontal: " +rover.x);
  console.log("Posición vertical: " +rover.y);
  myRover.travelLog.push( '(' + rover.x + ',' + rover.y + ')' );
}

moveForward(myRover);

function moveBackward (rover){
  switch (rover.direction) {
    case "N":
      rover.y++;
      break;
    
    case "E":
      rover.x--;
      break;
    
    case "S":
      rover.y--;
      break;

    case "W":
      rover.x++;
      break;
  }
  console.log("Posición horizontal: " +rover.x);
  console.log("Posición vertical: " +rover.y);
  myRover.travelLog.push( '(' + rover.x + ',' + rover.y + ')' );
}

moveBackward(myRover);


function listCommands( str ){

  str.split('').forEach( letra => {

    switch (letra) {
      case 'f':
        moveForward( myRover );
      break;

      case 'l':
        turnLeft( myRover );
      break;

      case 'r':
        turnRight( myRover );
      break;
    }
  } );
}
listCommands('rffrfflfrff');