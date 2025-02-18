//global variables, can be accessed by all functions

  //declare a variable named playerName that stores the value the player enters from a prompt
let playerName = prompt("player name: "); 
 
//declare a variable named playerHealth and set it equal to the number value 15
let playerHealth = 15; 

  
  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
let monsterName =  'Werewolf'; 

  //declare a variable named monsterHealth and set it equal to the number value 15
let monsterHealth = 15; 


//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function playerAttack(){
//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
  let playerAttackPoints = randomNum(1, 6)

//subtract playerAttackPoints from monsterHealth and update the monsterHealth variable
  monsterHealth = monsterHealth - playerAttackPoints
  
  //use an alert with string template literals to tell the player: 
  // 1. player attacked monster 
  // 2. how much damage the player did 
  // 3. how much health the monster has 
  alert(`Player ${playerName} attacked monster ${monsterName}. The player did ${playerAttackPoints} points damage! Monster ${monsterName} has : ${monsterHealth} health`)
}

function monsterAttack(){
  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
  let monsterAttackPoints = randomNum(1, 6)
  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
  playerHealth = playerHealth - monsterAttackPoints
  //use an alert with string template literals to tell the player: 
  // 1. monster attacked player 
  // 2. how much damage the monster did 
  // 3. how much health the player has 
  alert(`Monster ${monsterName} attacked ${playerName}. The monster did ${monsterAttackPoints} points damage! ${playerName} has : ${playerHealth} health`)

}

function playRound() {
  //use randomNum to return either 0 or 1
  num = randomNum(0,2)
  //0 = player goes first, 1 = monster goes first
 
  //use if/else to determine who goes first
  
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack
  if (num === 0){
    playerAttack()
    if (monsterHealth > 0){
      monsterAttack()
        }
  }

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 

  else if(num === 1){
    monsterAttack()
    if (playerHealth > 0){
      playerAttack()
    }
  }
}
  
function playGame() {
  //beginning game message
  alert(
    `Hello, ${playerName}! You are fighting monster ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(playerHealth > 0 && monsterHealth > 0){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(`This is round number ${roundNumber}, ${playerName}'s health is ${playerHealth} and the monster's health is ${monsterHealth} `)
   
    //call playRound inside the while loop
   playRound() 
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message
  if (playerHealth > monsterHealth){
    alert(`${playerName} win!!\n Monster loses`)
  } else {
    alert(`Monster wins!!\n ${playerName} loses`)
  }
}

//call playGame to start game
playGame()