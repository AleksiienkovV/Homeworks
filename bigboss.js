const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  function findValueByKey(companyName, obj) {
    if (obj.name === companyName) {
        return obj;
    }
    
    if (obj.clients) {
        for (let i = 0; i < obj.clients.length; i++) {
            const result = findValueByKey(companyName, obj.clients[i]);
            if (result !== null) {
                return result;
            }
        }
    }

    if (obj.partners) {
        for (let i = 0; i < obj.partners.length; i++) {
            const result = findValueByKey(companyName, obj.partners[i]);
            if (result !== null) {
                return result;
            }
        }
    }

    return null;
}


const result = findValueByKey('Клієнт 1.2.3', company);
console.log(result);