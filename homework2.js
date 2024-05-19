var prompt = require('prompt');


prompt.start();

prompt.get(['age'], function (err,result) {

if (result.age % 10 === 1 && result.age<=9)
    {console.log('Тобі' + " " + result.age + " " + "рік");}
else if(result.age  >=11 && result.age <=19)
    {console.log('Тобі' + " " + result.age + " " + "років");}
    else if(result.age % 10 >= 2 && result.age % 10 <=4)
        {console.log('Тобі' + " " + result.age + " " + "роки");}
   
    else 
    {console.log('Тобі' + " " + result.age + " " + "років");}

 
});

// node homework2.js