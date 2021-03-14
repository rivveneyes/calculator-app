const orderlist= document.querySelector(".input-buttons");
const equals = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const input=document.querySelector(".cal-display");

let mathSymbol= "";
let firstNumber = null;
let secondNumber= null;
orderlist.addEventListener("click", (e)=>{
    let clickedBox=e.target;
    if(firstNumber==null){
    if(clickedBox.className=="number"& mathSymbol==""){
        input.textContent+=clickedBox.textContent;
        return
    }
    if( clickedBox.className=="symbol"&& input!==""){
        
        mathSymbol=clickedBox.textContent;
        console.log(mathSymbol)
        firstNumber=parseFloat(input.textContent);

        return
        } 
    
    }
    
    if(secondNumber==null){
        switch(clickedBox.className){
     case "symbol":
        mathSymbol=clickedBox.textContent;
        console.log(mathSymbol);
     break
     case"number":
       input.textContent=clickedBox.textContent;
       secondNumber=parseFloat(clickedBox.textContent);
       break
     }
    }
    else if( secondNumber!==null){
        switch(clickedBox.className){
        case "number":
            input.textContent+=clickedBox.textContent;
            secondNumber=parseFloat(input.textContent);
            break
        case "symbol":

            switch (mathSymbol){
            case "+":
               input.textContent=firstNumber+secondNumber;
               firstNumber=firstNumber+secondNumber;       
               secondNumber=null;        
                break
            case "-":
                input.textContent=firstNumber-secondNumber;
               firstNumber=firstNumber-secondNumber;       
               secondNumber=null;   
               break
               case "X":
               input.textContent=firstNumber*secondNumber;
               firstNumber=firstNumber*secondNumber;       
               secondNumber=null;        
                break
            case "÷":
                input.textContent=firstNumber/secondNumber;
               firstNumber=firstNumber/secondNumber;       
               secondNumber=null;   
               break
        }
        
        mathSymbol= clickedBox.textContent ;}
    }
})

equals.addEventListener("click", ()=>{
    if(secondNumber!==null&& mathSymbol!=="" ){  
        debugger
        switch (mathSymbol){
            case "+":
               input.textContent=firstNumber+secondNumber;
               firstNumber=firstNumber+secondNumber;       
               secondNumber=null;        
                break
            case "-":
                input.textContent=firstNumber-secondNumber;
               firstNumber=firstNumber-secondNumber;       
               secondNumber=null;   
               break
               case "X":
               input.textContent=firstNumber*secondNumber;
               firstNumber=firstNumber*secondNumber;       
               secondNumber=null;        
                break
            case "÷":
                input.textContent=firstNumber/secondNumber;
               firstNumber=firstNumber/secondNumber;       
               secondNumber=null;   
               break
        }
    }
})

clearButton.addEventListener('click', ()=>{
    firstNumber=null;
    secondNumber=null;
    mathSymbol="";
    input.textContent=""
    })