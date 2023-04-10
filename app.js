function showUl(elementId, propertyName) {
    var element = document.getElementById(elementId); // Get the element by ID
    var currentValue = element.style[propertyName]; // Get the current value of the CSS property
    var newValue = currentValue === 'none' ? 'flex' : 'none'; // Toggle the value to the opposite color
  
    element.style[propertyName] = newValue; // Set the CSS property value to the new value
}

function changeCSSProperty(elementId, propertyName) {
    var element = document.getElementById(elementId); // Get the element by ID
    var screenWidth = window.innerWidth; // Get the screen width
    var newValue = screenWidth > 1245 ? 'none' ? 'none' : 'flex': 'none'; // Set the new value based on the screen width
  
    element.style[propertyName] = newValue; // Set the CSS property value to the new value
}

window.addEventListener('resize', function() {
    changeCSSProperty('hb', 'display');
});




// Screen sizes for responsive site


// @media screen and (max-width: 1245px) {

// }
// @media screen and (max-width: 991px) {

// }
// @media screen and (max-width: 768px) {

// }
// @media screen and (max-width: 625px) {

// }
// @media screen and (max-width: 458px) {

// }
// @media screen and (max-width: 361px) {

// }
// @media screen and (max-width: 321px) {

// }