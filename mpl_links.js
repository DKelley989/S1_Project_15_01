"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Dylan Kelley
   Date:   4.18.19
   
   Filename: mpl_links.js

*/

/// Event listener to run the following anonymous function when the page loads.
window.addEventListener('load', function () {
    // Var: Variable referencing all select elements nested within the govLinks form.
    var allSelect = document.getElementsByTagName("select");

    // For: Loops through the allSelect object collection.
    for (var i = 0; i < allSelect.length; i++) {

        /// For each selection list in the collection, creates an anonymous function that changes the page shown in the browser window to the value of the target of the event object that initiated the onchange event.
        allSelect[i].addEventListener('onchange', function (e) {
            window.location.href = e.target.value;
        });
    }
});