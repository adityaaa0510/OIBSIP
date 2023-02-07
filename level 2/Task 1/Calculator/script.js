const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "dlt") {
      display.innerText = "";
    } else if (item.id == "back-space") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "isequal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "isequal") {
      display.innerText = "it is Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
})