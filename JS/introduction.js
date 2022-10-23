/**
 * Introduction slide show web component module
 */

let tourShowDivList = [

    `<div class="tourShow fade">\
        <img src="./images/tour1.jpg">\
    </div>\ `,
    `<div class="tourShow fade">\
        <img src="./images/tour2.jpg">\
    </div>\ `,
    `<div class="tourShow fade">\
        <img src="./images/tour3.jpg">\
    </div>\ `,
    `<div class="tourShow fade">\
        <img src="./images/tour4.jpg">\
    </div>\ `,
    `<div class="tourShow fade">\
        <img src="./images/tour5.jpg">\
    </div>\ `,

];

let prevBTN = `<a class="left" onclick="nextImg(-1)">Previous</a>`;
let nextBTN = `<a class="right" onclick="nextImg(1)">Next</a>`;

document.write(`\
\
    <div id="info" class="introduction">\
    \
        <!--Introduction section for Dr. Dzitzer-->\
    \
        <div class="tourContainer">\
    \
            <div class="introductionIntro" text-align="center"><h1>Welcome!</h1></div>\
        \
            <!--one tourShow div element class per image-->\
        ${tourShowDivList[0]}
        ${tourShowDivList[1]}
        ${tourShowDivList[2]}
        ${tourShowDivList[3]}
        ${tourShowDivList[4]}
        \
            ${prevBTN}\
            ${nextBTN}\
        </div>\
        \
        <!--call introPhotos.js-->\
        <script src="./JS/introPhotos.js" type="text/javascript"></script>\
    \
    </div>\
\
`);