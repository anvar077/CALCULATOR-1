
let values = 0;
let option = '';
let change = 0;

function clickButton(val){
    values = document.getElementById('screen').value+=val;
    console.log("click",values);
    
}

let num1 = 0;
function check(number){
    num1 = parseInt(number);
    // console.log(typeof(num1));
    if (num1 < 1 ){
        document.getElementById('screen').value="Check the number";
        setTimeout(() => {
            document.getElementById('screen').value=change;
        }, 500);  
    }else if (change.charAt(0)==='.') {          //  || values.charAt(0)==='.' 
        document.getElementById('screen').value="use first a number ";
        setTimeout(() => {
            document.getElementById('screen').value=change;
        }, 500);
    }

    num1 = 0;
}


function clearAll(){
    document.getElementById('screen').value="";
    dotSymbol = 0;
}

function selector (operator){
    // console.log(b);
    values = document.getElementById('screen').value;
    option = operator;
    document.getElementById('screen').value='';
    change = values;
    values= 0;
    check(change);
    dotSymbol = 0;
} 

let secondValues = 0;
function secondStringValue (){
    secondValues = document.getElementById('screen').value;
    // console.log(typeof(secondValues));
    check(secondValues);
}
let result = 0;
let num = 0;
function equalButton(){
    change = parseFloat(change);
    // console.log("values",values);
    num = document.getElementById('screen').value;
    values = num;
    num = parseFloat(num);

    if (option == '+'){
        result = num+change;
        document.getElementById('screen').value=result;       
    }else if (option=="-"){
        result = change-num;
        document.getElementById('screen').value=result;   
    }else if (option == '*'){
        result = num*change;
        document.getElementById('screen').value=result; 
    }else if (option == '/'){
        result = change/num;
        document.getElementById('screen').value=result; 
    }
    
    check (num);

}


let dotSymbol = 0;
function dot (){
    
    dotSymbol+=1;
    if (dotSymbol > 1){
        document.getElementById("screen").value="only one DOT";

        dotSymbol = 0;

        setTimeout (() => {
            document.getElementById("screen").value ='';
        },500)
        // values=values.slice(0,-1);
    }
   
}

function back() {
  
    let backnumber = values.slice(0,-1);
    document.getElementById('screen').value = backnumber;
    values = backnumber;
}
