tela.size(800, 500, 100, 50)
function game_loop(){
    tela.update()
    requestAnimationFrame(game_loop)
}game_loop()

var enm01 =new Enimigo(50, 10, 40, 40)
enm01.criar("01")
function gameplay_loop(){
    player.update()
    player.move()
    enm01.update()
    enm01.move()
    requestAnimationFrame(gameplay_loop)
}gameplay_loop()

player.criar(tela.obj.x+(tela.obj.width/2) , tela.altura/1.1, 40, 40)
