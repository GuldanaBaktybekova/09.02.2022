// let example2Button = document.getElementById('example2');
// example2Button.onclick = function() {
//   alert("Nice to meet you!");
// }

// let example3Button = document.getElementById('example3');
// example3Button.addEventListener('click' , function() {
//   alert("Nice to meet you!");

// });

// example3Button.addEventListener('click' , function() {
//   alert("Bye!");

// });

// // let example4Button = document.querySelector('#examle4');
// // example4Button.addEventListener('click', function() {
// //   example4Button.textContent ="Nice to meet you";
// // });

// let example5Div = document.querySelector('#example5');
// example5Div.addEventListener('click', function() {
//   alert(example5Div.textContent.length);
// })


let num = 0;

let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function() {
  h1.textContent = num;
});

let increaseButton = document.querySelector('#increase');

increaseButton.addEventListener('click', function(){
  num = num + 1;
  h1.textContent = num;
});

// num += 1
// num++
let decreaseButton = document.querySelector('#decrease');

decreaseButton.addEventListener('click', function(){
  num = num - 1;
  h1.textContent = num;
});


resetButton.addEventListener('click', function(){
  num = 0;
  h1.textContent = num;
});


