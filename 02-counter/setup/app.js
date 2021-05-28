const counterDigit = document.querySelector('.counter_digit');
const decBtn = document.getElementById('dec_btn');
const resBtn = document.getElementById('res_btn');
const incBtn = document.getElementById('inc_btn');

let ctr = Number(counterDigit.textContent);

decBtn.addEventListener('click', DecFunc);

function DecFunc () {
    console.log("Dec");
    ctr--;
    console.log(ctr);
    counterDigit.textContent = ctr;
    if(ctr < 0)
        counterDigit.style.color = 'yellow';
    if(ctr === 0)
        counterDigit.style.color = 'black';

}

resBtn.addEventListener('click', ResFunc);

function ResFunc () {
    console.log("Res");
    ctr=0;
    counterDigit.textContent = ctr;
    counterDigit.style.color = 'black';

}

incBtn.addEventListener('click', IncFunc);

function IncFunc () {
    console.log("Inc");
    ctr++;
    counterDigit.textContent = ctr;
    if(ctr > 0)
        counterDigit.style.color = 'green';
    if(ctr === 0)
        counterDigit.style.color = 'black';
}

console.log("to test out git");