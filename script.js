let count = 0;

const countDisplay = document.getElementById("count-display");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", () =>{
  count++;
  countDisplay.textContent = count;
});

decrementBtn.addEventListener("click" , () =>{
  if (count > 0){
    count--;
    countDisplay.textContent = count;
  }
});



const colorBox = document.getElementById("color-box");
const changeColorBtn = document.getElementById("change-color");

const colors = ["red", "blue", "green", "purple", "orange"];

changeColorBtn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = randomColor;
});



const showQuoteBtn = document.getElementById("show-quote");
const quoteDisplay = document.getElementById("quote-display");

const quotes = ["Believe in yourself.",
  "Stay positive, work hard, make it happen.",
  "The best way to predict the future is to create it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success doesn’t come to you. You go to it."];

  showQuoteBtn.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = `${randomQuote}`
  });