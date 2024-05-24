function pow(number, stupin){
    if (stupin===0) return 1;
    if(number===0) return 0;
    if(number===1)return 1;
    let result = 1;
    while (stupin!=0){
        result*= number;
        stupin=stupin-1;
        
        
    }
return result;
}
console.log(pow(3,5));