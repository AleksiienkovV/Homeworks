
function repeatChar(char,times){
    result = '';
    for(let i = 0; i < times;i++){
        result +=char;
    }
    return result;
}


function myPad(string, padChar, padCount, padStart ){
    let needPadding = Math.max(0 , padCount - string.length);
    let padding = repeatChar(padChar, needPadding);
    if(padStart){return padding + string;}
    else{return string + padding;}
}


console.log(myPad('qwerty' , '++' , 7 , true));