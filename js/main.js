// counter =========================================================================================
let statsSection = document.querySelector('.stats');
let counters = document.querySelectorAll('.stats .container .box .number');

counters.forEach((counter, index) => {
  console.log('call counters.forEach');

  // counter.textContent = '0';

  // JavaScript - What is Hoisting ? https://youtu.be/3nswTRsN5XA
  let updateCounter = () => {
    // + to number
    // https://stackoverflow.com/a/1133814/16107539
    let target = +counter.dataset.target;
    let nowCounterNumber = +counter.textContent;
    let increment = target / 600;

    if (nowCounterNumber < target) {
      counter.textContent = `${Math.ceil(nowCounterNumber + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.textContent =
        target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + `${index == counters.length - 1 ? 'K' : ''}`;
    }
  };

  window.addEventListener('scroll', statsScrollTrigger);

  function statsScrollTrigger() {
    console.log('call statsScrollTrigger');

    if (this.scrollY >= statsSection.offsetTop - 100) {
      updateCounter();
      window.removeEventListener('scroll', statsScrollTrigger);
    }
  }
});

// autocomplete="off" ==============================================================================
let inputs = document.querySelectorAll('.input');

inputs.forEach(element => {
  console.log('call inputs.forEach');

  element.setAttribute('autocomplete', 'off');
});

// count down ======================================================================================
let countDownDate = new Date('Dec 31, 2023 23:59:59').getTime();

let counter = setInterval(() => {
  console.log('call counter');

  // Get Date Now -- here cuz milliseconds
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// progress animation ==============================================================================
let ourSkillsSection = document.querySelector('.our-skills');
let progressSpans = document.querySelectorAll('.the-progress span');

window.addEventListener('scroll', progressScrollTrigger);

function progressScrollTrigger() {
  console.log('call progressScrollTrigger');

  if (this.scrollY >= ourSkillsSection.offsetTop - 30) {
    addProgress();
    window.removeEventListener('scroll', progressScrollTrigger);
  }
}

function addProgress() {
  progressSpans.forEach(span => {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    // console.log(span.dataset.width);
    // console.log(span.getAttribute('data-width'));
    span.style.width = span.dataset.width;
  });
}
