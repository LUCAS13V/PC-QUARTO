const debug = false
//TELA DO JOGO 
var object_tela = document.querySelector("#tela")
const tela = {
    //varivais iniciais
    x: "", largura: "",
    y: "", altura: "",
    //outras variveis
    obj: object_tela.getBoundingClientRect(),
    css_update: true,
    size(larg ,altu , x, y){   
        //definido variveis inicias
        this.largura = larg, this.x = x
        this.altura = altu, this.y = y
    },
    update(){
        tela.obj = object_tela.getBoundingClientRect()
        if(this.css_update){
            object_tela.style.width=`${this.largura}px`
            object_tela.style.height=`${this.altura}px`
            object_tela.style.top=`${this.y}px`
            object_tela.style.left=`${this.x}px`
        }
    }
}
//LEITURA DO TECLADO
var key
var key_player_move
window.addEventListener("keydown", ()=>{
    //se d ou a click ent mudar key
    if(event.keyCode==68 || event.keyCode==65){key_player_move = event.keyCode}
})

if(debug){console.log(`TELA\nclient left ${object_tela.clientLeft}\nclient width ${object_tela.clientWidth}`)}