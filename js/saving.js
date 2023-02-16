/**
 *      SAVEING BUTTON
*/
document.getElementById('btn-save').addEventListener('click', function(){

    const totalIncome = getInputValueElementById('income');
    if(totalIncome === false){
        return;
    }
    
    const totalBalance = document.getElementById('balance').innerText;
    const totalBalanceParseInt =  parseInt(totalBalance)
    // console.log(totalBalanceParseInt)
    
    const totalBalanceSave = document.getElementById('save').value;
    // console.log(typeof totalBalanceSave)

    const totalBalanceSaveParseInt =  parseInt(totalBalanceSave);
    // console.log( totalBalanceSaveParseInt)

    const saving = totalIncome *  totalBalanceSaveParseInt / 100 ;
    setElementValueById('saving-amount', saving);
    // console.log(saving);
    
    const saveAmountElement = document.getElementById('saving-amount').innerText;
    const saveAmountParseInt = parseInt(saveAmountElement);

    // // console.log(saveAmountParseInt)
    const remainingBalance = totalBalanceParseInt - saveAmountParseInt;
    
    setElementValueById('remaining-balance', remainingBalance);

    // const settotal = 
    // console.log(settotal)
})




/// saveing ar kaj gula korte partece nah








// const savingAmount = document.getElementById('save').innerText;
// const savingAmountS

// const balance = totalIncome - totalBalanceParseInt;
// console.log(balance)
// const savE = 