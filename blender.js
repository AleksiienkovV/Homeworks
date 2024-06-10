function myBlend(arr){
    for (let i = arr.length -1; i>0; i--){
        let j = Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
}
const arr = [1,2,3,4,5,6,7,8,9,10,50,23,45]
myBlend(arr);
console.log(arr)


