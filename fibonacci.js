function fibonacci(n){
    if(n<0) return "Invalid: negative number";
    else if (n==0) return 0;
    else if (n==1) return 1;
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

console.log("")
const prompt = require("prompt-sync")();
const n = prompt("Insert a positive number: ");
console.log("F(%d) = %d\n",n,fibonacci(n));