function bingo(a) {
    let counter=0
    const answer = [2,9,14,7,15] // Bingo
    // если такая цифра есть в answer увеличиваем счетчик на 1
    a.forEach(item=>{
        if (answer.includes(item)){
            counter++
        }
    })
    console.log('counter: ',counter,'answer: ',answer.length)
    // если счетчик и длина answer больше(могут быть дубли) или равны возвращаем WIN
    // если нет LOSE
    if (counter >= answer.length){
        return 'WIN'
    }
    else{
        return 'LOSE'
    }
    
  }
  const result = bingo([21,13,2,7,5,14,7,15,9,10])
  console.log('result: ',result);




