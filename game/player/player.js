var object_player = document.querySelector("#player")
//OBEJETO PLAYER
const player = {
    //valores inicias
    x: "",largura: "",
    y: "",altura: "",
    //outras variveis
    obj: "",
    css_update: true,
    criar(x , y, larg, altu){
        //definido valores inicias
        this.x = x, this.largura = larg
        this.y = y, this.altura = altu
    },
    move(){
        let speed = 7
        //DIREITA
        if(key_player_move==68){
            //se pl chegar no limite de tela no lado direito ent
            if((this.obj.x+this.obj.width) >= (tela.obj.width+tela.obj.x)-(object_tela.clientLeft+speed)){
                //ent colocar pl no limite
                this.x=((tela.obj.width-this.obj.width))
                key_player_move=0
            }else{
                //se nao estiver no limite ent
                this.x+=speed
            }
        }
        //ESQUERDA  
        if(key_player_move==65){
            //if provisorio c x menor que, largura de borda?
            if(this.x <= (object_tela.clientLeft)){
                key_player_move=0
                this.x=-object_tela.clientLeft
            }else{
                this.x-=speed
 
            }
        }
    },
    update(){
        player.obj = object_player.getBoundingClientRect()
        if(this.css_update){
            object_player.style.left=`${this.x}px`
            object_player.style.height=`${this.altura}px`
            object_player.style.top=`${this.y}px`
            object_player.style.width=`${this.largura}px`
        }
    }
}