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

/* --- EVENT LISTENER ATTACHMENTS --- */

addEntryButton.addEventListener("click", addEntry);

/* --- END EVENT LISTENER ATTACMENTS --- */

/* --- GLOBAL FUNCTIONS ---*/

/**
 * Clean Input String
 *
 * Remove +, -, and whitespace variables
 * @function cleanInputString
 * @param {string} str Data from input.
 * @returns {string} sanitized string.
 */
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

/**
 * Is Invalid Input
 *
 * Checks for invalid inputs
 * @function isInvalidInput
 * @param {string} str Data from input
 * @returns {array} Array from the match() return or null.
 */
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

/**
 * Add Entry
 *
 * Adds an entry box to the selected category.
 * @function addEntry
 */
function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" type="text" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" type="number" min="0" />`;
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

/**
 * Get Calories from Inputs.
 *
 * Will get calorie amounts from user inputs.
 * @function getCaloriesFromInputs
 * @param {array} list NodeList of Inputs.
 * @returns {} unknown
 */
function getCaloriesFromInputs(list) {
    let calories = 0;
    for (const item of list) {
        const currVal = item.value;
    }
}

/* --- END GLOBAL FUNCTIONS ---*/
