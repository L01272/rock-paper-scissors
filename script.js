//computer opponent logic

// function getComputerChoice will randomly return 1 of 3 options: RPS. 
// Use math.random for anything between 0 to 1. 
// Make the three options equal 1/3 of 1 using if blocks.
// Return one of three strings with the option. Use console.log

//human logic

//getHumanChoice, use prompt(). Assume user will always input a valid choice to save time.

//return what user selected with console.log

//scoring

//function humanScore, init with 0, ++ with every win

//function computerScore, init with 0, ++ with every win

//game logic

//function playRound will take two parameters, humanChoice and computerChoice
//make player choice insensitve to uppercase and lowercase (just make this all lowercase)
//go through an if block to determine who wins. If human chooses paper and computer choose scissors, print lose and ++ computer score
//at the end of playRound, console.log something like "You lose! Paper beats Rock". Combine the choices above to print this string

//new function playGame that calls playRound five times
//play to 5 rounds (index somewhere out of playRound that counts up to 5)
//if you assign playRound to a variable, it will return the value of the function end

//Refactor after implmenting for bonus points

//DO NOT GO OVERBOARD. Save the effort for portfolio