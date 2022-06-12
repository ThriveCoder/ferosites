const gripLines = document.querySelector('.fa-grip-lines');
const angleRight = document.querySelector('.fa-times');
const mainMenu = document.querySelector('.mainMenu');

gripLines.addEventListener('click', showNav);
angleRight.addEventListener('click', closeNav);

function showNav() {
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '85px'
    // mainMenu.style.left = '0' 
    document.getElementById('open').style.display = 'none'
    document.getElementById('close').style.display = 'block'
}
function closeNav() {
    mainMenu.style.top = '-500%'
    // mainMenu.style.left = '-2000px'
    document.getElementById('open').style.display = 'block'
    document.getElementById('close').style.display = 'none'
}
const container = document.querySelector('.wrapper')
const homeIndicator = [...document.querySelectorAll('.indicators button')]
let currentHome = 0
homeIndicator.forEach((item, i) => {
    item.addEventListener('click', () => {
        homeIndicator[currentHome].classList.remove('active')
        container.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active')
        currentHome = i
    })
})

const wrapper = document.querySelector('.house');
const indicators = [...document.querySelectorAll('.switch-btn button')];

let currentTestimonial = 0;
indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `${-100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})
function removeNav() {
    closeNav()
}