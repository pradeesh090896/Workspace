// import { response } from "express";


// let func1 = (time) => {
//     delay(time).then(() => {
//         console.log("Promise Handled")
//     }).catch((err) => {
//         console.error(err);
//     })
// }

let delay = (time) => {
    return new Promise((resolve,reject) => {
        if(isNaN(time)){
            reject(new Error("Time should be a valid integer"));
        }
        resolve();
    })
}

delay("sdt").catch((err) => console.log(err.message));
delay("sdt").catch((err) => console.log(err.message));

// (func1("100"));

