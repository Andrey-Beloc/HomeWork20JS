'use srict'

//Задания №1

function fibonachi(n){      
    let f1 = 0;
    let f2 = 1;
    for(let i = 3; i <= n; i++){
        let f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }
    return f2;
};
console.log(fibonachi(4));

//Задания №2

function division(a){
    let num; 
    for(num = 0 ; a >= 50 ; num++){          
        a = a / 2;    
    }    
    return num;      
            
};
console.log(division(1000));




 


