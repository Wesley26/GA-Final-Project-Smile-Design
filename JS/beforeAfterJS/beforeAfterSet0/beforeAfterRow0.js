/**
 * Before and After Set 0 Row 0 
 * Web component module
 */

let baTitles0 = { 
    beforeTitle: `<th><h2>Before</h2></th>`,
    afterTitle: `<th><h2>After</h2></th>`,
};

document.write(`\
<div class="bAndAGalleryContentSlides">\
    <table>\
        <tr>\
            ${baTitles0.beforeTitle}\
        </tr>\
        <tr>\
            <td><img src="./beforeAfter/smil8b4.gif"></td>\
        </tr>\
    </table>\
    <table>\
        <tr>\
            ${baTitles0.afterTitle}\
        </tr>\
        <tr>\
            <td><img src="./beforeAfter/smil8aft.gif"></td>\
        </tr>\
    </table>\
</div>\
`);