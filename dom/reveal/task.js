const revealBlocks = document.querySelectorAll(".reveal");

function checkReveal() {
  const windowHeight = window.innerHeight;

  revealBlocks.forEach(function (block) {
    const blockPosition = block.getBoundingClientRect();

    if (blockPosition.top < windowHeight && blockPosition.bottom > 0) {
      block.classList.add("reveal_active");
    }
  });
}

window.addEventListener("scroll", checkReveal);

checkReveal();