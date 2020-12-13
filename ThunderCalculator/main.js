const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const sec = document.getElementById("timer")
const rez = document.getElementById("rezultat")


Swal.fire(
    'Thunder calculator',
    'When you see the lignt click the START button, then wait for the sound. When you hear the sound, click stop and it will calculate how far the thunder is.',
    'question'
  )

let rezultat1
let rezultat2

let s = 1;
let timer;

let stopwatchEl = document.querySelector('.timer')

function start(){
    if(!timer){
    timer = setInterval(run, 1000);
    }
    else{
        s = 1;
        sec.innerHTML = 0;
        timer = setInterval(run, 1000)
    }

    if(rez.innerHTML){
        rez.innerHTML = "";
    }

    btn2.style.display = "block";
    btn1.style.display = "none";
}

function run(){
    stopwatchEl.textContent = s
    s++;
}

function stop(){
    clearInterval(timer);
    btn1.style.display = "block";
    btn2.style.display = "none";
    

    rezultat1 = (s -1) / 5;
    rezultat2 = rezultat1 * 1.61;

    rez.innerHTML = rezultat1.toFixed(1) + "m" + "/" + rezultat2.toFixed(1) + "Km";

}