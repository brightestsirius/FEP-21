// while

userTry = 1;
countOfTries = 3;

userEmail = prompt(`User try #${userTry}/${countOfTries}. Enter email`);
errorMsg = ``;

while(
    userTry<countOfTries &&
    (userEmail === null
    || userEmail.replaceAll(` `,``) === ``
    || !userEmail.includes(`@`)
    || userEmail.startsWith(`@`)
    || userEmail.endsWith(`@`)
    || userEmail.length<5)
){
    errorMsg = ``;
    userTry++;

    if(userEmail === null || userEmail.replaceAll(` `,``) === ``){
        errorMsg = (`Email shouldn't be emty. `);
    } else{
        if(!userEmail.includes(`@`)){
            errorMsg += (`Email should includes @. `);
        }

        if(userEmail.startsWith(`@`)){
            errorMsg += (`Email shouldn't starts with @. `);
        }

        if(userEmail.endsWith(`@`)){
            errorMsg += (`Email shouldn't ends with @. `);
        }
        
        if(userEmail.length<5){
            errorMsg += (`Email should be longer then 5. `);
        }
    }

    userEmail = prompt(`User try #${userTry}/${countOfTries}. ${errorMsg}Enter email`);
}

if(userTry === countOfTries){
    console.log(`Sorry, you used all tries :(`)
} else{
    console.log(`Email: ${userEmail}`);
}

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