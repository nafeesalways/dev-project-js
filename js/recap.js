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
    const historyContainer = document.getElementById('history');
    let div = document.createElement('div');
    let title =document.getElementById('title1').innerText;
   

    div.innerHTML= `
    <p id ="para1" class="mt-5  font-bold">You have completed the ${title} issue at <span id="dateTime"></span></p>
    `
    historyContainer.appendChild(div);
  btn1.style.backgroundColor = "gray";
  let sum = convertedIncre + 1;

  document.getElementById("incre").innerText = sum;
});

let btn2 =document.getElementById('btn2');
btn2.addEventListener("click", function () {
  const historyContainer = document.getElementById('history')
  let div = document.createElement('div');
  let title2 = document.getElementById('title2').innerText;
 

  div.innerHTML= `
  <p id="para2" class="mt-5  font-bold">You have completed the ${title2} issue at <span id="dateTime"></span></p>
  `
  historyContainer.appendChild(div);
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
  const historyContainer = document.getElementById('history')
  let div = document.createElement('div');
  let title3 = document.getElementById('title3').innerText;
 

  div.innerHTML= `
  <p id="para3" class="mt-5  font-bold">You have completed the ${title3} issue at <span id="dateTime"></span></p>
  `
  historyContainer.appendChild(div);

  alert("Board Updated Successfully");
  let sum = convertedDigit - 3;
  btn1.style.backgroundColor = "gray";
  document.getElementById("digit").innerText = sum;
});
btn3.addEventListener("click", function () {
  btn3.style.backgroundColor = "gray";
  let sum = convertedIncre + 3;

  document.getElementById("incre").innerText = sum;
});

let btn4 =document.getElementById('btn4');
btn4.addEventListener("click", function () {
  const historyContainer = document.getElementById('history')
  let div = document.createElement('div');
  let title4 = document.getElementById('title4').innerText;
 

  div.innerHTML= `
  <p id ="para4" class="mt-5  font-bold">You have completed the ${title4} issue at <span id="dateTime"></span></p>
  `
  historyContainer.appendChild(div);

  alert("Board Updated Successfully");
  let sum = convertedDigit - 4;
  btn1.style.backgroundColor = "gray";
  document.getElementById("digit").innerText = sum;
});
btn4.addEventListener("click", function () {
  btn4.style.backgroundColor = "gray";
  let sum = convertedIncre + 4;

  document.getElementById("incre").innerText = sum;
});

let btn5 =document.getElementById('btn5');
btn5.addEventListener("click", function () {
  alert("Board Updated Successfully");
  const historyContainer = document.getElementById('history')
  let div = document.createElement('div');
  let title5 = document.getElementById('title5').innerText;
 

  div.innerHTML= `
  <p id= "para5" class="mt-5  font-bold">You have completed the ${title5} issue at <span id="dateTime"></span></p>
  `
  historyContainer.appendChild(div);

 
  let sum = convertedDigit - 5;
  btn5.style.backgroundColor = "gray";
  document.getElementById("digit").innerText = sum;
});
btn5.addEventListener("click", function () {

  btn5.style.backgroundColor = "gray";
  let sum = convertedIncre + 5;

  document.getElementById("incre").innerText = sum;
});
let btn6 =document.getElementById('btn6');
btn6.addEventListener("click", function () {
  alert("Board Updated Successfully");
  const historyContainer = document.getElementById('history')
  let div = document.createElement('div');
  let title6 = document.getElementById('title6').innerText;
 

  div.innerHTML= `
  <p id="para6" class="mt-5  font-bold">You have completed the ${title6} issue at <span id="dateTime"></span></p>
  `
  historyContainer.appendChild(div);
  let sum = convertedDigit - 6;
  btn1.style.backgroundColor = "gray";
  document.getElementById("digit").innerText = sum;

  if(sum ===0){
    alert('Congrats!!! You have completed all the current task');
  }
});
btn6.addEventListener("click", function () {
  btn6.style.backgroundColor = "gray";
  let sum = convertedIncre + 6;

  document.getElementById("incre").innerText = sum;
});
