/*
JS script for the photo viewer in the div element class introduction.
*/

//console.log("introPhotos is working!"); Uncomment to ensure introPhotos.js is functional

var imageIndex = 1;
displayImg(imageIndex);

function nextImg(a) {

    displayImg(imageIndex += a);
};

function currentImg(a) {

    displayImg(imageIndex = a);
};

function displayImg(a) {

    var b;
    var img = document.getElementsByClassName("tourShow");

    if (a > img.length) {

        imageIndex = 1;
    }

    if (a < 1) {

        imageIndex = img.length;
    }

    for (b = 0; b < img.length; b++) {

        img[b].style.display = "none";
    }
    img[imageIndex - 1].style.display = "block";
};