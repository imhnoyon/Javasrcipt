
const { count } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter leap Years: ', (input) => {
   


if(input % 4==0){
    console.log("It is a leap Year.")
}
else if(input % 400==0){
    console.log("It is a leap year.")
}
else{
    console.log("It's not a leap year.")
}

rl.close();
});