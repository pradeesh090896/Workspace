
const nearestGreater = (arr) => {

    let resultArr= [];
    let stack = [];
    let top = -1

    for(let i=arr.length - 1; i>=0; i-=1){
        if(stack.length == 0){
            // console.log("inside first if",arr[i]);
            resultArr.push(-1);
        }
        else{
            if(stack.length > 0 && stack[top] > arr[i]){
                // console.log("inside second if",arr[i]);
                resultArr.push(stack[top]);

            }
            else{
                // console.log(stack,arr[i]);
                while(stack.length > 1 && stack[top] <= arr[i]){
                    stack.pop();
                    top -= 1; 
                }
                // console.log(stack,top,arr[i]);
                if(stack.length == 0){
                    resultArr.push(-1);
                }
                else{
                    resultArr.push(stack[top]);
                }
            }
        }
        stack.push(arr[i]);
        top += 1;
    }

    console.log(resultArr.reverse());
}

let arr = [1,3,2,4];

nearestGreater(arr);