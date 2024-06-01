const products=[
    {id:1,phone:'Redmi',price:50000,color:'black'},
    {id:2,phone:'xiaomi',price:50000,color:'red'},
    {id:3,phone:'samsung',price:50000,color:'gray'},
    {id:4,phone:'iphone',price:50000,color:'black'},
]

const result=products.map(pd=>pd.id *2)
console.log(result)