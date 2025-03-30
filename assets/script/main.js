// footer actions ----------------
let leftBtn = document.querySelector('#right-footer-btn')
let rightBtn = document.querySelector('#left-footer-btn')
let screen = document.querySelector('#inner-screen-gallery')

currentItem = 1
countOfItems = 5

for (i = 1; i < countOfItems+1; i++) {
        screen.innerHTML += `
            <div id="${i}" class="pages-of-gallery">
            <img src="./assets/images/galleryFooter/footerImage${i}.png" 
            style="background-color: red;">
            </img>
            </div>
            `
}

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