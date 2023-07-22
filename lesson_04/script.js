// Logical operators: &&, ||

// userEmail = prompt(`Enter email`);
// errorMsg = `Not valid email :(`;

// if(userEmail !== null){
//     userEmail = userEmail.replaceAll(` `, ``).toLowerCase();

//     if(!userEmail){
//         console.log(errorMsg);
//     } else if( !userEmail.includes(`@`) ){
//         console.log(errorMsg);
//     } else if(userEmail.startsWith(`!`)){
//         console.log(errorMsg);
//     } else if(userEmail.endsWith(`!`)){
//         console.log(errorMsg);
//     } else{
//         console.log(`Valid email: ${userEmail}!`);
//     }

//     // userEmail.indexOf(`@`) === -1
//     // userEmail.includes(`@`) === false => !userEmail.includes(`@`)
//     // userEmail === `` => !userEmail

// }

// Cancel = null => doing nothing

// `` => ``
// `stusgmail.com`
// `!stus@gmail.com`
// `stus@gmail.com!`

// &&, ||

// 🍰, 👩🏻‍💻

// want   money
// true   false   => false
// false  true    => false
// false  false   => false
// true   true    => true

// want = true;
// money = true;
// time = false

// if(want && money && time){
//     console.log(`It's yours cake!`);
// }

// students = true
// time = true;

// students    time
// true        true    => true
// false       true    => true
// true        false   => true
// false       false   => false

// if(students || time){
//     console.log(`start lesson`);
// }

// x = 0;

// // x !== 0 && x>-5 && x<15    => `ura!`

// if(x!==0 || x>-5 || x<15){ // true && true && false
//     console.log(`ura!`);
// }

// email valid if: 
    // not empty, 
    // count of symbols >5, 
    // @ exist and not in first/last place.

// userEmail = prompt(`Enter email`);

// 

// if(userEmail !== null){
//     userEmail = userEmail.replaceAll(` `, ``).toLowerCase();

//     // if(
//     //     userEmail !== `` 
//     //     && userEmail.length>5 
//     //     && userEmail.includes(`@`) 
//     //     && !userEmail.startsWith(`!`) 
//     //     && !userEmail.endsWith(`!`)
//     // ){
//     //     console.log(`Valid email: ${userEmail}`);
//     // }

//     if( 
//         userEmail === `` 
//         || userEmail.length<5 
//         || !userEmail.includes(`@`) 
//         || userEmail.startsWith(`!`) 
//         || userEmail.endsWith(`!`)
//     ){
//         console.log(`Not valid email`);
//     }
// }

// x = 21;

// (x !== 0 && x<=10) || (x>=17 && x<=20)

// if((x !== 0 && x<=10) || (x>=17 && x<=20)){
//     console.log(`valid!`);
// }

// isNaN()

// userYearsOfBirth = prompt(`Enter year of birth`); // hello, 1990.

// Cancel = null, NaN

// if(userYearsOfBirth !== null){

//     userYearsOfBirth = +userYearsOfBirth; // My year of birth: 1990. => NaN
//     if( isNaN(userYearsOfBirth) ){
//         console.log(`Not valid year of birth.`);
//     } else{
//         userAge = 2023 - userYearsOfBirth;
//         console.log(`User age is ${userAge}.`);
//     }

// }

// if( userYearsOfBirth === null || isNaN(+userYearsOfBirth) ){
//     console.log(`Not valid year of birth.`);
// } else{
//     userAge = +userYearsOfBirth;
//     currentYearLovelyKotik = new Date().getFullYear(); // 2023

//     userAge = currentYearLovelyKotik - userYearsOfBirth;
//     console.log(`User age is ${userAge}.`);
// }

// userYearsOfBirth = +prompt(`Enter year of birth`); // 0

// if(userYearsOfBirth<=0 || isNaN(userYearsOfBirth)){
//     console.log(`Not valid year of birth.`);
// }

// yearOfBirth

// Loops

// while statement

// while(condition === true){
//     // actions
// }

// x = prompt(`Enter x, that !==0 and x>-5 && x<5 && x !==null && x!==NaN`); // -7

// while(
//     x===null 
//     || parseInt(x)===0 
//     || parseInt(x)<-5 
//     || parseInt(x)>5 
//     || isNaN(parseInt(x))
// ){
//     x = prompt(`Enter x, that !==0 and x>-5 && x<5 && x !==null && x!==NaN`); 
// }

// console.log(`Final x=${x}`);

// x = prompt(`Enter smth`);

// while(x === null){
//     x = prompt(`Enter smth`);
// }

// console.log(`Final x: ${x}`);

// x = prompt(`Enter x`);

// 6%2 = 0;
// 5%2 = 1;
// 2%2 = 0;

// while( x>-5 && x<5 && x%2 === 0){
//     x = prompt(`Enter x`);
// }


userEmail = prompt(`Enter email`);

while( 
    userEmail === null 
    || userEmail.replaceAll(` `,``) === `` 
    || userEmail.includes(`@`) === false
    || userEmail.startsWith(`@`)
    || userEmail.endsWith(`@`)
){
    alert(`Not valid Email`);
    userEmail = prompt(`Enter email`);
}

console.log(`Valid email: ${userEmail}`);

// do...while statement
// for statement

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