const box = document.querySelector('.box');

for (let i = 1; i <= 8; i++) {
  const divRow = document.createElement("div");
  divRow.setAttribute("class", "row");

  for (let j = 1; j <= 8; j++) {
    const divElement = document.createElement("div");
    divElement.setAttribute("class", "my-div");
    divElement.textContent = (j + (i - 1) * 8).toString();

    if ((i + j) % 2 === 0) {
      divElement.classList.add("white");
    } else {
      divElement.classList.add("black");
    }

    divRow.appendChild(divElement);
  }

  box.appendChild(divRow);
}
