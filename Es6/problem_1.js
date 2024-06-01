
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = (array) => {
    let EvenNumber = [];
    let OddNumber = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element % 2 == 0) {
            EvenNumber.push(element);
        }
        else {
            OddNumber.push(element);
        }
    }
     console.log("Even Numbers Arrays:")
    console.log(EvenNumber);
    console.log("\n");
    console.log("Odd Numbers Arrays:")
    console.log(OddNumber);
};


result(numbers);