
function getInputValueElementById (elementId){

    const inputElementValue = document.getElementById(elementId);
    const inputValueString = inputElementValue.value;
    const inputValue = parseInt( inputValueString );

    
    if(isNaN(inputValue) || inputValue < 0){
        alert('Please Provide a Number');
        // inputElementValue.value = '';
        return false;
    }
    
    return inputValue;
} 

function setElementValueById(id, value){
    const setElement = document.getElementById(id);
    setElement.innerText = value;

    
}