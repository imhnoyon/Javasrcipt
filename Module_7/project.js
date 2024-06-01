let count=0;
const allProduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            displayProduct(data);
        });

};

const displayProduct = (Product) => {

    const productContainer = document.getElementById("product-container");

    Product.forEach(product => {
        console.log(product);
        const div = document.createElement("div");
         div.classList.add("card");
        div.innerHTML = `
       
        <img class="card_img" src=${product.image} alt="">
         <h5> ${product.title.slice(0,50)}</h5>
         <h5>Price: ${product.price} Taka</h5>
         <p>${product.description
            .slice(0,50)}</p>
         <button onclick="description('${product.id}')">Details</button>
         <button onclick="AddToCart('${product.title.slice(0,10)}','${product.price}')">AddToCard</button>
       
      `
        productContainer.appendChild(div);
    });
};


  const AddToCart=(title,price)=>{
    
    count +=1;
    document.getElementById("counts").innerText=count;

    const cartmaincontainer=document.getElementById("cart_main_container");
   

    const div=document.createElement("div");
    div.classList.add("titlePrice");

    div.innerHTML=`
    <p>${title}</p>
    <h5 class="price">${price}</h5>
    `
    cartmaincontainer.appendChild(div);
    UpdatePrice();
  };

 const UpdatePrice=()=>{
        const allprice=document.getElementsByClassName("price");
        let count=0;

        for(const element of allprice){
            count=count+parseFloat(element.innerText);

        }
        document.getElementById("total").innerText=count.toFixed(2);

 };



 const description =(id)=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
 }
allProduct();