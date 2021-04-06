// slides
/*  Author: Yeager p1-19K
Created: 07/04/2021  */

let index = 0;

/////// First slide
const firstSlide = document.querySelectorAll(".slide"),
    nextBtn = document.querySelector(".nextBTN"),
    dots = document.querySelectorAll(".dot");

function activeFirstSlide(n) {
    firstSlide.forEach(slide => {
        slide.classList.remove("action");
    });
    firstSlide[n].classList.add("action");
}

const nextFirstSlide = () => {
    if (index == firstSlide.length - 1) { // если дохом до последнего сразу переключаемся на первый , тут проверка на последний слайд
        index = 0; // переходим на последний слайд
        activeFirstSlide(index);
        activeDot(index);

    } else { // но если это не так
        index++; // иди дальше
        activeFirstSlide(index);
        activeDot(index);

    }
};


dots.forEach((dot, indexDot) => {
    dot.addEventListener("click", () => {
        index = indexDot;
        activeDot(index);
        activeFirstSlide(index);
    });
});

function activeDot(n) {
    dots.forEach(dot => {
        dot.classList.remove("active");

    });
    dots[n].classList.add("active");

}


let timerId = setInterval(nextFirstSlide, 2500);
/* setTimeout(() => {
    clearInterval(timerId);
}, 50000); */


//////////////////// Second SLIDE 
const back = document.querySelector(".back"),
    next = document.querySelector(".next"),
    secondSlide = document.querySelectorAll(".box");

let i = 0;

function activeSecondSlide(n) { // n - номер слайда
    secondSlide.forEach(slide => {
        slide.classList.remove("vidno"); // убераем у каждого класса убераем act

    });
    secondSlide[n].classList.add("vidno"); // а к текующему добавляем

}
console.log(secondSlide.length);
//slides.length = 0 , 1
const nextSecond = () => {
    if (i == secondSlide.length - 1) { // если дохом до последнего сразу переключаемся на первый , тут проверка на последний слайд
        i = 0; // переходим на последний слайд
        activeSecondSlide(i);

    } else { // но если это не так
        i++; // иди дальше
        activeSecondSlide(i);

    }
};

const backSecond = () => {
    if (i == 0) { // проверка на первый слайд , если да то , вернет нас к последнему
        i = secondSlide.length - 1;
        activeSecondSlide(i);
    } else {
        i--;
        activeSecondSlide(i);
    }
};
next.addEventListener("click", nextSecond);
back.addEventListener("click", backSecond);

//////////////////////////////



// nextBtn.addEventListener("click", nextFirstSlide);







// для первого слайдера




// Cards