/*
File: main.js
GUI Assignment: HW 4 Using the jQuery Plugin/UI with Your Dynamic Table
Senny Lu, UMass Lowell Computer Science, senny_lu@student.uml.edu 
Copyright (c) 2025 by Senny. All rights reserved.  May be freely copied or 
excerpted for educational purposes with credit to the author. 
updated by SL on June 22nd, 2025 at 11:30 PM
*/

// Event Listener to find out what button was pressed
const form = document.getElementById("info");
var buttonPressed = null;
form.addEventListener("submit", function(event) {
    buttonPressed = event.submitter.id;
    if (buttonPressed == "Clear") {
        const container = document.getElementById("tableContainer");
        container.innerHTML = "";
        return;
    };
});

// JQuery Validation to make sure each input is entered, a number, and between -50 and 50
$("#info").validate({
    rules: {
        minimumColumn: {
            required: true,
            number: true,
            min: -50,
            max: 50,
        },
        maximumColumn: {
            required: true,
            number: true,
            min: -50,
            max: 50,
        },
        minimumRow: {
            required: true,
            number: true,
            min: -50,
            max: 50,
        },
        maximumRow: {
            required: true,
            number: true,
            min: -50,
            max: 50,
        }
    },

    // Error messages for the validation of inputs
    messages: {
        minimumColumn: {
            required: "<br>Error: Minimum Column cannot be empty<br>Please enter a number",
            number: "<br>Error: Minimum Column is Not a Number<br>Please enter a number",
            min: "<br>Error: Minimum Column is less than -50<br>Please enter number greater than -51",
            max: "<br>Error: Minimum Column is greater than 50<br>Please enter number less than 51",
        },
        maximumColumn: {
            required: "<br>Error: Maximum Column cannot be empty<br>Please enter a number",
            number: "<br>Error: Maximum Column is Not a Number<br>Please enter a number",
            min: "<br>Error: Maximum Column is less than -50<br>Please enter number greater than -51",
            max: "<br>Error: Maximum Column is greater than 50<br>Please enter number less than 51",
        },
        minimumRow: {
            required: "<br>Error: Minimum Row cannot be empty<br>Please enter a number",
            number: "<br>Error: Minimum Row is Not a Number<br>Please enter a number",
            min: "<br>Error: Minimum Row is less than -50<br>Please enter number greater than -51",
            max: "<br>Error: Minimum Row is greater than 50<br>Please enter number less than 51",
        },
        maximumRow: {
            required: "<br>Error: Maximum Row cannot be empty<br>Please enter a number",
            number: "<br>Error: Maximum Row is Not a Number<br>Please enter a number",
            min: "<br>Error: Maximum Row is less than -50<br>Please enter number greater than -51",
            max: "<br>Error: Maximum Row is greater than 50<br>Please enter number less than 51",
        }
    },

    // If no errors generate table
    submitHandler: function() {
        if (buttonPressed == "Generate") {
            createTable();
        }
    }
});

function createTable() {
    // Get Table dimensions from form in html
    var minCol = parseInt(document.getElementById("minimumColumn").value);
    var maxCol = parseInt(document.getElementById("maximumColumn").value);
    var minRow = parseInt(document.getElementById("minimumRow").value);
    var maxRow = parseInt(document.getElementById("maximumRow").value);

    // Error Checking / clearing error text
    let Error = document.getElementById("Error");
    Error.innerText = "";

    // Warning: Maximum Smaller than Minimum
    // Won't stop table generation because its fixable issue
    if (maxRow < minRow) {
        Error.innerText = "Warning: Maximum Row is Smaller than Minimum Row";
    }
    if (maxCol < minCol) {
        Error.innerText = "Warning: Maximum Column is Smaller than Minimum Column";
    }

    // Flipping numbers if min is larger than max
    if (minCol > maxCol) {
        var tempCol = minCol;
        minCol = maxCol;
        maxCol = tempCol;
    }
    if (minRow > maxRow) {
        var tempRow = minRow;
        minRow = maxRow;
        maxRow = tempRow;
    }

    // debugging console logging
    console.log("minCol:", minCol, "maxCol:", maxCol, "minRow:", minRow, "maxRow:", maxRow); 

    // container is location to put table in html
    const container = document.getElementById("tableContainer");   
    const table = document.createElement("table");
    let tableRow = document.createElement("tr");
    let tableData = document.createElement("td");

    // empty box in top left corner
    tableRow.appendChild(tableData);

    // add row of multipliers on top of table
    for (let g = minCol; g <= maxCol; g++) {
        tableData = document.createElement("td");
        tableData.innerText = g;
        tableRow.appendChild(tableData);
    }
    table.appendChild(tableRow);

    // double for loop to create each row with i*j in each box
    for (let i = minRow; i <= maxRow; i++) {
        tableRow = document.createElement("tr");

        // add multiplicand first on left side of each row
        tableData = document.createElement("td");
        tableData.innerText = i;
        tableRow.appendChild(tableData);

        // calculate and add each box to row
        for (let j = minCol; j <= maxCol; j++) {
            tableData = document.createElement("td");
            tableData.innerText = i * j;
            tableRow.appendChild(tableData);
        }

        // append row to table
        table.appendChild(tableRow);
    }

    // clears container then generates the table
    container.innerHTML = "";
    container.appendChild(table);
}

// Multiple Table Tabs Work in Progress

function multTab(minC, maxC, minR, maxR) {
    this.minC = minC;
    this.maxC = maxC;
    this.minR = minR;
    this.maxR = maxR;
}
var tabArray = [];

function addTab(minC, maxC, minR, maxR) {

}

function removeTab(num) {

}

function removeAllTabs() {

}

