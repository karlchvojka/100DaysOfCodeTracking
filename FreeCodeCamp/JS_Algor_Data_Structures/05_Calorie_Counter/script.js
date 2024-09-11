/**
 *  Calorie Counter - FCC Project
 *
 *  Calorie Counter project from the 'JS Algorithms and Data Structures section of the FCC Curriculum/
 */

/* --- INTERFACE VARIABLES --- */

const caldorieCounter = document.getElementById('calorie-counter');

// Input Element Variables
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');

// Interactable Element Variables
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');

// Display Element Variables
const output = document.getElementById('output');

/* --- END INTERFACE VARIABLES --*/

/* --- APP DATA --- */
let isError = false;
/* --- END APP DATA --- */

/* --- GLOBAL FUNCTIONS ---*/

/**
 * Clean Input String
 *
 * Remove non-numeric variables
 * @function cleanInputString
 * @param {string} str Data from input.
 */
function cleanInputString(str) {
    const regex = /\+-\s/;
}

/* --- END GLOBAL FUNCTIONS ---*/