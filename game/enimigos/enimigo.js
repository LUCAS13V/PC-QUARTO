
class Enimigo {
    object_enimigo=""
    speed=3
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
        
    }
    move(){
        //COLISAO
        if(
        //se enimigo ficar estiver acima do player 
        (this.y + this.largura >= player.y-this.speed)&&
        //se passa para baixo do player 
        (this.y < player.y+player.largura)&&
        //se estiver dentro lado direito
        (player.x+player.largura) >= (this.x)&&
        //se estiver dentro lado esquerdo
        (player.x) < (this.x + this.largura)
        ){
            console.log(1)
            key_player_move=0
        }else{
            //se nao esta coledindo ent
            this.y+=this.speed
            if(this.y > tela.altura+this.altura){
                this.y=0
            }
        }
    }
    update(){
        this.obj =  this.object_enimigo.getBoundingClientRect()
        this.object_enimigo.style.left=`${this.x}px`
        this.object_enimigo.style.top=`${this.y}px`
        this.object_enimigo.style.width=`${this.largura}px`
        this.object_enimigo.style.height=`${this.altura}px`
        
    }
    
}
