//atalizando cores 
//resolver essa gambirra um dia
object_tela.style.borderColor=border_color  
object_death.style.borderColor=border_color, object_death.style.background=fundo_color
object_orda.style.borderColor=border_color,  object_orda.style.background=fundo_color
object_level.style.borderColor=border_color,  object_level.style.background=fundo_color
 
//JOGO 
const gameplay_screen = {
    execute: true,
    init(){
        //PLAYER INIT
        player.criar(tela.obj.x+(tela.obj.width/2) , tela.altura-85, 30, 60)
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
    execute: false,
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
tela.criar(100, 80, 800, 500)
//executar ? 
if(gameplay_screen.execute){gameplay_screen.init()}

//gameplay_screen.init()
function geral_loop(){
     //TELA UPDATE
     tela.update()
     //JOGO UPDATE
    if(gameplay_screen.execute){gameplay_screen.update()}
    //TELAS DE MORTE
    if(death_screen.execute){death_screen.update()}
    requestAnimationFrame(geral_loop)
}geral_loop()
