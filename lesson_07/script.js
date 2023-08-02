// loop in loop

// x = 5;

// for(i=1; i<=x; i++){
//     console.log(i);
//     // i=5

//     for(j=1; j<=i; j++){
//         console.log(`   ${j}`); // j = 1,2,3,4,5
//     }
// }

// break/continue to point

// x = 5;

// toMyLovelyPoint: for(i=1; i<=x; i++){
//     console.log(i);
//     // i=5

//     for(j=1; j<=i; j++){
//         console.log(`   ${j}`); // j = 1,2,3,4,5
//         if(j===3) break toMyLovelyPoint;
//     }
// }

// continue

// x = 5;

// toPoint: for(i=1; i<=x; i++){
//     console.log(i);
//     // i=5

//     for(j=1; j<=i; j++){
//         if(j===3) continue toPoint;
//         console.log(`   ${j}`); // j = 1,2,3,4,5
//     }

//     console.log(`----`);
// }

// Array

// animals = [`cat`, `dog`];

// console.log(animals);
// console.log(animals.length);

// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[100]);

// animals[100] = `tiger`;
// console.log(animals);

// animals[0] = `Oleg`;
// console.log(animals);

// animals[1] = ``;
// animals[1] = undefined;
// console.log(animals);

// animals.length = 5;
// console.log(animals);

// animals = [`cat`, `dog`, `lion`]; // 3
// console.log(animals);

// animals[3] = `tiger`; // 4
// console.log(animals);

// animals[animals.length] = `parrot`;
// console.log(animals);

// animals = [`cat`, `dog`, `lion`, `tiger`, `parrot`];
// console.log(animals);

// for(i=animals.length-1; i>=0; i--){
//     animals[i+1] = animals[i];
// }
// console.log(animals);

// animals[0] = `Oleg`;
// console.log(animals);

// animals[3] = animals[2];
// animals[2] = animals[1];
// animals[1] = animals[0];
// console.log(animals);

// animals[0] = `Oleg`;
// console.log(animals);

// animals = [`cat`, `dog`, `lion`, `tiger`, `parrot`];
// console.log(animals);

// animals.length = animals.length-1;
// console.log(animals);

// animals = [`cat`, `dog`, `lion`, `tiger`, `parrot`];
// console.log(animals);

// for(i=1; i<animals.length; i++){
//     console.log(i);

//     animals[i-1] = animals[i]; // [0] = [1]
// }

// console.log(animals);

// animals.length = animals.length-1;
// console.log(animals);

// animals = [`cat`, `dog`, `lion`, `tiger`, `parrot`];
// console.log(animals);

// for(i=3; i<animals.length; i++){
//     animals[i-2] = animals[i]; // [0] = [1]
// }

// console.log(animals);

// animals.length = animals.length-2;
// console.log(animals);


// Array methods:
//     push

// animals = [`cat`, `dog`, `lion`];
// animals.push(`tiger`, `parrot`, null, true);

// console.log(animals);

//     unshift

// animals = [`cat`, `dog`, `lion`];
// animals.unshift(`tiger`, `parrot`, null, true);

// console.log(animals);

//     pop

// animals = [`cat`, `dog`, `lion`];
// animals.pop();

// console.log(animals);

//     shift

// animals = [`cat`, `dog`, `lion`];
// animals.shift();

// console.log(animals);

//     join

// animals = [12,23,34,45,true,'hello'];
// console.log(animals);

// animalsAsString = animals.join(`__&&__`);

// console.log(animals);
// console.log(animalsAsString);

// animals = [`cat`, `dog`, `lion`, `tiger`];

// animalsList = animals.join(`</li><li>`);
// // cat</li><li>dog</li><li>lion

// animalsTable = animals.join(`</td><td>`);

// document.write(`<ul>
//     <li>${animalsList}</li>
// </ul>`);

// document.write(`<table>
//     <tr>
//         <td>${animalsTable}</td>
//     </tr>
// </table>`)

//     reverse
// animals = [`cat`, `dog`, `lion`, `tiger`, `parrot`];
// console.log(animals);

// animals.reverse();
// console.log(animals);

// animals.push(`Oleg`);

// animals.shift();
// console.log(animals);

//     slice

