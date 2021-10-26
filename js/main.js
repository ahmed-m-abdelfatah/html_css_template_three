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
