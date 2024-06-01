

const { count } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter Your Number: ', (input) => {
    // console.log(`Your Name is : ${input}`);

    if(input >=0 && input < 33)
        {
            console.log(`Failed`);
        }

    else if(input >=33 && input<40){
        console.log(`D-grade`)
    }
    else if(input >=40 && input<50){
        console.log(`C-grade`)
    }
    else if(input >=50 && input<60){
        console.log(`B-grade`)
    }
    else if(input >=60 && input<70){
        console.log(`A-`)
    }
    else if(input >=70 && input<80){
        console.log(`A-grade`)
    }
    else if(input >=80 && input<100){
        console.log(`A+`)
    }
    rl.close();
});


