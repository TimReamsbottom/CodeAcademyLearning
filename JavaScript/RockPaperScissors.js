//Example project showing different syntax for functions.
const getUserChoice = userInput => {
  switch (userInput.toLowerCase()){
    case 'rock':
      return 'rock';
      break;
    case 'paper':
      return 'paper';
      break;
    case 'scissors':
      return 'scissors';
      break;
    case 'bomb':
      return 'bomb';
      break;
    default:
      console.log(userInput + " is not a valid choice");
      return '';
      break;

  };
};

function getComputerChoice(){
  switch (Math.floor(Math.random() * 3)){
    case 0:
    	return 'rock';
    	break;
    case 1:
    	return 'paper';
    	break;
    case 2:
    	return 'scissors';
    	break;
  };
};

//Calculate the winner..
const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === 'bomb') {
  	return 'user wins';
  }else if (userChoice === computerChoice){
    return 'tie';
  }else if (userChoice === 'rock') {
  	switch (computerChoice){
    	case 'paper':
      	return 'computer wins';
      	break;
     	case 'scissors':
      	return 'user wins';
      	break;
    };
  }else if (userChoice === 'paper') {
  	switch (computerChoice){
    	case 'rock':
      	return 'user wins';
      	break;
     	case 'scissors':
      	return 'computer wins';
     		break;
    }
 	} else if (userChoice === 'scissors') {
  	switch (computerChoice){
    	case 'rock':
      	return 'computer wins';
      	break;
    	case 'paper':
      	return 'user wins';
      	break;
    };
  }
};

//Play function
const playGame = () => {
	let userChoice = getUserChoice('bomb');
  let computerChoice =  getComputerChoice();
  console.log(`User chooses ${userChoice} , computer chooses ${computerChoice}`)
  return (determineWinner (userChoice,computerChoice));
};

console.log(playGame());
