

/**
 *      CALCULATER BUTTON
*/
document.getElementById('calculate-btn').addEventListener('click', function(){

    const totalIncome = getInputValueElementById('income');
    if(totalIncome === false){
        return;
    }
    // console.log(totalIncome)

    const foodAmount = getInputValueElementById('food');
    const reatAmount = getInputValueElementById('rent');
    const clothesAmount = getInputValueElementById('clothes')

    const totalSum = foodAmount + reatAmount + clothesAmount;

    if(totalIncome < totalSum){
        return alert('sorry your expenses cannot exceed your income');
    }

    setElementValueById('total-expense', totalSum);

    // if( totalIncome < totalSum){
    //     alert('sorry your expenses cannot exceed your income');
    //     return;
    // }
    
    const totalExpense = document.getElementById('total-expense').innerText;
    const totalExpenseParse =  parseInt(totalExpense)
    
    const balance = totalIncome - totalExpenseParse;
    setElementValueById('balance', balance)
    
})



