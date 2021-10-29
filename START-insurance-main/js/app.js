// Variables





// Event Listeners 
document.addEventListener('DOMContentLoaded', function() {
    // create the <option> for the years.
    const html = new HTMLUI();
    html.displayYears();
});




// Objects 

function HTMLUI() {}

// displays the latest 20 years in the select
HTMLUI.prototype.displayYears = function() {
    // max & minimum years
    const max = new Date().getFullYear(),
          min = max - 20;

    // generate the list with the latest 20 years

}