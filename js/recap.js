let btnBg = document.getElementById("btn-bg");
let clrBg = document.querySelector(".clrBg");
btnBg.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  clrBg.style.background = `rgb(${red},${green},${blue})`;
});

let discoverElement = document.getElementById("discover");
discoverElement.addEventListener("click", function () {
  window.location.href = "./main.html";
});

let btn1 = document.getElementById("btn1");
let digit = document.getElementById("digit").innerText;
let convertedDigit = parseInt(digit);
let incre = document.getElementById("incre").innerText;
convertedIncre = parseInt(incre);
btn1.addEventListener("click", function () {
  alert("Board Updated Successfully");
  let sum = convertedDigit - 1;
  btn1.style.backgroundColor = "gray";
  document.getElementById("digit").innerText = sum;
});
btn1.addEventListener("click", function () {
  btn1.style.backgroundColor = "gray";
  let sum = convertedIncre + 1;

  document.getElementById("incre").innerText = sum;
});

let btn2 =document.getElementById('btn2');
btn2.addEventListener("click", function () {
  alert("Board Updated Successfully");
  let sum = convertedDigit - 2;
  btn1.style.backgroundColor = "gray";
  document.getElementById("digit").innerText = sum;
});
btn2.addEventListener("click", function () {
  btn2.style.backgroundColor = "gray";
  let sum = convertedIncre + 2;

  document.getElementById("incre").innerText = sum;
});

let btn3 =document.getElementById('btn3');
btn3.addEventListener("click", function () {
  alert("Board Updated Successfully");
  let sum = convertedDigit - 2;
  btn1.style.backgroundColor = "gray";
  document.getElementById("digit").innerText = sum;
});
btn3.addEventListener("click", function () {
  btn3.style.backgroundColor = "gray";
  let sum = convertedIncre + 2;

  document.getElementById("incre").innerText = sum;
});
