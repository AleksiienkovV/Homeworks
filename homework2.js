var prompt = require('prompt');


prompt.start();

prompt.get([{
    name: 'age',
    description: "Скільки тобі років?",
    required: true
    }], function (err,result) {

if (result.age % 10 === 1 && result.age != 11)
    {console.log('Тобі' + " " + result.age + " " + "рік");}
else if(result.age>= 5 &&result.age<=19)
    {console.log('Тобі' + " " + result.age + " " + "років");}
    else if(result.age % 10 >= 2 && result.age % 10 <= 4 || result.age % 100 >= 2 && result.age  % 100 <=4 && result.age % 100 >= 5)
        {console.log('Тобі' + " " + result.age + " " + "роки");}
        else if(result.age<=0)
        {console.log('Ти ще не народився')}
   else 
    {console.log('Тобі' + " " + result.age + " " + "років");}

 
});

// node homework2.js