let div1=document.getElementById("div1")
let div2=document.getElementById("div2")
let div3=document.getElementById("div3")
let div4=document.getElementById("div4")
let div5=document.getElementById("div5")
let div6=document.getElementById("div6")
let div7=document.getElementById("div7")
let div8=document.getElementById("div8")
let div9=document.getElementById("div9")
let show=document.getElementById("show")
let tPrice=document.getElementById("tPrice")
let total=document.getElementById("total")
let tk1=document.getElementById("div1tk")
let tk2=document.getElementById("div2tk")
let tk3=document.getElementById("div3tk")
let tk4=document.getElementById("div4tk")
let tk5=document.getElementById("div5tk")
let tk6=document.getElementById("div6tk")
let tk7=document.getElementById("div7tk")
let tk8=document.getElementById("div8tk")
let tk9=document.getElementById("div9tk")
let name1=document.getElementById("div1name")
let name2=document.getElementById("div2name")
let name3=document.getElementById("div3name")
let name4=document.getElementById("div4name")
let name5=document.getElementById("div5name")
let name6=document.getElementById("div6name")
let name7=document.getElementById("div7name")
let name8=document.getElementById("div8name")
let name9=document.getElementById("div9name")
let discount=document.getElementById("discount")
let button=document.getElementById("button1")


div1.style.cursor="pointer"
div1.addEventListener("click",()=>{
    console.log("div-1 clicked");
    tPrice.textContent= Number(tPrice.textContent)+Number(tk1.textContent)
    let newul= document.createElement("li")
    newul.textContent= `name:${name1.textContent}, price:${tk1.textContent}`
    show.append(newul)
})
div2.style.cursor="pointer"
div2.addEventListener("click",()=>{
    console.log("div-2 clicked");
    tPrice.textContent= Number(tPrice.textContent)+Number(tk2.textContent)
    let newul= document.createElement("li")
    newul.textContent= `name:${name2.textContent}, price:${tk2.textContent}`
    show.append(newul)
})
div3.style.cursor="pointer"
div3.addEventListener("click",()=>{
    console.log("div-3 clicked");
    tPrice.textContent= Number(tPrice.textContent)+Number(tk3.textContent)
    let newul= document.createElement("li")
    newul.textContent= `name:${name3.textContent}, price:${tk3.textContent}`
    show.append(newul)
})
div4.style.cursor="pointer"
div4.addEventListener("click",()=>{
    console.log("div-4 clicked");
    tPrice.textContent= Number(tPrice.textContent)+Number(tk4.textContent)
    let newul= document.createElement("li")
    newul.textContent= `name:${name4.textContent}, price:${tk4.textContent}`
    show.append(newul)
})
div5.style.cursor="pointer"
div5.addEventListener("click",()=>{
    console.log("div-3 clicked");
    tPrice.textContent= Number(tPrice.textContent)+Number(tk5.textContent)
    let newul= document.createElement("li")
    newul.textContent= `name:${name5.textContent}, price:${tk5.textContent}`
    show.append(newul)
})
div6.style.cursor="pointer"
div6.addEventListener("click",()=>{
    console.log("div-6 clicked");
    tPrice.textContent= Number(tPrice.textContent)+Number(tk6.textContent)
    let newul= document.createElement("li")
    newul.textContent= `name:${name6.textContent}, price:${tk6.textContent}`
    show.append(newul)
})
div7.style.cursor="pointer"
div7.addEventListener("click",()=>{
    console.log("div-3 clicked");
    tPrice.textContent= Number(tPrice.textContent)+Number(tk7.textContent)
    let newul= document.createElement("li")
    newul.textContent= `name:${name7.textContent}, price:${tk7.textContent}`
    show.append(newul)
})
div8.style.cursor="pointer"
div8.addEventListener("click",()=>{
    console.log("div-8 clicked");
    tPrice.textContent= Number(tPrice.textContent)+Number(tk8.textContent)
    let newul= document.createElement("li")
    newul.textContent= `name:${name8.textContent}, price:${tk8.textContent}`
    show.append(newul)
})
div9.style.cursor="pointer"
div9.addEventListener("click",()=>{
    console.log("div-9 clicked");
    tPrice.textContent= Number(tPrice.textContent)+Number(tk9.textContent)
    let newul= document.createElement("li")
    newul.textContent= `name:${name9.textContent}, price:${tk9.textContent}`
    show.append(newul)
})



