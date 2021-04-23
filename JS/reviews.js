/**
 * @dynamicTestimonies - Adds all Google and Yelp reviews from
 * testimoniesWordOfMouth array containing each review object.
 * 
 * @testimoniesWordOfMouth - array containing Google/Yelp reviews.
 * @nameCity - Reviewer's name and city
 * @reviewType - Type of review
 * @reviewContent - Content of the review
 * "W" variant is for written reviews only
 */

//Written reviews
let testimoniesWordOfMouthW = [
    {
        nameCityW: `Mary Kate M. San Diego, CA`,
        reviewTypeW: `Written review from email 5/8/2012`,
        reviewContentW: `"My husband and I moved to San Diego over 3 years ago. I wanted to tell you that when I go to the dentist
        out here they all compliment me on the work that you did. The result that you achieved is so natural
        looking, I love it, and the dental professionals are amazed. So much so that the dental hygienist that
        cleaned my teeth today told me that if anything should ever happen to my veneers that I should travel back 
        to NJ to have you do the work. I told her that I absolutely would! But they are still in fine form. I just
        wanted to say thank you for all of your perfection and caring that you put into your work."`
    },
];

//Google/Yelp reviews
let testimoniesWordOfMouth = [
    {
        nameCity: `Gary S. Mays Landing, NJ`,
        reviewType: `5.0 star rating on Google 04/22/2021`,
        reviewContent: `"My first visit to Doctor Dzitzer I was pleasantly surprised. Not only was I seen in timely manner 
        but I also received professional and courteous service. I would recommend Doctor Dzitzer for anyone in need of 
        dental care."`
    },
    {
        nameCity: `Paul S. Margate City, NJ`,
        reviewType: `5.0 star rating on Google 03/31/2021`,
        reviewContent: `"I had extensive reconstructive dental work done by Dr. Dzitzer which involved several crowns and implants. 
        Dr. D was so extremely patient, and spent extra time preparing the proper results. He was very concise with 
        the total execution. I am the third member of our direct family to have Dr. Dzitzer as our dental professional 
        for over 15 years."`
    },
    {
        nameCity: `Roger G. Ocean City, NJ`,
        reviewType: `5.0 star rating on Google 11/12/2020`,
        reviewContent: `"Two months ago was my first encounter with the amazing Dr. Michael Dzitzer. He is the dentist that people look 
        a lifetime for. From the warm reception at the front door until the end of your appointment, you feel like you 
        are sitting with a good friend who is remarkably knowledgeable in the field of dental restoration. Dr. Mike 
        explains every option with pros and cons and more importantly, listens to the patient. His consciousness 
        and workmanship is exceptional. He is an artist in his field and very creative with his working lab just upstairs. 
        Again, it is such a comfort to know that such a caring dentist is a phone call away that would see me as soon 
        as possible. Very grateful!"`
    },
    {
        nameCity: `Jackie B. Cape May County, NJ`,
        reviewType: `5.0 star rating on Google 7/8/2020`,
        reviewContent: `"My husband and I have been coming to this office for 30 years! Any time we needed immediate attention we were 
        told to come right in, great results every visit! Highly recommend to anyone in need of dental care."`
    },
    {
        nameCity: `Fran M. Ocean City, NJ`,
        reviewType: `5.0 star rating on Google 6/27/2020`,
        reviewContent: `"My Mom dropped her dentures on the bathroom floor and they broke in two pieces down the center. She was going
        to just get a new pair because they never fit properly. Dr. Dzitzer fixed them while we waited about 20 min. He 
        also took an impression of her mouth and readjusted them for her. They fit properly now! She had her dentures 
        the same day since he has a lab right in his office!! He was wonderful."`
    },
    {
        nameCity: `Debbie T. Mays Landing, NJ`,
        reviewType: `5.0 star rating on Yelp 7/22/2018`,
        reviewContent: `"You'd be hard pressed to find a dentist more skilled in the art of reconstructive and general dentistry. 
        Been a patient for many years and am beyond thankful to have been referred to him. 
        Dr Dzitzer makes a dental visit a pleasant experience."`
    },
    {
        nameCity: `Philip B. Ocean View, NJ`,
        reviewType: `5.0 star rating on Yelp 1/1/2013`,
        reviewContent: `"Dr. Dzitzer is amazing. Regarding both his impeccable skills and caring, compassionate bedside manner, 
        you will not find a better dentist to meet your needs. After not having seen a dentist for decades our of 
        sheer fear, I unfortunately needed major restorative, prosthetic work. After walking in his office with no 
        teeth whatsoever I had a full set of teeth again in two weeks that look and feel wonderful. 
        What sets Dr. Dzitzer apart from the rest is how he works to accommodate your schedule, 
        even making appointments on holidays as well as his patience in explaining what he is doing and how and why 
        he is doing it every step of the way. I am EXTREMELY happy that my oral surgeon recommended him, and I 
        HIGHLY recommend Dr. Dzitzer."`
    },
    {
        nameCity: `Philip B. Ocean View, NJ`,
        reviewType: `5.0 star rating on Yelp 2/16/2013`,
        reviewContent: `"It's  been almost 2 months since I first saw Dr. Dzitzer upon referral from my oral surgeon, and I 
        just want to reiterate that Dr. Mike is amazing. First of all, he schedules his office hours according 
        to your schedule. He even saw me on weekends and a holiday. Secondly, he is extremely patient and explains 
        every step of the process involving your case. His lab is on-site, and his work is exceptional. 
        He is an absolute artist, and his expertise and knowledge are apparent when you see the results of his work. 
        I highly recommend Dr. Mike; as someone who was always phobic when it came to dentists, 
        I can assure you that he will set your mind at ease as he works with you. His office is relatively small, 
        but that's just because your money will be put where your mouth is. Dr. Michael Dzitzer is excellent."`
    },
    {
        nameCity: `John L. Atlantic City, NJ`,
        reviewType: `5.0 star rating on Yelp 2/18/2013`,
        reviewContent: `"For years, I wore dentures that were ill-fitting and awful to wear. After visiting Dr. 
        Dzitzer for a relining, I have dentures that are comfortable, fit well (and with no denture adhesive) 
        and look like the real thing. A recent visit for a cleaning was equally satisfactory."`
    },
    {
        nameCity: `Ed D. Mays Landing, NJ`,
        reviewType: `5.0 star rating on Yelp 11/17/2012`,
        reviewContent: `"Great dentist. Incredibly accommodating. Will see you after hours, weekends, whatever is needed to ensure 
        that you are taken care of. With Dr Dzitzer, the patient is first. Highly recommended."`
    },
];

