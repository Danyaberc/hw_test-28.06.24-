
// Дано масив імен, зробіть новий масив де 
// всі імена будуть у нижньому регістрі і з великоїї літери

let untilCorrectName = document.querySelector('.untilCorrectName')// імена без регістрів
let afterCorrectName = document.querySelector('.afterCorrectName') // імена після застосування регістрів
let checkBut = document.querySelector('.check')// кнопка для застосування регістрів на масив

// Масив імен перед регістрами
let nameArr = [
    'aLeX',
    'nIkoLaI',
    'EVGENII',
    'NiKITA',
    'ALINa',
    'kOnStAnTiN',
    'vAlerIA',
]
console.log(nameArr)

//Цикл для витягування значень з масиву
for(let i of nameArr){
    untilCorrectName.innerHTML += ` ${i} ${''} ${' '}`
}

// Порожній масив для даних в правильному регістрі
let correctArr = []

//Подія клік,для переведення імен в правильний регістр
checkBut.addEventListener('click',(ev) =>{
    ev.preventDefault()
// Додавання регістрів до імен
    let newArr = nameArr.forEach(item =>{
    let res = item.substring(0,1).toUpperCase() + item.substring(1).toLowerCase()
    //Оновленні імена додаються в порожній регістр
    correctArr.push(res)
    afterCorrectName.innerHTML += `${res} ${' '}`
})
})

console.log(correctArr)
