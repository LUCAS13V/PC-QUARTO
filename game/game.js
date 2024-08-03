const debug = false
//TELA DO JOGO 
var object_tela = document.querySelector("#tela")
const tela = {
    obj: object_tela.getBoundingClientRect(),
    largura: "98%",
    altura: "98vh",
    x: 0,
    y: 0,
    position(vx, vy){
        
    },
    size(larg=lthis.argura, altu=this.altura){
        this.obj = object_tela.getBoundingClientRect()
        object_tela.style.height=`${altu}`
        object_tela.style.width=`${larg}`
        this.largura=object_tela.clientWidth
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