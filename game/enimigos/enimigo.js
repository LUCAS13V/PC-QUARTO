let enimigos_wait = []

class Enimigo {9
    object_enimigo=""
    speed=3   
    move = true
    obj = ""
    id = ""
    constructor(x, y , larg, altu){
        this.x = x, this.y = y
        this.largura = larg, this.altura = altu
    }
    criar(id){
        this.id = id
        //crindo enimigo
        this.object_enimigo = document.createElement("div")
        this.object_enimigo.id=`enm${id}`
        this.object_enimigo.classList.add("enm")
        this.object_enimigo.innerText=`${id}`
        //adicionado na tela
        object_tela.appendChild(this.object_enimigo)
        
    }
    update(){
        //atalizando css do enimigo
        this.obj = this.object_enimigo.getBoundingClientRect()
        this.object_enimigo.style.left=`${this.x}px`
        this.object_enimigo.style.top=`${this.y}px`
        this.object_enimigo.style.width=`${this.largura}px`
        this.object_enimigo.style.height=`${this.altura}px`
        //ver c chegou no fim da tela
        if(this.y > tela.altura+this.altura){
            // mover para topo e parar de ser mover
            this.y=-100
            this.x=random(tela.largura-this.largura)
            this.move=false
            //caso enimigos em espera seja menor do que enimigos cridos
            if(enimigos_wait.length < enimigos.length){
                //adcionar enimigo
                enimigos_wait.push(this)
            }
        }
        //se todos enimigos estao agurdando
        if(enimigos_wait.length == enimigos.length){
            score++
            //c pontucao cheagr em mas 10 ent
            if(score >= level*5){
                //adicionar 1 enimigo
                enm_max(1)
                level++
            }
            //colocando enimigos para c mover e zerando lista de espera
            for(let i=0; enimigos.length > i; i++){
                setTimeout(()=>{
                    enimigos[i].move=true
                },random((this.speed*1000)+level*100))
            }
            enimigos_wait=[]
        }
        //mover-se
        if(this.move){
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
                //parar player
                key_player_move=0
            }else{
                //se nao esta coledindo ent
                this.y+=this.speed+(enimigos.length/level)

            }
        }
    }
    
}

//crindo lista de enimigos
var enimigos = []
function enm_max(num, mesclar=false){
    //funcao de zerar enimigos em jogo
    if(num >= 0 && mesclar){
        //deletar todos enimigos em jogo e limpar lista de enimigos
        for(let i=0;i < enimigos.length; i++){
            object_tela.removeChild(enimigos[i].object_enimigo)
        }
        enimigos=[]
    }
    //criar enimigos
    for(let i=0; i < num;i++){
        let enm_temp =new Enimigo(0,-100,40,40)
        enm_temp.x = random(tela.largura-enm_temp.largura)
        enm_temp.criar(enimigos.length)
        enimigos.push(enm_temp)
    }
}