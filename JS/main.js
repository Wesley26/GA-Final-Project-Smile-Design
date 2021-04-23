/* 
This main.js creates the body of website inside of the <body> HTML element.

Assets included on this website created by "Power Of Production Studio" with permission from Dr. Michael Dzitzer.
Website overhaul created/maintained by Wesley Dzitzer.
*/

console.log("hello dental world!"); //ensure js file is working

jQuery(function() {

    /**
     * set the navbar to top of screen, enable/disable padWrapper element's css when scrolling
     * to balance out anchoring the nav bar.
     */

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 1) {
             
            $(".navbar").addClass("scroll-anchor");
            $(".padWrapper").addClass("scroll-anchor-mainWrapper");
        } else if ($(window).scrollTop() < 2) {

            $(".navbar").removeClass("scroll-anchor");
            $(".padWrapper").removeClass("scroll-anchor-mainWrapper");
        }

    });

});