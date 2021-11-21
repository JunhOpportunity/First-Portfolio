'use strict';

// Make navbasr transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navberHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navberHeight) {
        navbar.classList.add('navbar--dark');
    }
    else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open'); // 메뉴를 눌러서 이동하면, 바로 네비게이션 바 사라짐.
    scrollIntoView(link);
});

// Navbar toggle button for small screen
const navBarToggleBtn = document.querySelector('.navbar__toggle-btn');
navBarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

// Make home slowlyfade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// Show "arrow up" button when scroling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    }
    else {
        arrowUp.classList.remove('visible');
    }
})

// Handle click on the "Arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})


// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; /* 만약 버튼의 숫자를 누른 경우라도 반응하도록. (잘 이해 x) */
    if(filter == null) {
        return;
    }
    projectContainer.classList.add('anim-out');
    

    setTimeout(() => {
        projects.forEach((project) => { // forEach 구문은 let a of array 와 같음 
            console.log(project.dataset.type);
    
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            }
            else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300); // 300ms 이후에 다시 삭제
});

// Remove selection from the previous item and select the new one.

const active = document.querySelector('.category__btn.selected');
active.classList.remove('selected'); // selected 클래스 삭제
const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode; // 클릭 된 것이 버튼이면 e.target 쓰고, 그런 경우가 아니면 e.target에 있는 버튼을 쓴다(?) 라는 말
target.classList.add('selected'); // 클릭 된 부분의 클래스에 selected 클래스 추가



function scrollIntoView(selector) { // 원하는 위치로 이동하는 함수
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

// const sectionIds = [
//     '#home',
//     '#about',
//     '#skills',
//     '#works',
//     '#testimonials',
//     '#contact',

// ];
// const sections = sectionIds.map(id => document.querySelector(id));
// console.log(sections);