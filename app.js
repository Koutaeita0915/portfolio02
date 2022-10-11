const reviews = [
   {
    id: 1,
    name: "Ghandi Tamori",
    job: "Cat Eater",
    img:
    "cat01.jpg",
    text: "I'm a super cool black cat working as a cat eater based in Hokkaido. Oh, you're wondering why I am not an Ohta? Maybe because I'm black...what cat-racists they are!",
    audio: "cat01.mp3"
   },
   {
    id: 2,
    name: "Tantan Ohta",
    job: "Cat Commercial Model",
    img: "cat02.jpg",
    text: "I'm a very handsome cat with a long hair. I'm probably the best shaped cat ever once you take a look at me. But my mouth stinks, and I can't help it",
    audio: "cat02.mp3"
   },
   {
    id: 3,
    name: "Mirei Ohta",
    job: "Cat Astronaut",
    img: "cat03.jpg",
    text: "I'm a very cute cat who usually works in Internationl Space Station to cheer those astronauts. They are charmed with my cuteness. But I'm horny all the time, I want a handsome cat like Tantan, Oh, I miss him SO MUCH!",
    audio: "cat03.mp3"
   },
   {
    id: 4,
   name:  "Goroh Ohta",
   job: "Super Cat Unemployed",
   img: "cat04.jpg",
   text: "Hi, I'm Goro! I am always following my mummy wherever she goes, I love her so much that she says I'm a huge stalker and kind of kinky. And one thing to add to my features is I always chock up with a load of food or poop or hairs. Yep, I'm disgusting, but I love myself!",
   audio: "cat04.mp3"
  }
];


// Select items
const img = document.getElementById("cat-img");
const number = document.getElementById("number");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const audio = document.getElementById("cat-meow");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const audioBtn = document.querySelector('.audio-btn');


// Set starting item
let currentItem =  0;

// loud initial item
window.addEventListener('DOMContentLoaded', function() {
    showCat(currentItem);
});

// Show cat
function showCat(showCat) {
    const item = reviews[currentItem];
    img.src = item.img;
    number.textContent = "No." + item.id;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    meow.audioContent = item.audio;
    let soundMeow = new Audio(meow.audioContent);
    soundMeow.play();
    };

// Show next cat
nextBtn.addEventListener('click', function () {
    currentItem ++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    };
    showCat(currentItem);
});

// Show previous cat
prevBtn.addEventListener('click', function () {
    currentItem --;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showCat(currentItem);    
});

// Passing Volume
let elem_volume = document.getElementById("volume");
let elem_range = document.getElementById("vol_range");

// Initial Volume
reviews[currentItem].audio.volume = elem_volume.value;

// When changing volume
elem_volume.addEventListener("change", function(){
	reviews[currentItem].audio.volume = elem_volume.value;
	elem_range.textContent = elem_volume.value;
}, false);

audioBtn.addEventListener('click', function(){
    meow.audioContent = reviews[currentItem].audio;
    let soundMeow = new Audio(meow.audioContent);
    soundMeow.play();
});