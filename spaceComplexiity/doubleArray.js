function doubleArray(arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        newArray.push(2*arr[i]);

    }
    return newArray;
}

let a=[1,2,3];
console.log(doubleArray(a));

/*
The space complexity is:The space take by the new array i
depend on the input array and the space taken is :o(n) space
*/

