// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object.

const names = `["spongeboob","patrick","squidward","sandy"]`;
const person = {
        "name": "spongeboob",
        "age" : 30,
        "isEmployeed" : true,
        "hoobies" : ["jellyfishing", "karate", "cooking"]
};

const jsonString = JSON.stringify(person);

// console.log(jsonString);
// console.log(person);

const parseData = JSON.parse(names);
console.log(parseData);
