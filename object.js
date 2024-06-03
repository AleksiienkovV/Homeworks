let sorceserHarry = {
    name : 'Harry Potter',
    spell1:"Expeliarmus",
    spell2:"Vingardium Leviosa",
    spell3:"Akcio",
    getInfo: function(){
        let info = '';
       for(let key in this){
        if(typeof this[key] !== 'function' ){
            info += key + ': ' + this[key] + '\n';
        }
       }
       console.log(info)
    }
}
sorceserHarry.getInfo();
sorceserHarry.spell4 = 'Imperio';
sorceserHarry.getInfo();
sorceserHarry.spell5 = 'Diffindo';
sorceserHarry.getInfo();
sorceserHarry.age = 18;
sorceserHarry.getInfo();




// Створення об'єкта з трьома властивостями
// let myObject = {
//     name: 'Alice',
//     age: 30,
//     city: 'Wonderland',
//     getInfo: function() {
//         let info = '';
//         for (let key in this) {
//             if (typeof this[key] !== 'function') {
//                 info += key + ': ' + this[key] + '\n';
//             }
//         }
//         console.log(info);
//     }
// };

// // Виклик методу getInfo для виведення інформації про об'єкт
// myObject.getInfo();

// // Додавання нової властивості до об'єкта
// myObject.job = 'Adventurer';

// // Виклик методу getInfo після додавання нової властивості
// myObject.getInfo();