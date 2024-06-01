const products=[
    {id:1,phone:'Redmi',price:50000,color:'black'},
    {id:2,phone:'xiaomi',price:50000,color:'red'},
    {id:3,phone:'samsung',price:50000,color:'gray'},
    {id:4,phone:'iphone',price:50000,color:'black'},
]


const result=products.forEach(product=>
{
    console.log(product.id);
    console.log(product.phone);
    console.log(product.price);
    console.log(product.color);
});