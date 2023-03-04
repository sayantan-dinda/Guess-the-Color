const box = document.querySelectorAll('.box');
const heading = document.querySelector('.main-heading');
const para = document.querySelector('.count');
const btn1 = document.querySelector('.btn1');
const btn = document.querySelectorAll('.btn');
const header = document.querySelector('.header');
let colors = [];

const rand = () => {
    return Math.floor(Math.random() * 256);
}

const rand1 = () => {
    return Math.floor(Math.random() * 6);
}


for (let i = 0; i < 6; i++) {
    colors.push(`rgb(${rand()},${rand()},${rand()})`);
}

let i = 0;
for (let item of box) {
    item.style.backgroundColor = colors[i];
    item.setAttribute('color-data', colors[i]);
    i++;
}

const randomColor = () => {
    let randColor = colors[rand1()];
    heading.innerHTML = randColor;
    return randColor;
}
let pickColor = randomColor();

let checkColor = () => {
    let i = 0;
    for (let item of box) {
        item.addEventListener('click', () => {
            let getColor = item.getAttribute('color-data');
            if (getColor == pickColor) {
                btn1.innerText = "CORRECT";
                for (let item1 of box) {
                    item1.style.opacity = '1';
                    item1.style.backgroundColor = pickColor;
                }
                header.style.backgroundColor = getColor;
                para.innerHTML = `No of Guesses: ${i + 1}`;
            }
            else {
                btn1.innerText = "WRONG";
                item.classList.add('fade');
                i++;
                para.innerHTML = `No of Guesses: ${i}`;
            }
        })
    }
    i = 0;
}
checkColor();

btn[0].addEventListener('click', () => {
    reset();
})
btn[2].addEventListener('click', () => {
    reset();
})
console.log(btn);

const reset = () => window.location = location.href;

