let currentColor = "green";
function changeColor(color) {
  currentColor = color;
  let nextColor = null;
  let time = 0;
  switch (currentColor) {
    case "green":
      nextColor = "yellow";
      time = 10;
      break;
    case "yellow":
      nextColor = "red";
      time = 2;
      break;
    case "red":
      nextColor = "green";
      time = 5;
      break;
  }
  setTimeout(() => {
    changeColor(nextColor);
  }, time * 1000);
}

changeColor("green");

setInterval(() => {
  console.log(new Date(), currentColor);
}, 1000);
