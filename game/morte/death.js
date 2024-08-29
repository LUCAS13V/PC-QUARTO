//tela menu
let object_death = document.createElement("div")
const death = {
    x: '',largura: '',
    y: '',altura:'',
    obj: '',
    text: "voce morreu",
    criar(x, y, larg, altu){
        let txt = document.createElement("div")
        object_death.appendChild(txt).id="dt_txt"
        txt.innerHTML=`${this.text}`
        object_tela.appendChild(object_death).id="dt_01"
        this.x=x, this.largura=larg 
        this.y=y, this.altura=altu
    },
    update(){
        this.obj = object_death.getBoundingClientRect()
        object_death.style.width=`${this.largura}px`
        object_death.style.height=`${this.altura}px`
        object_death.style.left=`${this.x}px`
        object_death.style.top=`${this.y}px`
        
    }
}
//botoes
let bt_01 = document.createElement("button")
let bt_02 = document.createElement("button")
object_death.appendChild(bt_01).id="bt_01"
object_death.appendChild(bt_02).id="bt_02"
bt_01.classList.add("bts")
bt_02.classList.add("bts")
//recomsar
bt_02.addEventListener("click", ()=>{
    window.location.reload()
})
//menu

