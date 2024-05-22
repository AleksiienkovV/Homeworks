function triangle(h, Symbol) {
    let a = '';
    for (let i = 0; i < h; i++) {
        
        for (j = 0 ; j<=i ;j++){
            a += Symbol;}
            a += '\n'}
           return a;}
       
    
    
    console.log(triangle(5, '*'));




function triangle1(h,Symbol){
    let a = '';
    
    for (let i = 0; i < h; i++){
    console.log(a);
   a = a + Symbol;
  
   

}}
console.log(triangle1(8,'*'));