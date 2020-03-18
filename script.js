const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 0;
let minPosition = 0;
let secPosition = 0;

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

hrPosition = (hr * 30) + (min * 6)/12 ;
minPosition = (min * 6) + (sec* 6)/60 ;
secPosition = sec * 6;

function runTheClock(){
    secPosition = secPosition + 6;
    minPosition = minPosition + 6/60;
    hrPosition = hrPosition + 3/360 ;

    HOURHAND.style.transform = "rotate("+hrPosition+"deg)";
    MINUTEHAND.style.transform = "rotate("+minPosition+"deg)";
    SECONDHAND.style.transform = "rotate("+secPosition+"deg)";
}

var interval = setInterval(runTheClock, 1000);