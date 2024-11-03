function incrementSingle(counterId) {
  const counterElement = document.getElementById(counterId);
  let currentCount = parseInt(counterElement.textContent);
  counterElement.textContent = currentCount + 1;
}

function incrementBoth(counterId1, counterId2) {
  incrementSingle(counterId1);
  incrementSingle(counterId2);
}

function incrementSingle(counterId) {
  const counterElement = document.getElementById(counterId);
  let currentCount = parseInt(counterElement.textContent);
  counterElement.textContent = currentCount + 1;
}

function incrementBoth(counterId1, counterId2) {
  incrementSingle(counterId1);
  incrementSingle(counterId2);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    document.getElementById("missedHeadButton").click();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    document.getElementById("landedheadbutton").click();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "w" || event.key === "W") {
    document.getElementById("missedbodybutton").click();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "s" || event.key === "S") {
    document.getElementById("landedbodybutton").click();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "e" || event.key === "E") {
    document.getElementById("missedlegbutton").click();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "D" || event.key === "d") {
    document.getElementById("landedlegbutton").click();
  }
});
