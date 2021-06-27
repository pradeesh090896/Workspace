// function multiplier(factor) {
//     return function (x) {
//         return x * factor;
//     }
// }

// const doubler = multiplier(2);

// console.log(doubler(4));

// const tripler = multiplier(3);

// console.log(tripler(5));

// const multiplier = (factor,x) => (factor*x);

// const doubler = (callback,x) => {
//     return callback(2,x);
// }

// console.log(doubler((factor,x) => factor*x,2));



let trippler = (callback,num) => {
    return callback(num);
}

console.log(trippler((num) => num*3,2));














