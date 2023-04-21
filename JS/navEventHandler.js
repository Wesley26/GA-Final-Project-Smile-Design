/**
 * display introductionWrapper virtual page
 * @param {introductionNavClick} event 
 */

const introductionNavClick = event => {

    event.preventDefault();
    // console.log(`introductionNav was clicked!`); //debug

    let introductionWrapper = document.getElementById("introductionWrapper");
    let aboutDzitzerWrapper = document.getElementById("aboutDzitzerWrapper");
    let contactDzitzerWrapper = document.getElementById("contactDzitzerWrapper");
    let bAndAGalleryWrapper = document.getElementById("bAndAGalleryWrapper");
    let testimoniesWrapper = document.getElementById("testimoniesWrapper");

    introductionWrapper.style.cssText = ``;
    aboutDzitzerWrapper.style.cssText = `display:none`;
    contactDzitzerWrapper.style.cssText = `display:none`;
    bAndAGalleryWrapper.style.cssText = `display:none`;
    testimoniesWrapper.style.cssText = `display:none`;
};

/**
 * display aboutDzitzerWrapper virtual page
 * @param {aboutNavClick} event 
 */

const aboutNavClick = event => {

    event.preventDefault();
    // console.log(`aboutNav was clicked!`); //debug

    let introductionWrapper = document.getElementById("introductionWrapper");
    let aboutDzitzerWrapper = document.getElementById("aboutDzitzerWrapper");
    let contactDzitzerWrapper = document.getElementById("contactDzitzerWrapper");
    let bAndAGalleryWrapper = document.getElementById("bAndAGalleryWrapper");
    let testimoniesWrapper = document.getElementById("testimoniesWrapper");

    introductionWrapper.style.cssText = `display:none`;
    aboutDzitzerWrapper.style.cssText = ``;
    contactDzitzerWrapper.style.cssText = `display:none`;
    bAndAGalleryWrapper.style.cssText = `display:none`;
    testimoniesWrapper.style.cssText = `display:none`;

};

/**
 * display contactDzitzerWrapper virtual page
 * @param {contactNavClick} event 
 */

const contactNavClick = event => {

    event.preventDefault();
    // console.log(`contactNav was clicked!`); //debug

    let introductionWrapper = document.getElementById("introductionWrapper");
    let aboutDzitzerWrapper = document.getElementById("aboutDzitzerWrapper");
    let contactDzitzerWrapper = document.getElementById("contactDzitzerWrapper");
    let bAndAGalleryWrapper = document.getElementById("bAndAGalleryWrapper");
    let testimoniesWrapper = document.getElementById("testimoniesWrapper");

    introductionWrapper.style.cssText = `display:none`;
    aboutDzitzerWrapper.style.cssText = `display:none`;
    contactDzitzerWrapper.style.cssText = ``;
    bAndAGalleryWrapper.style.cssText = `display:none`;
    testimoniesWrapper.style.cssText = `display:none`;

};

/**
 * display bAndAGalleryWrapper virtual page
 * @param {bAndANavClick} event 
 */

const bAndANavClick = event => {

    event.preventDefault();
    // console.log(`bAndANav was clicked!`); //debug

    let introductionWrapper = document.getElementById("introductionWrapper");
    let aboutDzitzerWrapper = document.getElementById("aboutDzitzerWrapper");
    let contactDzitzerWrapper = document.getElementById("contactDzitzerWrapper");
    let bAndAGalleryWrapper = document.getElementById("bAndAGalleryWrapper");
    let testimoniesWrapper = document.getElementById("testimoniesWrapper");

    introductionWrapper.style.cssText = `display:none`;
    aboutDzitzerWrapper.style.cssText = `display:none`;
    contactDzitzerWrapper.style.cssText = `display:none`;
    bAndAGalleryWrapper.style.cssText = ``;
    testimoniesWrapper.style.cssText = `display:none`;

};

/**
 * display testimoniesWrapper virtual page
 * @param {testimonyNavClick} event 
 */

const testimonyNavClick = event => {

    event.preventDefault();
    // console.log(`testimonyNav was clicked!`); //debug

    let introductionWrapper = document.getElementById("introductionWrapper");
    let aboutDzitzerWrapper = document.getElementById("aboutDzitzerWrapper");
    let contactDzitzerWrapper = document.getElementById("contactDzitzerWrapper");
    let bAndAGalleryWrapper = document.getElementById("bAndAGalleryWrapper");
    let testimoniesWrapper = document.getElementById("testimoniesWrapper");

    introductionWrapper.style.cssText = `display:none`;
    aboutDzitzerWrapper.style.cssText = `display:none`;
    contactDzitzerWrapper.style.cssText = `display:none`;
    bAndAGalleryWrapper.style.cssText = `display:none`;
    testimoniesWrapper.style.cssText = ``;

};

let introductionNav = document.getElementById("introductionNav");
introductionNav.addEventListener('click', introductionNavClick);

let aboutNav = document.getElementById("aboutNav");
aboutNav.addEventListener('click', aboutNavClick);

let contactNav = document.getElementById("contactNav");
contactNav.addEventListener('click', contactNavClick);

let bAndANav = document.getElementById("bAndANav");
bAndANav.addEventListener('click', bAndANavClick);

let testimonyNav = document.getElementById("testimonyNav");
testimonyNav.addEventListener('click', testimonyNavClick);