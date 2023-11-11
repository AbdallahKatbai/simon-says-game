console.log("game didn't start yet")
const lvl_title = document.getElementsByTagName('body')[0]
lvl_title.addEventListener('keypress', start_game)

function start_game(){
console.log('game started')
}