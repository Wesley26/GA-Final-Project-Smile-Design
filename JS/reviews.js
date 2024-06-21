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
        nameCity: `Carol M. Egg Harbor Township, NJ`,
        reviewType: `5.0 star rating on Google 06/20/2024`,
        reviewContent: `"I had the privilege to meet Dr. Dzizter for a consultation today. He took the time to patiently and carefully
        explain what my next steps will be for my dental health. My experience with Dr. Dzizter was very positive and pleasant."`,
    },
    {
        nameCity: `Lisa F. Egg Harbor Township, NJ`,
        reviewType: `5.0 star rating on Google 05/01/2024`,
        reviewContent: `"Dr. Dzitzer is a hidden gem! Excellent work and overall experience top notch."`,
    },
    {
        nameCity: `Jo Ann H. Somers Point, NJ`,
        reviewType: `5.0 star rating on Google 04/04/2024`,
        reviewContent: `"We highly recommend Dr. Dzitzer. He made us feel comfortable as soon as we walked in.
        He explained everything in detail. Besides being a professional he is kind and caring.
        He is the dentist we have been looking for."`,
    },
    {
        nameCity: `Mark P. Egg Harbor Township, NJ`,
        reviewType: `5.0 star rating on Yelp 06/20/2023`,
        reviewContent: `"I went to another dental office for an upper denture repair.
        40 minutes later, I get an estimate for $14,000 worth of dental work. I decided to look up a local dentist and
        I happen to find Dr Dzitzer. He gives you a fair assessment. Do yourself a favor, Go see Dr Dzitzer you will not regret it."`,
    },
    {
        nameCity: `Jacob F. Mays Landing, NJ`,
        reviewType: `5.0 star rating on Google 07/29/2023`,
        reviewContent: `"Dr. Dzitzer is great, he took my emergency appointment on a Saturday, and had my problem solved within an hour
        of my phone call. I am not the best dental patient, but he was very gentle and kept me calm throughout my procedure.
        Thanks Dr. Dzitzer!!"`,
    },
    {
        nameCity: `John G. Mays Landing, NJ`,
        reviewType: `5.0 star rating on Google 02/15/2023`,
        reviewContent: `"Dr. Dzitzer is always so patient and caring while providing the most informed and professional
        dentistry. It is very rare to find in a person the deep interest and insights that Dr. Dzitzer provides
        during my visits. I have been blessed with over 12 years of his dental care and personal caring."`,
    },
    {
        nameCity: `David P. Woodbury, NJ`,
        reviewType: `5.0 star rating on Google 02/10/2023`,
        reviewContent: `"The best experience I've had with any dentist in my lifetime.
        Well worth the trip. Not only an amazing dentist, but an outstanding person. I now have,
        I hope for life, the only dentist I will ever need."`
    },
    {
        nameCity: `Shee R. Somers Point, NJ`,
        reviewType: `5.0 star rating on Google 01/11/2023`,
        reviewContent: `"Dr. Dzitzer is incredible! He is a true craftsman, when it comes to all things dental reconstruction and chemistry.
        He is a man of honor and integrity when it comes to his work. He did a beautiful 3 bridge piece for 3 of my front teeth. I was so
        embarrassed but Dr. D always makes me feel like there is NOTHING to be embarrassed about with him. Even after my cancer diagnosis
        and treatment, when my teeth got even WORSE, he managed to make me feel BETTER about it and hopeful! I had fractured the crown that
        he created for me years back and he fixed it for me immediately! I'm so grateful for him! You want to go to him!!"`
    },
    {
        nameCity: `Lis F. Egg Harbor Township, NJ`,
        reviewType: `5.0 star rating on Google 12/26/2022`,
        reviewContent: `"Dr. Dzitzer made my dental experience especially taking those dreaded impressions so easy and comfortable. 
        Every step in the process was well explained with the necessary information to make informed decisions. Best dental experience
        I have ever had, and I've had a few. Thank you Dr. Dzitzer for my brand new smile and your care."`,
    },
    {
        nameCity: `Michele B. Pleasantville, NJ`,
        reviewType: `5.0 star rating on Google 12/09/2022`,
        reviewContent: `"Would not go to anyone else!! Dr Mike, will provide a beautiful smile and a correct bite!!"`,
    },
    {
        nameCity: `Susan N. Mays Landing, NJ`,
        reviewType: `5.0 star rating on Google 11/01/2022`,
        reviewContent: `"Simply the BEST!! I came to Dr Dzitzer a complete mess.. HACKED by a local dental office,
        26 extractions with no aftercare or concern for my health and given a "temporary denture" that was ill fitting and useless,
        I found Dr Dzitzer... He has been SO PATIENT and explained each step with great care and maticulous attention
        to detail...I have my life and my smile back with full functionality of my mouth again!!! I STRONGLY RECOMMEND
        avoiding the "one day denture" procedure because Dr Dzitzer made things understandable and affordable for me.
        Simply put? A full class act of a dentist and a human being ..."`
    },
    {
        nameCity: `David S. Northfield, NJ`,
        reviewType: `5.0 star rating on Google 04/05/2022`,
        reviewContent: `"I don’t write these too often but then again how many folks have a truly great experience
        with the dentist? No offense to the profession …. But Dr. Dzitzer is fantastic - patient, conversational
        and explains everything in detail with how he’s going to approach the work that you need to have done.
        In my case I was told I needed implants which just didn’t feel right to me let alone being very expensive
        - he took a good look at my mouth and immediately stated that implants would be fine but he seemed
        surprised  nobody brought up crowns - so we went with the crowns much more affordable and they are
        perfectly fine for what I needed - and he actually thought it was a better idea for me - he’s a
        craftsman and he takes his business very seriously  - above all He’s a consultant not a sales person
        and gave me what I needed - that’s called integrity! Highly recommended with a great location
        in Somers Point."`
    },
    {
        nameCity: `Patricia H. Northfield, NJ`,
        reviewType: `5.0 star rating on Google 11/28/2021`,
        reviewContent: `"I have been a patient with Dr. Dzitzer’s  practice for over 30 years and he is always very
        professional, extremely compassionate and really good at what he does. I always leave the office with a big smile,
        full of confidence and ready to face the world. There is always a sense of security in knowing if any problems should
        arise he will be there. Thank you again Dr. D for all you do for me and our military family."`,
    },
    {
        nameCity: `Jill F. Bryn Mawr, PA`,
        reviewType: `5.0 star rating on Yelp 7/13/2021`,
        reviewContent: `"Dr Dzitzer DDS is an absolute miracle worker. My first visit was an emergency regarding a front cap 
        that dislodged for the 2nd time. It was quite a complicated situation but using ingenuity and skill Dr Dzitzer was able 
        to create a "crown" that looks and feels perfect. I was exceedingly impressed with Dr Dzitzer. His chair side manner is 
        professional, direct, and charming -- putting me at ease as he explained every step in the process. I am a 65 year old 
        woman with 18 dental implants so I have too much experience with dentistry and dentists. I feel so lucky to have found 
        Dr Dzitzer and intend on becoming his full time patient. I would recommend him wholeheartedly for all of your dental 
        needs."`,
    },
    {
        nameCity: `Carrie F. Cape May County, NJ`,
        reviewType: `5.0 star rating on Google 5/5/2021`,
        reviewContent: `"I have been a patient of Dr. Dzitzer for many years. He is an excellent dentist who takes pride
        in his work paying attention to detail and customer satisfaction. I highly recommend him for any reconstructive
        needs you may have."`,
    },
    {
        nameCity: `Gary S. Mays Landing, NJ`,
        reviewType: `5.0 star rating on Google 4/22/2021`,
        reviewContent: `"My first visit to Doctor Dzitzer I was pleasantly surprised. Not only was I seen in timely manner 
        but I also received professional and courteous service. I would recommend Doctor Dzitzer for anyone in need of 
        dental care."`
    },
    {
        nameCity: `Paul S. Margate City, NJ`,
        reviewType: `5.0 star rating on Google 3/31/2021`,
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

/**
 * Hand written review generator
 * @param testimoniesWordOfMouthW
 */

const dynamicTestimoniesW = testimoniesWordOfMouthW => {

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

/**
 * Google/Yelp review generator
 * @param testimoniesWordOfMouth
 */

const dynamicTestimonies = testimoniesWordOfMouth => {

    /**
     * arrow function which passes two params:
     * @param {document querySelector class name to grab} theContentAlias 
     * @param {list Index numerical value} listIndexAlias 
     */

    const postDynamicTestimoniesHandler = (theContentAlias, listIndexAlias) => {

        let div = document.createElement('div');
        div.classList.add('testimoniesWordOfMouth');
        div.setAttribute('id', `dynamicTestimony${listIndexAlias}`);
        div.setAttribute('style', 'margin-top:1.5%;margin-bottom:1.5%');

        div.innerHTML = `
        <p>${testimoniesWordOfMouth[listIndexAlias].nameCity}</p>
        <p>${testimoniesWordOfMouth[listIndexAlias].reviewType}</p>
        <p>${testimoniesWordOfMouth[listIndexAlias].reviewContent}</p>
        `

        let br = document.createElement('br');
        let br2 = document.createElement('br');
        let br3 = document.createElement('br');

        theContentAlias.appendChild(div);
        theContentAlias.appendChild(br);
        theContentAlias.appendChild(br2);
        theContentAlias.appendChild(br3);

    };

    /**
     * posts full list of testimonies
     * from testimoniesWordOfMouth object
     */

    const postAllDT = () => {

        let theContent = document.querySelector('.dynamicTestimonies');
        let listIndexOne = 0;

        for (let i = 0; i < testimoniesWordOfMouth.length; i++) {

            postDynamicTestimoniesHandler(theContent, listIndexOne);
            listIndexOne++;

        };

    };

    postAllDT();

};

/**
 * display initial virtual pages on first load
 * Note: initialVirtualPageLoad function has to be located 
 * here since we aren't using Node and already have
 * an existing window onLoad function executed from here
 */

const initialVirtualPageLoad = () => {

    let introductionWrapper = document.getElementById("introductionWrapper");
    let aboutDzitzerWrapper = document.getElementById("aboutDzitzerWrapper");
    let contactDzitzerWrapper = document.getElementById("contactDzitzerWrapper");
    let bAndAGalleryWrapper = document.getElementById("bAndAGalleryWrapper");
    let testimoniesWrapper = document.getElementById("testimoniesWrapper");

    introductionWrapper.style.cssText = ``;
    aboutDzitzerWrapper.style.cssText = ``;
    contactDzitzerWrapper.style.cssText = ``;
    bAndAGalleryWrapper.style.cssText = `display:none`;
    testimoniesWrapper.style.cssText = `display:none`;

};

window.onload = () => {
    dynamicTestimoniesW(testimoniesWordOfMouthW);
    dynamicTestimonies(testimoniesWordOfMouth);
    initialVirtualPageLoad();
};