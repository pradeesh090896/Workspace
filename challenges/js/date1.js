let day = new Date();

console.log(day.getDate(),day.getDay(),day.getFullYear(),day.getHours());

let weekArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

console.log("Today is: ",weekArr[day.getDay()]);
let month = day.setMonth('11');
month += 1;
if(month < 10){
    // month =  + String(month);
    
    month = ('0'+ month);
}
console.log((month)+'-'+day.getDate()+'-'+day.getFullYear());