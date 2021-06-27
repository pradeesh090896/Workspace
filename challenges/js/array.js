const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Anaki12 Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'female',
    }
];



const sortByHeight = characters.sort((a,b) => (a.height - b.height));

const sortByGender = characters.sort((character) => {
    if(character.gender === "female"){
        return -1
    }
    else{
        return 1;
    }
})

// console.log(sortByHeight);
console.log(sortByGender);
// // // const byName = characters.sort((a,b) => {
// // //     // console.log(typeof(a));
// // //     return a.name.localeCompare(b.name);
// // // })

// // // // console.log(byName);

// // // console.log("-------------------------------------------------------------");

// // // const byGender = characters.sort((a,b) => {
// // //     if(a.gender === "female"){
// // //         return -1
// // //     }
// // //     return 1;
// // // })

// // // // console.log(byGender);


// // // // " Filter Method "

// // // const heightGT100 = characters.filter((character) => character.height > 100);
// // // // console.log(heightGT100);

// // // const heightLT200 = characters.filter((character) => character.height < 200);
// // // heightLT200.sort((a,b) => a.height-b.height)
// // // // console.log(heightLT200);

// // // // " Reduce Method "

// // // const totalHeight = characters.reduce((acc,curr) => acc+parseInt(curr.height),0);
// // // console.log(totalHeight);

// // // const maxHeight = characters.reduce((acc,curr) => {
// // //     // console.log(acc.height,curr.height);
// // //     if(curr.height > acc.height){
// // //         acc = curr
// // //     }
// // //     return acc;
// // // })

// // // console.log(maxHeight);

// // // const freq = (arr) => {

// // //     let freqMap = new Map;
// // //     let max = -1;

// // //     arr.forEach(element => {
// // //         if(!freqMap.has(element)){
// // //             freqMap.set(element,1);

// // //         }
// // //         else{
// // //             let newValue = freqMap.get(element) + 1;
// // //             max = Math.max(newValue,max);
// // //             freqMap.set(element,newValue);
// // //         }
// // //     });

// // //     let maxChar;

// // //     freqMap.forEach((value,element) => {
// // //         // console.log(value,element,max);
// // //         if(max == value){
// // //             maxChar = element
// // //         }
// // //     })

// // //     return maxChar;
// // // }

// // // let arr = ['a','a','b','c','a','e'];
// // // console.log(freq(arr));

// // // let arr = [1,2,3,4,5];
// // // arr = ["Red","Green","White","Black"];
// // // arr = [3, 8, 7, 6, 5, -4, -3, 2, 1];
// // // // let resultArr = arr;
// // // console.log(arr.slice(3-1));
// // // console.log(arr.join('+'));
// // // console.log(arr.sort((a,b) => (a-b)));


// // // var func = () => {
// // //     console.log(func === func);
// // // }

// // // func();

// // function foo (){
// //     let a = b = 0;
// //     // let b = 0;
// //     a++;
// //     return a;
// // }

// // let a = foo();
// // console.log(typeof(a));
// // console.log(typeof(b),b);
// // // typeof(b);



// // let a1 = [1,2,3,4,5];
// // let b1 = {
// //     xc : 'ji'
// // };

// // let a5 = () => {
// //     let x = 10;
// //     x+=1;
// // }

// // // let a1 = 3;
// // // let b1 = new Number(3);

// // let a2 = "pc";
// // let b2 = "pc";

// // let a3 = undefined;
// // let a4 = null;

// // // console.log(a1===b1,a1==b1);
// // console.log(Array.isArray(a1));
// // console.log(typeof a5,typeof b1);


// let str = "A boy plays in school. Boy levaes near the school.";

// const freqCount = (str) => {

//     let strArr = str.split(".");

//     // console.log(strArr);

//     strArr.pop();

//     // console.log(strArr);

//     let newStr = strArr.join('');

//     // console.log(newStr);

//     let newStrArr = newStr.split(' ');

//     // console.log(newStrArr);

//     let freqMap = new Map();

//     for(let i=0;i<newStrArr.length;i+=1){
//         if(!freqMap.has(newStrArr[i])){
//             freqMap.set(newStrArr[i],1);
//         }
//         else{
//             freqMap.set(newStrArr[i],freqMap.get(newStrArr[i])+1);
//         }
//     }

//     let freqArr = [...freqMap.entries()];

//     // console.log(freqArr);

//     freqArr.sort((a,b) => b[1] - a[1]);

//     console.log(freqArr);
// }

//  freqCount(str);