const dynamicTestimoniesW = testimoniesWordOfMouthW => {

    /**
     * Hand written review generator
     */

    let theContentW = document.querySelector('.dynamicTestimoniesW');
    let listIndexW = 0;

    let headerWDiv = document.createElement('div');
    headerWDiv.classList.add('testimoniesWordOfMouth');
    headerWDiv.style.fontSize = 'larger';

    headerWDiv.innerHTML = `Here is one of my many thank you notes that I have received from my patients. On our first visit together,
    if you prefer, you may peruse more testimonials in my office. On our first visit, we can take plenty of 
    time to get to know each other. We can then discover your dental concerns and desires.`

    theContentW.appendChild(headerWDiv);

    for (let j = 0; j < testimoniesWordOfMouthW.length; j++) {

        let divW = document.createElement('div');
        divW.classList.add('testimoniesWordOfMouth');

        divW.innerHTML = `
        <p>${testimoniesWordOfMouthW[listIndexW].nameCityW}</p>
        <p>${testimoniesWordOfMouthW[listIndexW].reviewTypeW}</p>
        <p>${testimoniesWordOfMouthW[listIndexW].reviewContentW}</p>
        `

        let brW = document.createElement('br');
        let brW2 = document.createElement('br');
        let brW3 = document.createElement('br');

        theContentW.appendChild(divW);
        theContentW.appendChild(brW);
        theContentW.appendChild(brW2);
        theContentW.appendChild(brW3);
        
        listIndexW++
    };

};

const dynamicTestimonies = testimoniesWordOfMouth => {

    /**
     * Google/Yelp review generator
     */

    let theContent = document.querySelector('.dynamicTestimonies');
    let listIndex = 0;

    for (let i = 0; i < testimoniesWordOfMouth.length; i++) {

        let div = document.createElement('div');
        div.classList.add('testimoniesWordOfMouth');

        div.innerHTML = `
        <p>${testimoniesWordOfMouth[listIndex].nameCity}</p>
        <p>${testimoniesWordOfMouth[listIndex].reviewType}</p>
        <p>${testimoniesWordOfMouth[listIndex].reviewContent}</p>
        `

        let br = document.createElement('br');
        let br2 = document.createElement('br');
        let br3 = document.createElement('br');

        theContent.appendChild(div);
        theContent.appendChild(br);
        theContent.appendChild(br2);
        theContent.appendChild(br3);
        
        listIndex++
    };

};

window.onload = () => {
    dynamicTestimoniesW(testimoniesWordOfMouthW);
    dynamicTestimonies(testimoniesWordOfMouth);
};