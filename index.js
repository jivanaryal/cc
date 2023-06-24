const obj = [
  {
    days: "sunday",
  },
  {
    days: "monday",
  },
  {
    days: "tuesday",
  },
  {
    days: "wednesday",
  },
  {
    days: "thursday",
  },
  {
    days: "friday",
  },
  {
    days: "saturday",
  },
];

const jivan = obj.map((val) => {
  return val.days;
});

const day = document.querySelector(".day");

for (let i = 0; i < obj.length; i++) {
  const divElement = document.createElement("div");
  divElement.setAttribute("class", "my-div");
  divElement.textContent = obj[i].days;
  day.appendChild(divElement);
}

for (let i = 1; i <= 30; i++) {
  const divElement = document.createElement("div");
  divElement.setAttribute("class", "my-div");
  divElement.textContent = i;
  day.appendChild(divElement);
}
