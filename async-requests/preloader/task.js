const items = document.getElementById("items");
const loader = document.getElementById("loader");

fetch("http://localhost:3333/slow-get-courses")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const valute = data.response.Valute;

    for (const code in valute) {
      const currency = valute[code];

      const item = document.createElement("div");
      item.className = "item";

      const codeElement = document.createElement("div");
      codeElement.className = "item__code";
      codeElement.textContent = currency.CharCode;

      const valueElement = document.createElement("div");
      valueElement.className = "item__value";
      valueElement.textContent = currency.Value;

      const currencyElement = document.createElement("div");
      currencyElement.className = "item__currency";
      currencyElement.textContent = "руб.";

      item.appendChild(codeElement);
      item.appendChild(valueElement);
      item.appendChild(currencyElement);

      items.appendChild(item);
    }

    loader.classList.remove("loader_active");
  })
  .catch(function (error) {
    console.error(error);
  });