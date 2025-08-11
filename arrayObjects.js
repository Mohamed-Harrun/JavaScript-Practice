const fruits = [
                {name:"apple", color:"red", calories:95},
                {name:"orange", color:"orange", calories:45},
                {name:"banana", color:"yellow", calories:105},
                {name:"coconut", color:"white", calories:159},
                {name:"pineapple", color:"yello", calories:37}
]

//console.log(fruits[0].name) we can also use array methods here
//fruits.forEach(fruit => console.log(fruit.name));
const fuitsName = fruits.map((fruit) => fruit.name)
console.log(fuitsName)