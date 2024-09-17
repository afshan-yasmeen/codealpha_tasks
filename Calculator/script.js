// Function to append characters to the display screen
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display screen
function clearScreen() {
    document.getElementById('display').value = '';
}

// Function to delete the last character on the screen
function deleteLast() {
    const currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

// Function to calculate and display the result
function calculate() {
    const currentDisplay = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(currentDisplay);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
