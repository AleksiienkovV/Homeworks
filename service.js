var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
}
    services.price = function() {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === 'string' && this[service].includes(' грн')) {
                total += parseInt(this[service]);
            }
        }
        return total + ' грн';
    }
    console.log(services.price())
    services['Розбити скло']= "200 грн"
    console.log(services.price())
    
    services.minPrice = function(){
        let min = Infinity;
        for(let service in this){
            if(typeof this [service] === 'string' && this[service].includes(' грн')){
                min = Math.min(min, parseInt(this[service]))
            }
           
        }
        return min + 'грн';
       
    }
    console.log(services.minPrice())
    services['Випити колу'] = '40 грн';
    console.log(services.price())
    console.log(services.minPrice())

    services.maxPrice = function(){
        let max = 0;
        for(let service in this){
            if
            (typeof this [service] === 'string' && this[service].includes(' грн')){
                max = Math.max(max, parseInt(this[service]))

            }
        }
        return max + ' грн'
    }
    console.log(services.maxPrice())
    services['Перманент бороди'] = "2000 грн"
    console.log(services.maxPrice())
    console.log(services.price())