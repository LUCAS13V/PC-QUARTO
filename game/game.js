const debug = false
//TELA DO JOGO 
var object_tela = document.querySelector("#tela")
const tela = {
    obj: object_tela.getBoundingClientRect(),
    size(larg="800px",altu="500px"){   
        object_tela.style.width=`${larg}`
        object_tela.style.height=`${altu}`
    }
}
//LEITURA DO TECLADO
var key
var key_player_move
window.addEventListener("keydown", ()=>{
    //se d ou a click ent mudar key
    if(event.keyCode==68 || event.keyCode==65){key_player_move = event.keyCode}
    //if(debug){}console.log(key)
})

//TELA UPDATE
function loop_tela(){
    tela.obj = object_tela.getBoundingClientRect()
    requestAnimationFrame(loop_tela)
}loop_tela()