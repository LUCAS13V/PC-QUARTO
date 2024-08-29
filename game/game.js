const debug = false
//CONFIG DE CORES   
let border_color = "red"
let fundo_color = " rgba(0 , 0, 0, 0.8)"
//TELA DO JOGO 
var object_tela = document.querySelector("#tela")
const tela = {
    //varivais iniciais
    x: "", largura: "",
    y: "", altura: "",
    //outras variveis
    obj: object_tela.getBoundingClientRect(),
    css_update: true,
    criar(x, y, larg ,altu){   
        //definido variveis inicias
        this.largura = larg, this.x = x
        this.altura = altu, this.y = y
    },
    update(){
        tela.obj = object_tela.getBoundingClientRect()
        if(this.css_update){
            object_tela.style.width=`${this.largura}px`
            object_tela.style.height=`${this.altura}px`
            object_tela.style.left=`${this.x}px`
            object_tela.style.top=`${this.y}px`
        }
    }
}
//SCOREs
var orda = 0, level = 1
let object_orda = document.createElement("div")
document.body.appendChild(object_orda).classList.add("scores")
let object_level = document.createElement("div")
document.body.appendChild(object_level).classList.add("scores")
object_orda.id="ordas", object_level.id="level"
//LEITURA DO TECLADO
var key
var key_player_move
window.addEventListener("keydown", ()=>{
    //se d ou a click ent mudar key
    //console.log(event.key)
    //68 direita 65 esquerda
    if(event.keyCode==68 || event.keyCode==65){key_player_move = event.keyCode}
})
//numeros aleatorios
var random = (num) => Math.floor(Math.random(num)*num)
