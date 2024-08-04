//player.criar(100, tela.obj.y+object_tela.clientLeft*3)

function loop(){
    player.loop()
    player.move()
    requestAnimationFrame(loop)
}loop()
tela.size()
player.criar()
