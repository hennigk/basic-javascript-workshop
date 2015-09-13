/*create a file called fortune.js in your Cloud9 project. 
Running this file should output a random quote from a list of 10 
different quotes
function randomly assigns a number between one and ten to randomNumber
enters a switch statement and returns the string corresponsing to 
randomNumber*/

function fortune() {
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log("You were selected fortune # " + randomNumber);
    switch (randomNumber) {
        case 1:
            return "You have an ability to sense and know higher truth.";
        case 2: 
            return "You are taking yourself far too seriously.";
        case 3: 
            return "Don't get stuck in a closet -- wear yourself out.";
        case 4: 
            return "You will pioneer the first Martian colony.";
        case 5: 
            return "You will be married within a year.";
        case 6: 
            return "Exercise caution in your daily affairs.";
        case 7: 
            return "You are scrupulously honest, frank, and \
            straightforward.  Therefore you have few friends.";
        case 8: 
            return "You will be attacked by a beast who has the \
            body of a wolf, the tail of a lion, and the face of Donald Duck.";
        case 9: 
            return "You are a bundle of energy, always on the go";
        default: 
            return "You are fairminded, just and loving.";
    }
}


console.log(fortune());

