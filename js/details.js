'use strict';

window.addEventListener('load', loadInfo);

function loadInfo() {
    let url = 'http://134.209.138.34/item/' + getIdFromUrl();

    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderDetails(data);
            renderSlides(data);
            initSlider();
        })
        .catch(error => console.log(error))
}

function getIdFromUrl() {
    let pageUrl = new URL(window.location.href);
    let id = pageUrl.searchParams.get('id');
    return id;
}

function renderDetails(item) {
    let detailsTemplate = document.getElementById('details-template').content;
    document.querySelector('.details').appendChild(detailsTemplate);

    document.querySelector('.details__title').textContent = `${item[0].title}`;
    document.querySelector('.details__address').innerHTML = `<span>Адрес:</span> ${item[0].address}`;
    document.querySelector('.details__seller-name').innerHTML = `<span>Адрес:</span> ${item[0].sellerName}`;
    document.querySelector('.details__price').innerHTML = `<span>Цена:</span> ${item[0].price}`;
    document.querySelector('.details__id').innerHTML = `<span>ID:</span> ${item[0].id}`;
    document.querySelector('.details__description').textContent = `${item[0].description}`;
}

function renderSlides(item) {
    let slideTemplate = document.getElementById('slide-template').content;
    item[0].images.forEach((image, index) => {
        let clone = slideTemplate.cloneNode(true);
        let slide = clone.querySelector('li');
        if (index === 0) {
            slide.classList.add('slider__item--active');
        }
        let img = slide.querySelector('img');
        img.setAttribute('src', image);
        img.setAttribute('alt', `image ${index + 1}`);
        document.querySelector('.slider__container').appendChild(slide);
    });
}

function initSlider() {
    let slides = document.querySelectorAll('.slider__item');
    let btnNext = document.querySelector('.slider__btn-next');
    let btnPrev = document.querySelector('.slider__btn-prev');
    let currentSlide = 0;

    btnNext.addEventListener('click', showNextSlide);
    btnPrev.addEventListener('click', showPrevSlide);

    function showNextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function showPrevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    function goToSlide(n) {
        slides[currentSlide].classList.remove('slider__item--active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('slider__item--active');
    }
}