function checkProbabilityTheory(count) {
    let totalNumbers = count;
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      let randomNum = Math.floor(Math.random() * 901) + 100; 
      if (randomNum % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    console.log("Кількість згенерованих чисел:"+ totalNumbers);
    console.log("Парних чисел:" + evenCount);
    console.log("Не парних чисел:" + oddCount);
    
    let evenPercent = (evenCount / totalNumbers) * 100;
    let oddPercent = (oddCount / totalNumbers) * 100;
    
    console.log(`Відсоток парних до не парних: ${evenPercent.toFixed(2)}% - ${oddPercent.toFixed(2)}%`);
  }
  
  // Виклик функції з параметром count = 100
  checkProbabilityTheory(42);