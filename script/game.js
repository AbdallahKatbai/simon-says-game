console.log("game didn't start yet")

const body = document.getElementsByTagName('body')[0]
const lvl_title = document.getElementById ('level-title')
let container = document.getElementsByClassName('container')[0]
const colorcode = {
    0: 'green',
    1: 'red',
    2: 'yellow',
    3: 'blue'
}
let lvl_order = []

body.addEventListener('keypress', start_game)

function start_game(){
    console.log('game started')
    //body.removeEventListener('keypress', start_game)
    //lvl_title.parentNode.removeChild(lvl_title)
    add_level()
}

function add_level(){
    const n = Math.floor(Math.random()*4)
    console.log(n)
    lvl_order.push(colorcode[n])
    console.log(lvl_order)
}


