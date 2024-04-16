const btn = document.querySelector(".btn");
const displayA = document.querySelector(".displayA");
const displayB = document.querySelector(".displayB");
const out = document.querySelector(".out");
let s = 0;
let p = 0;

btn.addEventListener('click',calculateSP);

function calculateSP(){
    const a = displayA.value;
    const b = displayB.value;
    s = a*b;
    p = (+a + +b) * 2;
    out.textContent = `S = ${s} and P = ${p}`
}