// Example #1

// userChoice = confirm(`Would like to try?`); // true/false

// if(userChoice){

//     countOfTries = 3;
//     userTry = 1;

//     userEmail = prompt(`Try #${userTry}/${countOfTries}. Enter email`);

//     while(
//         userTry<countOfTries &&
//         (userEmail === null 
//         || userEmail.replaceAll(` `,``) === ``
//         || userEmail.indexOf(`@`) === -1
//         || userEmail.startsWith(`@`)
//         || userEmail.endsWith(`@`)
//         || userEmail.length<5)
//     ){
//         errorMsg = ``;
//         userTry++;

//         if(userEmail === null || userEmail.replaceAll(` `,``) === ``){
//             errorMsg = `Email shouldn't be empty. `;
//         } else{
//             userEmail = userEmail.replaceAll(` `,``).toLowerCase();

//             if(!userEmail.includes(`@`)){
//                 errorMsg += `Email should contains @. `;
//             }
            
//             if(userEmail.startsWith(`@`)){
//                 errorMsg += `Email shouldn't starts with @. `
//             }
            
//             if(userEmail.endsWith(`@`)){
//                 errorMsg += `Email shouldn't ends with @. `
//             }
            
//             if(userEmail.length<5){
//                 errorMsg += `Email should be longer then 5. `;
//             }
//         }

//         userEmail = prompt(`Try #${userTry}/${countOfTries}. ${errorMsg}Please, enter email again.`);
//     }

//     if(userTry === countOfTries){
//         console.log(`Count of tries === 3 :(`);
//     } else{
//         console.log(`Email: ${userEmail}`);
//     }
// }

// Example #2.0

// word = `exam9ple`;
// containsNumber = false;
// findNumber = false;

// if(word.includes(0)){
//     containsNumber = true;
//     findNumber = 0;
// } else if(word.includes(5)){
//     containsNumber = true;
//     findNumber = 5;
// } else if(word.includes(9)){
//     containsNumber = true;
//     findNumber = 9;
// }

// if(containsNumber === true){
//     console.log(`Word ${word} contains number ${findNumber}.`);
// } else{
//     console.log(`Word ${word} doesn't contains number.`);
// }

// Example #2.1
// word = `examp0le`;

// letterIndex = 0;
// containsNumber = false;
// findNumber = false;

// while(letterIndex<word.length && containsNumber === false){
//     currentLetter = word[letterIndex];

//     // e
//     // +e => NaN
//     // isNaN(NaN) => true

//     // 1
//     // +1 => 1
//     // isNaN(1) => false

//     if( isNaN(+currentLetter) ){
//         console.log(currentLetter);
//     } else{
//         console.log(`${currentLetter} is number`);
//         containsNumber = true;
//         findNumber = currentLetter;
//     }

//     letterIndex++;
// }

// if(containsNumber === true){
//     console.log(`Word ${word} contains number ${findNumber}.`);
// } else{
//     console.log(`Word ${word} doesn't contains number.`);
// }


// Example #3

// firstWord = prompt(`Enter word #1`);

// while(firstWord === null || !firstWord.trim(``)){
//     firstWord = prompt(`Enter word #1`);
// }

// secondWord = prompt(`Enter word #2`);

// while(secondWord === null || secondWord.trim(``) === ``){
//     secondWord = prompt(`Enter word #2`);
// }

// thirdWord = prompt(`Enter word #3`);

// while(thirdWord === null || thirdWord.trim(``) === ``){
//     thirdWord = prompt(`Enter word #3`);
// }

// console.log(`${firstWord} ${secondWord} ${thirdWord}!`);

// countOfWords = 3;
// wordIndex = 1;

// finalString = ``;
// lastStringSymbol = `!!!`;

// while(wordIndex<=countOfWords){

//     word = prompt(`Enter word #${wordIndex}`);

//     while(word === null || word.trim(``) === ``){
//         word = prompt(`Enter word #${wordIndex}`);
//     }

//     // finalString += word + ` `; // Iloveyou

//     finalString += word;

//     if(wordIndex === countOfWords){
//         finalString += lastStringSymbol; // I love you!!!
//     } else{
//         finalString += ` `; // I love 
//     }

//     wordIndex++;
// }

// console.log(finalString);


// do...while statement

// userName = prompt(`Enter name`);

// while(userName === null || userName.trim() === ``){
//     userName = prompt(`Enter name`);
// }

// console.log(userName);

// do{
//     userName = prompt(`Enter name`);
// } while(userName === null || userName.trim() === ``)

// console.log(userName);

// x = 0;

// 1
// 2
// 3
// 4
// 5

// xInner = 1;

// while(xInner<=x){
//     console.log(xInner);
//     xInner++;
// }

// do{
//     console.log(xInner);
//     xInner++;
// } while(xInner<=x)

// for statement

// x = 5;

// for(innerX=1, specialSymbol=`!`; innerX<=x; innerX++){
//     console.log(innerX + specialSymbol);
// }

// innerX=1;
// specialSymbol=`!`;

// for(; innerX<=x || innerX/7 !== 1; innerX++, specialSymbol += `!`){
//     console.log(innerX + specialSymbol);
// }

// Example 2 for

x = 1;
xFinal = 5;

y = 10;
yFinal = 3;


for(; x<=xFinal || y>=yFinal; x++, y--){
    console.log(`x = ${x}; y = ${y}`);
}

// summ, factorial example

// switch

// prime numbers

// break
// continue

// loop in loop

// break/continue to point

// ternar

// Array

// Array methods:
//     push
//     unshift
//     pop
//     shift
//     join
//     reverse
//     slice
//     splice
//     concat