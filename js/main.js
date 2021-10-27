// counter =========================================================================================
const counters = document.querySelectorAll('.stats .container .box .number');
const videosSection = document.querySelector('.videos');

counters.forEach((counter, index) => {
  counter.textContent = '0';

  const updateCounter = () => {
    // + to number
    // https://stackoverflow.com/a/1133814/16107539
    const target = +counter.getAttribute('data-target');
    const nowCounterNumber = +counter.textContent;
    const increment = target / 600;

    if (nowCounterNumber < target) {
      counter.textContent = `${Math.ceil(nowCounterNumber + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.textContent =
        target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + `${index == counters.length - 1 ? 'K' : ''}`;
    }
  };

  window.addEventListener('scroll', ScrollTrigger);

  function ScrollTrigger() {
    if (this.scrollY >= videosSection.offsetTop + 600) {
      updateCounter();
      window.removeEventListener('scroll', ScrollTrigger);
    }
  }
});

// autocomplete="off" ==============================================================================
const inputs = document.querySelectorAll('.input');

inputs.forEach(element => {
  element.setAttribute('autocomplete', 'off');
});

// count down ======================================================================================
let countDownDate = new Date('Dec 31, 2023 23:59:59').getTime();

let counter = setInterval(() => {
  // Get Date Now
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
let section = document.querySelector('.our-skills');
let progressSpans = document.querySelectorAll('.the-progress span');

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop + 100) {
    progressSpans.forEach(span => {
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
      // console.log(span.dataset.width);
      // console.log(span.getAttribute('data-width'));
      span.style.width = span.dataset.width;
    });
  }
};
