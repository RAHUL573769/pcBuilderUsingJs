document.getElementById('sixteenGB').addEventListener('click',function(){
    

    updatePrice('memory-cost',500);

})
document.getElementById('eightGB').addEventListener('click',function(){
    

    updatePrice('memory-cost',200);

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