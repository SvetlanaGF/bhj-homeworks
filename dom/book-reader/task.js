const book = document.getElementById("book");
const fontSizes = book.querySelectorAll(".font-size");

fontSizes.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    fontSizes.forEach(function (item) {
      item.classList.remove("font-size_active");
    });

    button.classList.add("font-size_active");

    book.classList.remove("book_fs-small", "book_fs-big");

    const size = button.dataset.size;

    if (size === "small") {
      book.classList.add("book_fs-small");
    } else if (size === "big") {
      book.classList.add("book_fs-big");
    }
  });
});