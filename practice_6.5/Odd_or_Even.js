
const { count } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your number: ', (input) => {
   
 if(input%2==0){
    console.log("Even Number");
 }
 else{
    console.log("Odd Number.");

 };
 rl.close();
});
