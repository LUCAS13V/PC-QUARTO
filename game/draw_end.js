//CRINADO TELA
tela.size(800, 500, 100, 80)
function game_loop(){
    tela.update()
    requestAnimationFrame(game_loop)
}game_loop()
//INIMIGOS INICIAS
enm_max(2)
function gameplay_loop(){
    //add pontuacao e mas
    object_orda.innerText=`HORDA(${orda})`
    object_level.innerText=`LEVEL(${level})`

    //PLAYER
    //atalizando player
    player.update()
    
    //atalizar enimigos da lista um de cada vez
    for(let i=0;enimigos.length > i; i++){
       enimigos[i].update()
    }
    requestAnimationFrame(gameplay_loop)
}gameplay_loop()

player.criar(tela.obj.x+(tela.obj.width/2) , tela.altura-60, 30, 60)