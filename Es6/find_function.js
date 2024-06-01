
const products=[
    {id:1,phone:'Redmi',price:50000,color:'Black'},
    {id:2,phone:'xiaomi',price:50000,color:'red'},
    {id:3,phone:'samsung',price:50000,color:'gray'},
    {id:4,phone:'iphone',price:50000,color:'green'},
]


// for(let i=0;i<products.length;i++){
//     const elements=products[i]

//     if(elements.id==2){
//         console.log(elements);
//     }
// }

// find function

const element=products.find(pd=>pd.id==2);
console.log(element);