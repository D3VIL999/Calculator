let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
    document.querySelector('.display-pre').innerHTML='';
    calculation += value;

// Display the calculation on the page
// instead of console.log
    displayCalculation();
    
    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.display-prev')
      .innerHTML = calculation;
}
if (calculation.length >=1 ){
    document.querySelector('.display-pre').innerHTML='';

}else{
    document.querySelector('.display-pre').innerHTML='0'; } 


function clearone(){
    if(calculation.length!==1){
    calculation=localStorage.getItem('calculation')
    calculation =calculation.slice(0, -1);
    displayCalculation();
    
    localStorage.setItem('calculation', calculation);
    }else{
       
        calculation='';
        displayCalculation(); 
        localStorage.setItem('calculation', calculation);
        document.querySelector('.display-pre').innerHTML='0';
        
    }
}    

let test='avishka';  
test =test.slice(0, -1);
console.log(test)
