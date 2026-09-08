let kdiv= document.getElementById("kdiv")
let ydiv= document.getElementById("ydiv")
let mdiv= document.getElementById("mdiv")
let show = document.getElementById("ul")
let kdivname= document.getElementById("k-div-name")
let ydivname= document.getElementById("y-div-name")
let mdivname= document.getElementById("m-div-name")
let kdivprice= document.getElementById("k-div-price")
let ydivprice= document.getElementById("y-div-price")
let mdivprice= document.getElementById("m-div-price")
let totalitem= document.getElementById("total-item")
let totalPrice= document.getElementById("total-price")


kdiv.addEventListener("click",()=>{
    console.log("click on k div");
    totalitem.textContent= Number(totalitem.textContent)+1
    totalPrice.textContent=Number(totalPrice.textContent)+Number(kdivprice.textContent)
    let newul= document.createElement("li")
    newul.textContent= `NAME: ${kdivname.textContent}, PRICE: ${kdivprice.textContent}`
    console.log(typeof kdivprice.textContent);
    show.appendChild(newul)
})
ydiv.addEventListener("click",()=>{
    console.log("click on y div");
      totalitem.textContent= Number(totalitem.textContent)+1
       totalPrice.textContent=Number(totalPrice.textContent)+Number(ydivprice.textContent)
       let newul= document.createElement("li")
    newul.textContent= `NAME: ${ydivname.textContent}, PRICE: ${ydivprice.textContent}`
    show.appendChild(newul)

})
mdiv.addEventListener("click",()=>{
    console.log("click on m div");
      totalitem.textContent= Number(totalitem.textContent)+1
       totalPrice.textContent=Number(totalPrice.textContent)+Number(mdivprice.textContent)
       let newul= document.createElement("li")
    newul.textContent= `NAME: ${mdivname.textContent}, PRICE: ${mdivprice.textContent}`
    show.appendChild(newul)

})