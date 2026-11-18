const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
      progress.value = event.loaded / event.total;
    }
  });

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  const formData = new FormData(form);
  xhr.send(formData);
});
