/* 
This main.js creates the body of website inside of the <body> HTML element.

Assets included on this website created by "Power Of Production Studio" with permission from Dr. Michael Dzitzer.
Website overhaul created by Wesley Dzitzer.
*/

console.log("hello dental world!"); //ensure js file is working

$(document).ready(function() {

    $(window).scroll(function () { //set the navbar to top of screen, enable/disable padWrapper element's css when scrolling
                                   //to balance out anchoring the nav bar.

        if ($(window).scrollTop() > 1) {
             
            $(".navbar").addClass("scroll-anchor");
            $(".padWrapper").addClass("scroll-anchor-mainWrapper");
        } else if ($(window).scrollTop() < 2) {

            $(".navbar").removeClass("scroll-anchor");
            $(".padWrapper").removeClass("scroll-anchor-mainWrapper");
        }

    });

});