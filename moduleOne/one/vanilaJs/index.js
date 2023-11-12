const countEle = document.getElementById('count')
const increaseEle = document.getElementById('increase');
const decreaseEle =document.getElementById('decrease');

let count = 0;

increaseEle.addEventListener('click', ()=>{
    count++;
    countEle.innerHTML = count
})

decreaseEle.addEventListener('click', ()=>{
    count--;
    countEle.innerText = count;
})