let count = 0;
const searchBox = () => {
  const searchButton = document.getElementById("search_box");
  const div = document.createElement("div");
  div.classList.add("comment");
  div.innerHTML = `
    <input id="input_value" type="search" class="input_field " placeholder="Search here..">
    <button class="search_section" type="button" onclick="NameSearch(document.getElementById('input_value').value)">Search</button>
  
    `

  searchButton.appendChild(div);
};






const AllPlayer = () => {
  fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=')
    .then(res => res.json())
    .then(data => {
      displayPlayer(data.player);
    });
};

AllPlayer();


const NameSearch = (name) => {
  console.log(name);
  fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${name}`)
    .then(res => res.json())
    .then(data => {
      displayPlayer(data.player);
    });
};



const displayPlayer = (players) => {
  console.log(players);
  const productSection = document.getElementById("product_section");

  productSection.innerHTML = '';
  players.forEach(player => {

    const div = document.createElement("div");

    div.classList.add("card");
    div.innerHTML = `
    <img class="img_size" src=${player.strThumb} alt="">
    <h5>Born_Date: ${player.dateBorn}</h5>
    <h5>Gender: ${player.strGender}</h5>
    <h5>Country: ${player.strNationality}</h5>
    <h5>Game_name: ${player.strSport}</h5>
    <h5>BirthLocation: ${player?.strBirthLocation?.slice(0,10)}</h5>
    <p>Description: ${player?.strDescriptionEN?.slice(0, 20)}</p>
    <button class="btns" onclick="description_display('${player.idPlayer}')">Details</button>
    <button class="btns" onclick="AddToCart('${player.idPlayer}')">Add to Cart</button>
    
    `
    productSection.appendChild(div);
  });



};


const AddToCart = (id) => {
  fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      CartDisplay(data.players[0]);
    });

};




const CartDisplay = (player) => {
  console.log(player);

  const cardMainContainer = document.getElementById("card_main_container");
  const div = document.createElement("div");
  if (count <= 10) {

    count += 1;
    document.getElementById("counts").innerHTML = count;
    div.innerHTML = `
          <img class="img_size" src=${player.strThumb} alt="">
          <h5>Born_Date: ${player.dateBorn}</h5>
          <h5>Gender: ${player.strGender}</h5>
          <h5>Country: ${player.strNationality}</h5>
          <h5>Game_name: ${player.strSport}</h5>
          <h5>BirthLocation: ${player?.strBirthLocation?.slice(0,10)}</h5>
          <p>Description: ${player?.strDescriptionEN?.slice(0, 20)}</p>
          <p>................xxxxxxxx................</p>
          <hr>
          `
    cardMainContainer.appendChild(div);
  }
  else {
    alert("No more space.Cart is full..");
  }


};



const description_display= (id) => {
  console.log("hello");
  fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      modals(data.players[0]);
    });
};

 
 const modals=(player)=>{
    const modalBody=document.getElementById("modal-body");
    modalBody.innerHTML='';
     const div=document.createElement("div");
     div.classList.add("modal_section");

     div.innerHTML=`
     <img class="img_size" src=${player.strThumb} alt="">
          <h5>Born_Date: ${player.dateBorn}</h5>
          <h5>Gender: ${player.strGender}</h5>
          <h5>Country: ${player.strNationality}</h5>
          <h5>Game_name: ${player.strSport}</h5>
      
          <p>Description: ${player?.strDescriptionEN?.slice(0, 20)}</p>
     
     `
     modalBody.appendChild(div);
     var modal1 = new bootstrap.Modal(document.getElementById('gfg'));
     modal1.toggle();
 };



searchBox();







