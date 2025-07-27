'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Btn Scroll

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (x/y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewPort', document.documentElement.clientHeight);
  console.log('height/width viewPort', document.documentElement.clientWidth);

  // // Scrolling.
  // window.scrollTo(
  //   s1Coords.left + window.pageXOffset,
  //   s1Coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1Coords.left + window.pageXOffset,
  //   top: s1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' }); // More modern way of scrolling
});

///////////////////////////////////////
// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tab component.
const tabs = document.querySelectorAll('.operation__tab');
const tabContainer = document.querySelector('.');
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

// // Selecting Elements.
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and Inserting Elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it! </button>';

// const header = document.querySelector('.header');
// header.append(message);

// // header.before(message);
// // header.after(message)

// message
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // Styles.
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// // Manupulating CSS through JAVASCRIPT
// // document.documentElement.style.setProperty('--color-primary', 'orangered');
// // document.documentElement.style.setProperty('font-size', '100%');

// // Manupulating HTML attributes through JAVASCRIPT
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt, logo.src);

// console.log(logo.learner);
// console.log(logo.getAttribute('learner'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data Attribites
// console.log(logo.dataset.version);

// Classes
// console.log(logo.classList.add('a'));
// console.log(logo.classList.remove('a'));
// console.log(logo.classList.toggle('a'));
// console.log(logo.classList.contains('a'));

// First we set the classes where we want to put functionality and put them in the variable

// Exporting and naming function
// const alertH1 = function (e) {
//   // e.preventDefault();
//   alert('Behn Dar gaye Behn Dar Gaye!!!!!');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// // Events Handlers
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// // rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min * 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);

//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINKS', e.target, e.currentTarget);

//   // e.stopPropagation();
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true
// );

//////////////////////////////////////
// DOM Tranversing
// const h1 = document.querySelector('h1');

// // Going Downward: childs
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';

// // Going Upward: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.nextSibling);
// console.log(h1.previousSibling);

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
