
// parent class for Monster and Hero named Fighter  

class Fighter{
  // Fighter has properties: name, healthPoints
  constructor(name){
    this.name = name;
    this.healthPoints = 15;
    
  }

  randomNum(min, max) {
    //return a random integer between min - max
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
  }

  // Fighter has an attack method that takes in the opponent's object and decreases its' health
  attack(opponentObject){
    //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
      let opponentPoints = this.randomNum(1, 6)

      opponentObject.healthPoints = opponentObject.healthPoints - opponentPoints
      
    alert(`${opponentObject.name} attacked. There was ${opponentPoints} points damage!`)

    }
}




// Monster and Hero will extend Fighter and add at least 1 unique property to each 

class Monster extends Fighter{
  constructor(name, size){
  super(name)
  this.size = size; 
  

  }
}


class Hero extends Fighter{
  constructor(name, size){
  super(name)
  this.size = size; 

  }
}

let hero = new Hero(prompt('Enter your name: '), prompt('Enter your size: \n(small, regular, big, Giant)'))
let monster = new Monster('RandWolf', prompt(`Your size is ${hero.size}. Chose monster size: \n Big or Giant`))
 
console.log(monster.name)
console.log(hero.name)   



function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}


function playRound(hero, monster) {
  //use randomNum to return either 0 or 1
  num = randomNum(0,2)
  //0 = player goes first, 1 = monster goes first
 
  //use if/else to determine who goes first
  
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack
  if (num === 0){
    hero.attack(monster)
    if (monster.healthPoints > 0){
      monster.attack(hero)
        }
  }

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 

  else if(num === 1){
    monster.attack(hero)
    if (hero.healthPoints > 0){
      hero.attack(monster)
    }
  }
}
  
function playGame(hero, monster) {
  //beginning game message
  alert(
    `Hello, ${hero.name}! You are fighting monster ${monster.name}! Your health is at ${hero.healthPoints} points, ${monster.name}'s health is at ${monster.healthPoints} points.`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(hero.healthPoints > 0 && monster.healthPoints > 0){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(`This is round number ${roundNumber}, ${hero.name}'s health is ${hero.healthPoints} and the monster's health is ${monster.healthPoints} `)
   
    //call playRound inside the while loop
   playRound(hero, monster) 
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message
  if (hero.healthPoints > monster.healthPoints){
    alert(`${hero.name} win!!\n Monster loses`)
  } else {
    alert(`Monster wins!!\n ${hero.name} loses`)
  }
}

//call playGame to start game
playGame(hero, monster)