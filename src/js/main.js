const back = document.querySelector(".back"),
    next = document.querySelector(".next"),
    slides = document.querySelectorAll(".slide"),
    dots = document.querySelectorAll(".dot");

let index = 0;

function activeSlide(n) {
    slides.forEach(slide => {
        slide.classList.remove("action", "fade");

    });
    slides[n].classList.add("action", "fade");

}

function activeDot(n) {
    dots.forEach(dot => {
        dot.classList.remove("active");

    });
    dots[n].classList.add("active");

}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
};

const backSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);

    } else {
        index--;
        activeSlide(index);
        activeDot(index);

    }
};

dots.forEach((dot, indexDot) => {
    dot.addEventListener("click", () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    });
});

next.addEventListener("click", nextSlide);
back.addEventListener("click", backSlide);

setInterval(nextSlide, 2500);