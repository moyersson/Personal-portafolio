const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "01-01-2016";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() =>{
    const now = new Date();
    const difference = Math.floor((now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000);
    timeContainer.innerText = intlNumberFormatter.format(difference);
},1000);

let itemTwo = document.getElementById("about-me");

function changeBackground(){
    itemTwo.style.backgroundColor  = 'pink';
  }
  itemTwo.addEventListener('mouseover',changeBackground);

  
  function returnBackground(){
    itemTwo.style.backgroundColor  = 'white';
  }
  itemTwo.addEventListener('mouseout',returnBackground);
