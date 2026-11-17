const rotators = document.querySelectorAll(".rotator");

rotators.forEach(function (rotator) {
  const cases = rotator.querySelectorAll(".rotator__case");
  let currentIndex = 0;

  function showNextCase() {
    cases[currentIndex].classList.remove("rotator__case_active");

    currentIndex = currentIndex + 1;

    if (currentIndex === cases.length) {
      currentIndex = 0;
    }

    const currentCase = cases[currentIndex];

    currentCase.classList.add("rotator__case_active");
    currentCase.style.color = currentCase.dataset.color;

    setTimeout(showNextCase, Number(currentCase.dataset.speed));
  }

  const firstCase = cases[currentIndex];
  firstCase.style.color = firstCase.dataset.color;

  setTimeout(showNextCase, Number(firstCase.dataset.speed));
});