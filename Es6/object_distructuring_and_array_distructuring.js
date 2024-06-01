// object distructuting
const person={
    Name: 'Mahedi Hasan Noyon',
    ages:22,
    college:'Ashek Mahmud college',
    friends:['korim','Rahim','jabbar'],
}


console.log(person.Name,person.ages,person.college,person.friends);
const {Name,ages,college,friends}=person;
console.log(Name);

// array distructuring

const array=['Noyon',22,'Student'];


const [name,age,degination]=array;

console.log(degination);