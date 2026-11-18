const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

fetch("https://students.netoservices.ru/nestjs-backend/poll")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    title.textContent = data.data.title;

    data.data.answers.forEach(function (answer) {
      const button = document.createElement("button");
      button.className = "poll__answer";
      button.textContent = answer;

      button.addEventListener("click", function () {
        alert("Спасибо, ваш голос засчитан!");
      });

      answers.appendChild(button);
    });
  })
  .catch(function (error) {
    console.error(error);
  });