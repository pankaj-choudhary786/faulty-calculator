// method 1 :

function faultycalculator(a,b,op) {
    let correct ;
    if(op==='+') correct=a+b;
    else if(op==='-') correct=a-b;
    else if (op==='*') correct=a*b;
    else if (op==='/') correct=a/b;

    if(Math.random()<=0.1) {
        console.log("it is faulty this time")
        return Math.floor(Math.random()*100+1);
    }
    return correct ;
}

console.log("The operation is : ",faultycalculator(2,3,'+'))
console.log("The operation is : ",faultycalculator(2,3,'-'))
console.log("The operation is : ",faultycalculator(2,3,'*'))
console.log("The operation is : ",faultycalculator(2,3,'/'))


//  method 2:

// let random = Math.random()
// console.log(random)
// let a = prompt("Enter first number")
// let c = prompt("Enter operation")
// let b = prompt("Enter second number")

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }



// if (random > 0.1) {
//     // Perform correct calculation
//     console.log(`The result is ${a} ${c} ${b}`)
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
// }

// else {
//     // Perform wrong calculation
//     c = obj[c]
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

// }