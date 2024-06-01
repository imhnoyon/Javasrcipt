
let friends = ['Rahim', 'Karim', 'Abdul', 'Sadad', 'HeroAlom'];
let biggestName = friends[0];

for (let i = 0; i < friends.length; i++) {
    const elements = friends[i];


    if (biggestName.length < elements.length) {
        biggestName = elements;
    }
}

console.log("Biggest Name: ",biggestName);