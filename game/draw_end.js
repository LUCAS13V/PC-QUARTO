tela.size(800, 500, 100, 50)
function game_loop(){
    tela.update()
    requestAnimationFrame(game_loop)
}game_loop()

//crindo lista de enimigos
var enimigos = []
function enm_max(num){
    var num_enimigos_max = num
    if(enimigos.length > 0){
        //enimigos=0

    }
    for( i=0; i < num_enimigos_max; i++){
        const obj_temp =new Enimigo(30*i, 10, 40, 40)
        //crindo animigo na tela e adicionado ele na lista de enimigos 
        obj_temp.criar(i+1)
        obj_temp.deletar()
        enimigos[i] = obj_temp
        //object_tela.removeChild()
        console.log(enimigos[1])
        
    }

}enm_max(3)

//ENIMIGOS
// checando numero maximo de player para criar

function gameplay_loop(){
    //PLAYER
    //atalizando player
    player.update()
    
    //atalizar enimigos da lista um de cada vez
    //console.log(i)
    for(let i=0; i < enimigos.length; i++){
        enimigos[i].update()
    }
    requestAnimationFrame(gameplay_loop)
}gameplay_loop()

player.criar(tela.obj.x+(tela.obj.width/2) , tela.altura/1.1, 40, 40)