const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let mergedArray = [...items, ...title, ...text];

//Sezione immagini grandi

let slides ='';



for (let i = 0; i < mergedArray.length; i++) {

    slides +=   `<div class="item">
                    <img src="${items[i]}">
                    <div class="text-img">
                        <h3>${title[i]}</h3>
                        <p>${text[i]}</p>
                    </div>
                </div>`;

}

let miniatures ='';

for (let i = 0; i < items.length; i++) {

    miniatures += `<div class="img-item flex">
                        <div class="overlay"></div>

                        <img src="${items[i]}">
                    </div>`;

}

let carouselContainer = document.querySelector('.left-part');
carouselContainer.innerHTML = slides;

let miniaturesContainer = document.querySelector('.right-part');
miniaturesContainer.innerHTML = miniatures;


// Regole aggiunta classe
let currentSlide = 0;

let itemImages = document.getElementsByClassName('item');
itemImages[currentSlide].classList.add('active');

let borderImages = document.getElementsByClassName('img-item');
borderImages[currentSlide].classList.add('border');