function fun(arr, num) {
    if (!Array.isArray(arr)) {
        console.log("Invalid Input");
        return;
    }

    let total_earn = 0;
    let parcent, value;
    let size = arr.length;

    for (let i = 0; i < size; i++) {
        const element = arr[i];
        if (element >= 3000) {
            parcent = (20 / 100) * element;
            value = element - parcent;
            total_earn += value;
        } else {
            total_earn += element;
        }
    }

    if ((total_earn - num) >= 0) {
        console.log(total_earn - num);
    } else {
        console.log("Earn More");
    }
}

let numbers = [1000, 2000, 3000];
let num = 5400;

fun(numbers, num);
