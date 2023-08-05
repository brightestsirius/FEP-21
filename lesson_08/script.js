// 2-10
// arrLength = Math.abs(prompt(`Enter size of array`, -1)); // 1
// while(arrLength<2 || arrLength>10){
//     arrLength = Math.abs(prompt(`Enter size of array`, -1));
// }

// do{
//     arrLength = Math.abs(prompt(`Enter size of array`, -1)); // 1
// } while(arrLength<2 || arrLength>10)

// arr = new Array();

// minRandom = -10;
// maxRandom = 10;

// for(i=1; i<=10; i++){
//     randomValue = Math.floor(Math.random() * (maxRandom - minRandom + 1) + minRandom);
//     arr.push(randomValue);
// }

// console.log(arr);

// Spread/Rest operator ...

// arr_1 = [10,20,30];
// arr_2 = arr_1.slice();

// arr_2[0] = `Stus`;

// console.log(arr_1);
// console.log(arr_2);

// arr_1 = [10,20,30];
// arr_2 = [`Taras`, ...arr_1, `Stus`]; // [10,20,30]

// arr_2[0] = `Stus`;

// console.log(arr_1);
// console.log(arr_2);

// Two dimensional array

// arr = [
//     10, 
//     [`cat`,`dog`,`lion`, [`first`,`second`,`third`, [`Oleg`, `Anna`]]], 
//     20,
//     30, 
//     [`Sheva`, `Stus`]
// ];

// console.log(arr);

// console.log(arr[2]);
// console.log(arr[1][0]);
// console.log(arr[1][3][2]);

// for(i=0; i<arr.length; i++){
//     currentElement = arr[i]; // [`cat`,`dog`,`lion`, [`first`,`second`,`third`]]

//     if(Array.isArray(currentElement)){
//         for(j=0; j<currentElement.length; j++){
//             currentElementArray = currentElement[j];
//             if(Array.isArray(currentElementArray)){
//                 for(c=0; c<currentElementArray.length; c++){
//                     console.log(currentElementArray[c]);
//                 }
//             } else{
//                 console.log(currentElementArray);
//             }
//         }
//     } else{
//         console.log(currentElement);
//     }
// }

// Array.isArray()

// numbers_1 = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,[`Sheva`, `Stus`]],
//     10
// ];

// numbers_2 = [];

// for(i=0; i<numbers_1.length; i++){
//     currentElement = numbers_1[i]; // [10,20,30]

//     if(Array.isArray(currentElement)){

//         currentElementCopy = [];
        
//         for(j=0; j<currentElement.length; j++){
//             if(Array.isArray(currentElement[j])){ // [`Sheva`, `Stus`]
//                 currentElementCopy.push([...currentElement[j]]);
//             } else{
//                 currentElementCopy.push(currentElement[j]);
//             }
//         }

//         numbers_2.push(currentElementCopy);
        
//     } else{
//         numbers_2.push(currentElement);
//     }
// }

// numbers_2[2][2][0] = `kotik`;

// console.log(numbers_1);
// console.log(numbers_2);

// JSON.parse( JSON.stringify( yoursArray ) ) – to make deep copy of array

// numbers_1 = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,[`Sheva`, `Stus`, [10,20,30]]],
//     10
// ];

// console.log(numbers_1);

// console.log(numbers_1.join());

// arrayToString = JSON.stringify(numbers_1);
// console.log(arrayToString);

// stringToArray = JSON.parse(arrayToString);
// console.log(stringToArray);

// numbers_2 = JSON.parse( JSON.stringify(numbers_1) );
// console.log(numbers_2);

// animals = [`cat`, `dog`, `lion`];
// JSON.stringify();
// JSON.parse();