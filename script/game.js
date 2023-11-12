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
const blue = new Audio('sounds/blue.mp3')
const red = new Audio('sounds/red.mp3')
const green = new Audio('sounds/green.mp3')
const yellow = new Audio('sounds/yellow.mp3')
const wrong = new Audio('sounds/wrong.mp3')

body.addEventListener('keypress', start_game)

function start_game(){
    console.log('game started')
    body.removeEventListener('keypress', start_game)
    lvl_title.parentNode.removeChild(lvl_title)
    lvl_order = []
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
    console.log('lvl started')
    
    for (let i = 0; i < lvl_order.length; i++){
        setTimeout(() => {
            setTimeout(() => {
                btn[lvl_order[i]].classList.toggle('pressed')
                if(lvl_order[i] == 0) {green.play()}
                if (lvl_order[i] == 1) {red.play()}
                if (lvl_order[i] == 2) {yellow.play()}
                if (lvl_order[i] == 3) {blue.play()}
                console.log('lvl created' )
                play = true
                console.log('start_lvl comleted')
            }, 500)
            console.log('toggled')
            btn[lvl_order[i]].classList.toggle('pressed')
        }, i * 500) 
    }
   
   
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
                check(index, lvl_order[counter])
            }
            })
        })

function game_over(){
    body.classList.toggle('game-over')
    setTimeout(() => {
        body.classList.toggle('game-over')
    }, 500);
}

function check(plr_index, game_index){
    if( plr_index != game_index){
            container.classList.toggle('game-over')
        container.classList.toggle('game-over')
        play = false
        wrong.play()
        console.log('game over')
        game_over()
        setTimeout(() => {body.insertBefore(lvl_title, body.firstChild)}, 1000)
        body.addEventListener('keypress', start_game)
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
