'use strict';

let slides = document.querySelectorAll('.slider__item');
let btnNext = document.querySelector('.slider__btn-next');
let btnPrev = document.querySelector('.slider__btn-prev');
let currentSlide = 0;

btnNext.addEventListener('click', showNextSlide);
btnPrev.addEventListener('click', showPrevSlide);

function showNextSlide() {
    console.log(currentSlide);
    goToSlide(currentSlide + 1);
}

function showPrevSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].classList.remove('slider__item--active');
    currentSlide = (n + slides.length) % slides.length;
    
    console.log(currentSlide);
    slides[currentSlide].classList.add('slider__item--active');
}