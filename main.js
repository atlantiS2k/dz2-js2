const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const purple = document.querySelector('.purple')
const pink = document.querySelector('.pink')
const orange = document.querySelector('.orange')
const reset = document.querySelector('.reset')


const body = document.body


red.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "red"
    },1000)
    console.log(red);
})
yellow.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "yellow"
    },1000)
    console.log(yellow);
})
green.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "green"
    },1000)
    console.log(green);
})
purple.addEventListener('click', ()=> {
    setTimeout(() => {
        body.style.backgroundColor = "purple"
    },1000)
    console.log(purple);
})
pink.addEventListener('click',()=> {
    setTimeout(() => {
        body.style.backgroundColor = "pink"
    },1000)
    console.log(pink);
})
orange.addEventListener('click', ()=> {
    setTimeout(() => {
        body.style.backgroundColor = "orange"
    },1000)
    console.log(orange);
})
blue.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "blue"
    },1000)
    console.log(blue);
})
reset.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "white"
    },500)
    console.log(reset);
})