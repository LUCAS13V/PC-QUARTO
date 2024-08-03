var object_player = document.querySelector("#player")
//obj player 
const player = {
    obj: "",
    x: "",
    y: "",
    largura: "",
    altura: "",
    criar(x=tela.obj.x+object_tela.clientLeft , y=tela.obj.y+object_tela.clientLeft, larg=5, altu=5){
        //atalizando valores do inicias
        console.log(object_tela.clientLeft)
        this.x = x, object_player.style.left=`${this.x}px`
        this.y = y, object_player.style.top=`${this.y}%`
        this.largura = larg, object_player.style.width=`${this.largura}%`
        this.altura = altu, object_player.style.height=`${this.altura}%`
       
    },
    move(){
        let speed = 7
        //DIREITA
        if(key_player_move==68){
            if(debug){console.log("click_left = true")}
            //se pl chegar no limite de tela que sao
            //  (PL+PL_WID) maior que larg de tela-volocidade
            
            console.log("a", tela.obj.x, "b", object_tela.clientLeft)
            if((this.obj.x+this.obj.width) >= (tela.obj.width+tela.obj.x) - (object_tela.clientLeft+speed)){
                //ent colocar pl no limite
                this.x=tela.obj.width-(this.obj.width+object_tela.clientLeft-tela.obj.x)
                object_player.style.left=`${this.x}px`
                key_player_move=0
                //se nao tiver no limite ent
            }else{
                this.x+=speed
                object_player.style.left=`${this.x}px`
 
            }
        }
        //ESQUERDA  
        if(key_player_move==65){
            if(debug){console.log("click_right = true")}
            if(this.x <= (object_tela.clientLeft) + tela.obj.x){
                console.log(object_tela.clientLeft, tela.obj.x)
                key_player_move=0
                this.x=object_tela.clientLeft+tela.obj.x
                object_player.style.left=`${this.x}px`
            }else{
                this.x-=speed
                object_player.style.left=`${this.x}px`
            }
        }

    }
}
function loop_player(){
    player.obj=this.obj = object_player.getBoundingClientRect()
    requestAnimationFrame(loop_player)
}loop_player()