//atalizando cores 
//resolver essa gambirra um dia
object_tela.style.borderColor=border_color  
object_death.style.borderColor=border_color, object_death.style.background=fundo_color
object_orda.style.borderColor=border_color,  object_orda.style.background=fundo_color
object_level.style.borderColor=border_color,  object_level.style.background=fundo_color


let screen_executes = {menu:true, jogo:false, morte:false,}
if(sessionStorage.length>1){screen_executes = JSON.parse(sessionStorage.getItem("screen_executes"))}
console.log(screen_executes)

//MENU
const home_screen = {
    execute: screen_executes.menu,
    init(){
        home.criar(0 , 0,tela.largura, tela.altura)
        
    },
    update(){
        home.update()
    }
}
//JOGO 
const gameplay_screen = {
    execute: screen_executes.jogo,
    init(){
        //PLAYER INIT
        player.criar(tela.x+(tela.largura/2) , tela.altura-85, 30, 60)
        //ENIMIGOS INIT 
        enm_max(5)
        level=3
        //MUDANDO FUNDO DA TELA 
        object_tela.style.backgroundImage=" url('./assets/fundo_casa.png')"
    },
    update(){
        //ADD SCORE IN TELA
        object_orda.innerText=`HORDA(${orda})`
        object_level.innerText=`LEVEL(${level})`

        //PLAYER UPDATE
        player.update()
    
        //atalizar enimigos da lista um de cada vez
        for(let i=0;enimigos.length > i; i++){
            enimigos[i].update()
        }
    }
}
//TELA DE MORTE
const death_screen = {
    execute: screen_executes.morte,
    init(){
        //ajeitar valore tem que ser 
        //extremidades da tela  menos valores para reposividade
        death.criar(100, 100, 600, 300)
    },
    update(){
        death.update()
    }
}



//TELA INIT
let tlc = ()=>{tela.criar(100, 80, 800, 500)}
tlc()
//executar ?
if(home_screen.execute){home_screen.init()}
if(gameplay_screen.execute){gameplay_screen.init()}
//gameplay_screen.init()
function geral_loop(){
     //TELA UPDATE
     tela.update()
     //MENU
     if(home_screen.execute){home_screen.update()}else{
        try {
            object_tela.removeChild(object_home)
        }catch(error){}
    }
     //JOGO UPDATE
    if(gameplay_screen.execute){gameplay_screen.update()}
    //TELAS DE MORTE
    if(death_screen.execute){death_screen.update()}
    requestAnimationFrame(geral_loop)
}geral_loop()
//funcoes da tela 
//corrigir essa gambirra dps

function troca_tela(menu=false, game=false, morte=false){
    screen_executes.menu=menu
    screen_executes.jogo=game
    screen_executes.morte=morte
    window.sessionStorage.setItem("screen_executes", JSON.stringify(screen_executes))
    window.location.reload()
}
