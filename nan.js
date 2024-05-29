// function isNaN(v){
//     if(v!==null && v!==true && v!==new Date().toString()){
//         return parseFloat(v) !== parseFloat(v);
        
//     }
//     else return false;}
     


function myIsNaN(value) {
    if (value !== value) {
      return true;  // перевірка на NaN
    }
    
    if (typeof value === 'object' && value !== null) {
      return true;  // перевірка на об'єкт (крім null)
    }
  
    if (typeof value === 'string' && value.trim() === '') {
      return false;  // перевірка на порожню строку
    }
  
    if (typeof value === 'string' && !Number(value.replace(',', '.'))) {
      return true;  // перевірка на строку, яка не може бути конвертована в число
    }
  
    if (value instanceof Date) {
      return false;  // перевірка на об'єкт типу Date
    }
    if (typeof value === 'undefined') {
        return true;  // перевірка на undefined
    }
  
    return false;
  }


console.log(myIsNaN(NaN)); // true
console.log(myIsNaN(undefined)); // true
console.log(myIsNaN({})); // true
console.log(myIsNaN(true)); // false
console.log(myIsNaN(null)); // false
console.log(myIsNaN(37)); // false
console.log(myIsNaN("37")); // false
console.log(myIsNaN("37.37")); // false
console.log(myIsNaN("")); // false
console.log(myIsNaN(" ")); // false
console.log(myIsNaN("37,5")); // true - не співпало з рішенням
console.log(myIsNaN(new Date())); // false - не співпало з рішенням
console.log(myIsNaN(new Date().toString())); // true 
console.log(myIsNaN("blabla")); // true