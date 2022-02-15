document.getElementById('sixteenGB').addEventListener('click',function(){
    

    updatePrice('memory-cost',569);

})
document.getElementById('eightGB').addEventListener('click',function(){
    

    updatePrice('memory-cost',279);

})

document.getElementById('ssd2').addEventListener('click',function(){
    updatePrice('storage-cost',500);
})
document.getElementById('ssd3').addEventListener('click',function(){
    updatePrice('storage-cost',1500);
})
document.getElementById('paid-delivery').addEventListener('click',function(){
    updatePrice('delivery-cost',1500);
})



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