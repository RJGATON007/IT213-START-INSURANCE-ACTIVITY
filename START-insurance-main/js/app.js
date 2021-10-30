// Variables
const form = document.getElementById('request-quote');




// Event Listeners 
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {
        // create the <option> for the years.
        const html = new HTMLUI();
        html.displayYears();
    });
    
    // when the form is submitted
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // read the values from the form
        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;
        // read the radio buttons
        const level = document.querySelector('input [name"level"]:checked').value;

        // check that all the fields have something
        if( make === '' || year === '' || level === '' ) {
            console.log('Error');
        } else {
            console.log('Alright!');
        }
    });    
}




// Objects 

function HTMLUI() {}

// displays the latest 20 years in the select
HTMLUI.prototype.displayYears = function() {
    // max & minimum years
    const max = new Date().getFullYear(),
          min = max - 20;

    // generate the list with the latest 20 years
    const selectYears = document.getElementById('year');

    // print the values
    for(let i = max; i >= min; i-- ) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option); 
    }
}