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
    //setTimeout(() => {player_turn()}, 500)
}

function add_level(){
    const n = Math.floor(Math.random()*4)
    console.log(n)
    lvl_order.push(n)
    console.log('lvl_order: ' + lvl_order)
    console.log(colorcode[n])
}

function start_lvl (){
    lvl_order.forEach((element, index) => {
        setTimeout(() => {
            btn[element].classList.toggle('pressed')
        }, 1000)
        setTimeout(() => {
            btn[element].classList.toggle('pressed')
        })
    });play = true
}

let player_order = []
let counter = 0

    btn.forEach((element, index) => {
        btn[index].addEventListener('click', function() {
            if(play == true){
            console.log('event listened')
                //if(play == true){

                player_order.push(index)
                console.log('counter1: ' + counter)
                console.log('index: ' + index + ' and player_order: ' + player_order + ' and lvl_order: ' + lvl_order + ' lvl_order[counter]: ' + lvl_order[counter])
                setTimeout(() => {check(index, lvl_order[counter])}, 500)
            }
            })
        })


function check(plr_index, game_index){
    if( plr_index != game_index){
            container.classList.toggle('game-over')
        container.classList.toggle('game-over')
        play = false
        console.log('game over')
    }
    else if((plr_index == game_index) && (counter == lvl_order.length - 1)){
        console.log(plr_index +' and ' + game_index + ' and ' + counter + ' and ' + (lvl_order.length - 1))
        console.log('victory')
        play = false
        player_order = []
        counter = 0
        console.log('victory_counter: ' + counter)
        add_level()
        start_lvl()
        //setTimeout(() => {player_turn()}, 500)
    }
    else {
        counter += 1
        console.log('counter2: ' + counter)
    }
}
