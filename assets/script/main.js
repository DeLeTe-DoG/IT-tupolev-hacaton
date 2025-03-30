// footer actions ----------------
let leftBtn = document.querySelector('#left-footer-btn')
let rightBtn = document.querySelector('#right-footer-btn')

currentItem = 1
countOfItems = 5

leftBtn.addEventListener('click',() => {
    if (currentItem < countOfItems) {
        currentItem++
    } else {
        currentItem = currentItem
    }
    leftBtn.setAttribute('href', `#${currentItem}`)
    console.log(currentItem)
})

rightBtn.addEventListener('click', () => {
    if (currentItem > 1) {
        currentItem--
    } else {
        currentItem = currentItem
    }
    rightBtn.setAttribute('href', `#${currentItem}`)
    console.log(currentItem)
})

