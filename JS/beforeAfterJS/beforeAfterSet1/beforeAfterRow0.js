/**
 * Before and After Set 1 Row 0 
 * Web component module
 */

let baTitles1 = { 
    beforeTitle: `<th><h2>Before</h2></th>`,
    afterTitle: `<th><h2>After</h2></th>`,
};

document.write(`\
    <div class="bAndAGalleryContentSlides">\
        <table>\
            <tr>\
                ${baTitles1.beforeTitle}\
            </tr>\
            <tr>\
                <td><img src="./beforeAfter/smil1b4.gif"></td>\
            </tr>\
        </table>\
        <table>\
            <tr>\
                ${baTitles1.afterTitle}\
            </tr>\
            <tr>\
                <td><img src="./beforeAfter/smil1aft.gif"></td>\
            </tr>\
        </table>\
    </div>\
`);