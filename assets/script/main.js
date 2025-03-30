// footer actions ----------------
let leftBtn = document.querySelector('#left-footer-btn')
let rightBtn = document.querySelector('#right-footer-btn')

currentItem = 1
countOfItems = 5

let item = `<div id="1" class="pages-of-gallery">
            <img src="./assets/images/galleryFooter/footerImage.png" 
            style="background-color: red;">
            </img>
            </div>`

for (i = 1; i < countOfItems+1; i++) {
    document.querySelector('#inner-screen-gallery').innerHTML += `
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

