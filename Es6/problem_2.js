
const friends = ['Noyon', 'Mahedi', 'Rakib', 'Sojib', 'Hasan', 'Mahedi Hasan Noyon'];

const func = (array) => {
   let biggestName=array[0];
   for(let i=0;i<array.length;i++){
     const element=array[i];

      if (element.length > biggestName.length)
        {
            biggestName=element;
        }
   }

   console.log(biggestName);
   console.log("Display");
};


func(friends);

alert()