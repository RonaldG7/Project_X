///////// mode switch //////

const darkMode = document.querySelector(".darkModeBtn")
const lightMode = document.querySelector(".lightModeBtn")
const body = document.querySelector("body")

darkMode.onclick = () => {
    body.style.backgroundColor = "black"
}

lightMode.onclick = () => {
    body.style.backgroundColor = "white"
    body.style.transition = "0.5s"
}

//////// scroll spy //////

const anchor = document.querySelectorAll(".anchor")
const scrollContainer = document.querySelector(".scrollContainer")
const slide = document.querySelectorAll(".slide")
const scrollContainerArr = ["0", "-800px", "-1600px", "-2400px", "-3200px", "-4000px", "-4800px"]

for (let i = 0; i < anchor.length; i++) {
    anchor[i].onclick = (e) => {
        e.preventDefault()
        scrollContainer.style.left = scrollContainerArr[i]
    }
}

for (let i = 0; i < slide.length; i++) {
    slide[i].onclick = (e) => {
        scrollContainer.style.left = scrollContainerArr[i]
    }
}

/////////// carousel in home container ////////

const circle = document.querySelectorAll(".circle")
const imgScrollContainer = document.querySelector(".home-container-scroll")
const carouselArr = ["0px", "-800px", "-1600px"]

for (let i = 0; i < circle.length; i++) {
    circle[i].onclick = () => {
        for (let j = 0; j < circle.length; j++) {
            circle[j].className = "circle"
        }
        circle[i].classList.add("circle-background")
        imgScrollContainer.style.left = carouselArr[i]
    }
}

//////////// portfolio modal //////////

const portfolio = document.querySelectorAll(".img-portfolio")
const portfolioCarousel = document.querySelector(".portfolio-carousel")
const close = document.querySelector(".close")
const circleModal = document.querySelectorAll(".circle-modal")
const modalScrollContainer = document.querySelector(".modal-scroll")
const modalCardScroll = document.querySelector(".modal-card-scroll")
const arrowLeft = document.querySelector(".left")
const arrowRight = document.querySelector(".right")
const modalArr = ["0px", "-640px", "-1280px", "-1920px", "-2560px"]
let modalIndex = 0

for (let i = 0; i < portfolio.length; i++) {
    portfolio[i].onmouseover = () => {
        portfolio[i].style.opacity = "0"
    }
    portfolio[i].onmouseleave = () => {
        portfolio[i].style.opacity = "1"
    }
    portfolio[i].onclick = () => {
        for (let j = 0; j < modalArr.length; j++) {
            if (i === j) {
                modalCardScroll.style.left = modalArr[j]
                modalIndex = j
            }
        }
        portfolioCarousel.style.display = "block"
    }
}

close.onclick = () => {
    portfolioCarousel.style.display = "none"
}

window.onclick = (e) => {
    if (e.target === portfolioCarousel) {
        portfolioCarousel.style.display = "none"
    }
}

for (let i = 0; i < circleModal.length; i++) {
    circleModal[i].onclick = () => {
        for (let j = 0; j < circleModal.length; j++) {
            circleModal[j].className = "circle-modal"
        }
        circleModal[i].classList.add("circle-background")
        modalScrollContainer.style.left = modalArr[i]
    }
}

arrowRight.onclick = () => {
    modalIndex++
    if (modalArr.length === modalIndex) {
        portfolioCarousel.style.display = "none"
        modalIndex = 0
    }
    modalCardScroll.style.left = modalArr[modalIndex]
}

arrowLeft.onclick = () => {
    modalIndex--
    if (modalIndex === -1) {
        portfolioCarousel.style.display = "none"
        modalIndex = 0
    }
    modalCardScroll.style.left = modalArr[modalIndex]
}

///////////// Contact Us Form /////////

const contactForm = document.querySelector("#contactForm")

contactForm.onsubmit = (e) => {
    e.preventDefault()
    for (let i = 0; i < 3; i++) {
        if (contactForm[i].value === "") {
            contactForm[i].style.border = "1px solid red"
        }
    }
}