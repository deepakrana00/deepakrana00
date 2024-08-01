let string = "";
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        try{
            if(e.target.innerHTML == '='){
                string = eval(string);
                document.querySelector('input').value = string;
                storeValue()
            }else if(e.target.innerHTML == 'C'){
           string = ""
           document.querySelector('input').value = string
            }
            
            else{
                console.log(e.target);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
                
            }
        }catch(error){
            console.error("An error occurred:" , error.message);
        }
       
      
    });
});
function storeValue() {
   localStorage.setItem('calculatorResult', string);
  }
  // When your page loads (e.g., in your main script)
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the stored value from local storage
    const storedResult = localStorage.getItem('calculatorResult');
  
    // If there's a stored result, update your calculator display
    if (storedResult) {
      document.querySelector('input').value = storedResult;
    }
  });
  
  