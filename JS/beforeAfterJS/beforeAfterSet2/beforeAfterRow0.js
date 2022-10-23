/**
 * Before and After Set 2 Row 0 
 * Web component module
 */

let baTitles2 = { 
    beforeTitle: `<th><h2>Before</h2></th>`,
    afterTitle: `<th><h2>After</h2></th>`,
};

document.write(`\
    <div class="bAndAGalleryContentSlides">\
        <table>\
            <tr>\
                ${baTitles2.beforeTitle}\
            </tr>\
            <tr>\
                <td><img class="modernSlide" src="./beforeAfter/1038_before.jpg"></td>\
            </tr>\
        </table>\
        <table>\
            <tr>\
                ${baTitles2.afterTitle}\
            </tr>\
            <tr>\
                <td><img class="modernSlide" src="./beforeAfter/1038.jpg"></td>\
            </tr>\
        </table>\
    </div>\
`);