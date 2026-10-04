let discountName= document.getElementById("discount-name")
let button=document.getElementById("button1")
let discount=document.getElementById("discount")
let isCoupon= false
let coupon= "sell200"

button.addEventListener("click",()=>{
    if(discountName.value===coupon){
        isCoupon=true
       discount.textContent= (Number(tPrice.textContent)*(20))/100
       total.textContent=Number(tPrice.textContent)-Number(discount.textContent)
    }
    else{
         isCoupon=false
       discount.textContent= 0
       total.textContent=Number(tPrice.textContent)-Number(discount.textContent)
    }
})