// userName = "taras sheva";

// firstName = userName.slice(0,5); // taras
// secondName = userName.slice(6); // sheva

// console.log(firstName);
// console.log(secondName);

// animals = [`cat`, `dog`, `lion`, `tiger`, `parrot`];

// firstThreeAnimals = animals.slice(0,3); // [`cat`, `dog`, `lion`];
// lionTigerArray = animals.slice(2,4); // [`lion`, `tiger`];
// twoLastElement = animals.slice(-2); // [`tiger`, `parrot`]

// console.log(animals);
// console.log(firstThreeAnimals);
// console.log(lionTigerArray);
// console.log(twoLastElement);

// animals = [`cat`, `dog`, `lion`, `tiger`, `parrot`];
// animalsCopy = animals;

// console.log(animals);
// console.log(animalsCopy);

// animalsCopy[0] = `Oleg`;

// console.log(animals);
// console.log(animalsCopy);

// animalsCopy = [];

// for(i=0; i<animals.length; i++){
//     animalsCopy.push(animals[i]);
// }

// animalsCopy[0] = `Oleg`;

// console.log(animals);
// console.log(animalsCopy);

// animalsCopy = animals.slice();

// animalsCopy[0] = `Oleg`;

// console.log(animals);
// console.log(animalsCopy);

//     splice

// animals = [`cat`, `dog`, `lion`, `tiger`, `parrot`];
// console.log(animals);

// firstThreeElements = animals.splice(0,3);

// console.log(animals);
// console.log(firstThreeElements);

// splice added

// animals = [`cat`, `dog`, `lion`, `tiger`, `parrot`];
// console.log(animals);

// animals.splice(1, 0, `Oleg`, `Taras`);
// // [`cat`, `Oleg`, `Taras`, `dog`, `lion`, `tiger`, `parrot`]

// console.log(animals);

// splice added 2.0

// animals = [`cat`, `dog`, `lion`, `tiger`, `parrot`];
// console.log(animals);

// animals.splice(1,2,`Oleg`, `Taras`);
// // [`cat`, `Oleg`, `Taras`, `tiger`, `parrot`]
// console.log(animals);

//     concat
// firstArr = [10,20,30];
// secondArr = [`cat`,`dog`,`lion`];
// thirdArr = [`Oleg`, `Taras`];

// finalArr = thirdArr.concat(secondArr, [true, false], firstArr);
// // [10,20,30,`cat`,`dog`,`lion`,`Oleg`, `Taras`];

// console.log(firstArr);
// console.log(secondArr);
// console.log(thirdArr);

// console.log(finalArr);

// min/max element in array by value/index
// change position of min/max

// arr = [10, -2, 16, -28, 100, 14];
// console.log(arr);

// min = max = arr[0]; // 10

// for(i=1; i<arr.length; i++){
//     currentElement = arr[i];
    
//     if(currentElement<min){
//         min = currentElement;
//     }

//     if(currentElement>max){
//         max = currentElement;
//     }
// }

// console.log(`Min element is ${min}`); // -28
// console.log(`Max element is ${max}`);

// minIndex = arr.indexOf(min); // 3
// console.log(minIndex);

// maxIndex = arr.indexOf(max); // 4
// console.log(maxIndex);

// arr[minIndex] = max;
// arr[maxIndex] = min;

// console.log(arr);

// indexOf() // -1

// Math.random()

// arr = [];
// arr.length = 10;

arr = new Array(10); // []
console.log(arr);

maxRandom = 100;
minRandom = -100;

for(i=0; i<arr.length; i++){
    arr[i] = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
}

for(i=1, min = max = arr[0]; i<arr.length; i++){
    currentElement = arr[i];
    
    if(currentElement<min){
        min = currentElement;
    }

    if(currentElement>max){
        max = currentElement;
    }
}

for(i=0, sum=0; i<arr.length; i++){
    sum += arr[i];
}

console.log(arr);
console.log(`Min element is ${min}`);
console.log(`Max element is ${max}`);
console.log(`Sum of arr elements is ${sum}`);

// Copy of array

// Spread/Rest operator

// Two dimensional array

// Array.isArray()

// JSON.parse( JSON.stringify( yoursArray ) ) – to make deep copy of array