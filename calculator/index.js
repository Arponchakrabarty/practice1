let one= document.getElementById("1")
let two= document.getElementById("2")
let three= document.getElementById("3")
let four= document.getElementById("4")
let five= document.getElementById("5")
let six= document.getElementById("6")
let seven= document.getElementById("7")
let eight= document.getElementById("8")
let nine= document.getElementById("9")
let zero= document.getElementById("0")
let back= document.getElementById("b")
let ac= document.getElementById("a")
let modulas= document.getElementById("m")
let mainus= document.getElementById("s")
let devide= document.getElementById("d")
let equal= document.getElementById("e")
let add= document.getElementById("add")
let dot= document.getElementById("dot")
let show= document.getElementById("show")
let show1=""
let isShow1=true
let show2=""
let operator=""
let final="0"

const reset = ()=>{
show1=""
isShow1=true
show2=""
operator=""
final=""


}





const auto= (num)=>{
   if(show.textContent==="0"){
         show.textContent= ""
    } 
    show.textContent=show.textContent+ `${num}`
    if(isShow1){
        show1=show1+ `${num}`
    }
    else{
        show2=show2+ `${num}`
    }
    console.log("show1",show1);
    console.log("show2",show2);
}

one.addEventListener("click", ()=> auto(1))
two.addEventListener("click", ()=> auto(2))
three.addEventListener("click", ()=> auto(3))
four.addEventListener("click", ()=> auto(4))
five.addEventListener("click", ()=> auto(5))
six.addEventListener("click", ()=> auto(6))
seven.addEventListener("click", ()=> auto(7))
eight.addEventListener("click", ()=> auto(8))
nine.addEventListener("click", ()=> auto(9))
zero.addEventListener("click", ()=> auto(0))
ac.addEventListener("click", ()=> {
    reset()
    auto("")
    show.textContent="0"
})
back.addEventListener("click", ()=>{
    show1=Number((show.textContent).slice(0,show.textContent.length-1))
    
    show.textContent= (show.textContent).slice(0,show.textContent.length-1)
    
})
modulas.addEventListener("click", ()=>{
    isShow1=false
    operator="*"
    show.textContent=show.textContent+ "*"
})
mainus.addEventListener("click", ()=>{
    isShow1=false
    operator="-"
    show.textContent=show.textContent+ "-"
})
devide.addEventListener("click", ()=>{
    isShow1=false
    operator="/"
    show.textContent=show.textContent+ "/"
})
equal.addEventListener("click", ()=>{
    if(operator==="+"){
        final= Number(show1)+Number(show2)
        
    }
    else if(operator==="-") {
        final= Number(show1)-Number(show2)
    }
    else if(operator==="*") {
        final= Number(show1)*Number(show2)
    }
    else if(operator==="/") {
        final= Number(show1)/Number(show2)
    }
    show.textContent= final
    console.log(final);
})
add.addEventListener("click", ()=>{
    isShow1=false
    operator="+"
    show.textContent=show.textContent+ "+"
})
dot.addEventListener("click", ()=>{
    show.textContent=show.textContent+ "."
})
