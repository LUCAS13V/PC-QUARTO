//player.criar(100, tela.obj.y+object_tela.clientLeft*3)

function loop(){
    tela.position(0,0)
    tela.size("80%", "90vh")
    
    player.move()
    requestAnimationFrame(loop)
}loop()
player.criar(100, 80)