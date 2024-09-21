/**
 *  Rock Paper Scissors game.
 *  
 *  Rock Paper Scissors game project from the 'JS Algorithms and Data Structures' section of the FCC Curriculum
 */

/* -- INTERFACE VARIABLES -- */

/* --- END INTERFACE VARIABLES ---*/

/* --- COMPUTER PLAYER FUNCTIONS --- */

/**
 * Get Random Computer Result
 *
 * Chooses the Computer player's option for current round
 * @function getRandomComputerResult
 * @returns {string} Computer option.
 */
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    
    const guess = Math.floor(Math.random() * 3 + 0);
    return options[guess];
}

console.log(getRandomComputerResult());
/* --- END COMPUTER PLAYER FUNCTIONS --- */
