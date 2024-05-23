function sum(number,div){
    let a = 0
       for (let i = 0; i<=number; i++){
        if(i % div!=0){
            a+=i;}
        }
       return a;
       }
    
    
    
    
    console.log(sum(100,3));