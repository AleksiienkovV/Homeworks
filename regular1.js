
const regex = /^(?!.*[aA]).{6,}$/;

const testStrings = [
  "hello",      
  "helloa",     
  "noAletters", 
  "example123", 
  "Aabcdef",    
  "abcdefg",    
  "qwerty"
];

testStrings.forEach(str => {
  console.log(`${str}: ${regex.test(str)}`);
});