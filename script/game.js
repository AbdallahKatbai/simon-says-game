console.log("game didn't start yet")

const body = document.getElementsByTagName('body')[0]
const lvl_title = document.getElementById ('level-title')
let container = document.getElementsByClassName('container')[0]
const btn = document.querySelectorAll(' .btn')
const colorcode = {
    0: 'green',
    1: 'red',
    2: 'yellow',
    3: 'blue'
}
let lvl_order = []
let play = false

body.addEventListener('keypress', start_game)

function start_game(){
    console.log('game started')
    body.removeEventListener('keypress', start_game)
    lvl_title.parentNode.removeChild(lvl_title)
    add_level()
    start_lvl()
}

function add_level(){
    const n = Math.floor(Math.random()*4)
    console.log(n)
    lvl_order.push(n)
    console.log(colorcode[n])
}

function start_lvl (){
    lvl_order.forEach((element, index) => {
        setTimeout(() => {
            btn[element].classList.toggle('pressed')
        }, 100)
        btn[element].classList.toggle('pressed')

    });
}


