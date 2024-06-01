
// let allBox=document.getElementsByClassName("box");
// // console.log(allBox);

// for(let i=0;i<allBox.length;i++){
//     let elements=allBox[i];
    

//     if(elements.innerText=="Box-5"){
//         elements.style.backgroundColor="red";
//     }
//     else{
//         elements.style.backgroundColor= "green";
//     }
// }


//  add event onclick start


//  const handleSearch=(event)=>{
//     // console.log('Hello World');
//     const inputValue=document.getElementById("Search-box").value;
//     const container=document.getElementById("comment-container");
//     const p=document.createElement("p");
//     p.classList.add("child");
//     p.innerText=inputValue;

//     container.append(p);
//     document.getElementById("Search-box").value="";

//     const allcomment=document.getElementsByClassName("child");

//     for(const element of allcomment){
//         element.addEventListener("click",(e)=>
//         {
//            e.target.parentNode.removeChild(element);
//         });
//     }
    
//  }



// api start


fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data =>{
   // console.log(data);
   displayData(data);
})
.catch(err =>{
   console.log(err);
});


const displayData=(userData =>{
 const container=document.getElementById("Section_container");
   userData.forEach(pd=>{
      const div=document.createElement("div");
      div.classList.add("user");

       div.innerHTML= `
        <h4>Title</h4>
        <div>description</div>
       
       `
       container.appendChild(div);

   })
})