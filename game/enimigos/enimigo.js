
class Enimigo {
    object_enimigo=""
    speed=10
    obj = ""
    constructor(x, y , larg, altu){
        this.x = x, this.y = y
        this.largura = larg, this.altura = altu
    }
    criar(id){
        //crindo enimigo
        this.object_enimigo = document.createElement("div")
        this.object_enimigo.id=`enimigo ${id}`
        this.object_enimigo.classList.add("enm")
        //adicionado na tela
        object_tela.appendChild(this.object_enimigo)
        this.obj =  this.object_enimigo.getBoundingClientRect()
    }
    move(){
        if(this.y + this.largura >= player.y-this.speed){

        }else{this.y+=this.speed}
    }
    update(){
        this.object_enimigo.style.left=`${this.x}px`
        this.object_enimigo.style.top=`${this.y}px`
        this.object_enimigo.style.width=`${this.largura}px`
        this.object_enimigo.style.height=`${this.altura}px`
        
    }
    
}
