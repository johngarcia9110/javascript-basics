//test challenge

/*

Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. 
You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it or not.
You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

*/

var phoneCost = 399.99;
var accCost = 49.99;

var ptax = phoneCost * 0.09;
var atax = accCost * 0.09;
var threshold = 450;
var bankBal = prompt("How Much Money Do You Have In The Bank?", 0);

var totalPhoneCost = phoneCost + ptax;
var totalAccCost = accCost + atax;

var phonesPurchased = 0;
var accPurchased = 0;



function purchasePhone(){
    
    if(bankBal > totalPhoneCost){
        
        bankBal -=  totalPhoneCost;
        console.log("You purchased a phone! Your bank balanace is: $" + bankBal.toFixed(2));
        phonesPurchased++;
        
    }else{
        console.log("You don't have enough for this phone.");
    }
    
    if( totalAccCost + totalPhoneCost > threshold && bankBal > 0 && phonesPurchased > 0){
        
        bankBal -= totalAccCost;
        console.log("You also got an accessory this time! Your bank balance is: $" + bankBal.toFixed(2) );
        accPurchased++;
        
    }else{
        
        console.log("You can't afford an accessory this time.");
        bankBal = bankBal;
        
    }
    
}

 purchasePhone();

while(bankBal > totalPhoneCost + totalAccCost ){
    
    purchasePhone();
    
}

console.log("Total Phones Purchased: " + phonesPurchased);
console.log("Total Accessories Purchased: " + accPurchased);
