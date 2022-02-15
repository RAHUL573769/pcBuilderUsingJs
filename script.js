document.getElementById('sixteenGB').addEventListener('click',function(){
    

    updatePrice('memory-cost',569);

})
document.getElementById('eightGB').addEventListener('click',function(){
    

    updatePrice('memory-cost',0);

})



document.getElementById('ssd2').addEventListener('click',function(){
    updatePrice('storage-cost',500);
})
document.getElementById('ssd3').addEventListener('click',function(){
    updatePrice('storage-cost',1500);
})


// function onClick(clickId,updateId,price){
//     document.getElementById(clickId).addEventListener('click',function(){
//         updatePrice(updateId,price);
// })

// onClick('paid-delivery','delivery-cost',1500);

function updatePrice(itemId,price){

    
        const memoryCost=document.getElementById(itemId);
        memoryCost.innerText=price;
    
        const bestPrice=document.getElementById("best-price").innerText;
        const memoryPrice=document.getElementById("memory-cost").innerText;
        const storagePrice=document.getElementById("storage-cost").innerText;
        const deliveryPrice=document.getElementById("delivery-cost").innerText;
    
        const totalPrice=parseFloat(bestPrice)+parseFloat(memoryPrice)+parseFloat(storagePrice)+parseFloat(deliveryPrice);
        const total=document.getElementById('total-price');
        total.innerText=totalPrice;
    
    


}

const fakeCode="pHero";
document.getElementById("apply-btn").addEventListener('click',function(){

  const code= document.getElementById('promo-input').value;
   console.log(code); 
   if(code===fakeCode){
console.log("correct");
const total=document.getElementById('total-price');
let  totalPrice=parseFloat(total.innerText);
const discount=(totalPrice*20)/100;

totalPrice=(totalPrice-discount);
total.innerText=totalPrice;


   }else{

   }
})