let rajesh = document.querySelector("form");
rajesh.addEventListener("submit",function(r) {
    r.preventDefault();
 let amount =parseInt( document.querySelector("#bill-amount").value );
 let tips = parseInt(document.querySelector("#bill-tips").value) ; 
 let total =document.querySelector("#bill-total"); 
 let well = document.querySelector(".wellcome") ;  

 if((amount==="") || (amount<0)|| isNaN(amount)){
  well.innerHTML="pls amount";
  well.style.color="red";
 }
else if( (tips==="") || (tips<0) || isNaN(tips)){
    well.innerHTML="pls tips";
    well.style.color="red";
}

else{
    let tip=amount*(tips/100);
    let totals= tip+amount;
    total.value=`${totals}` ;   
    well.innerHTML="thank you";
    well.style.color="green";
}

})