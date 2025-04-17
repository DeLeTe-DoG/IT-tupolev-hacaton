// footer actions ----------------
let leftBtn = document.querySelector('#right-footer-btn')
let rightBtn = document.querySelector('#left-footer-btn')
let footerScreen = document.querySelector('#inner-screen-gallery')
// let screen = document.querySelector('.inner-main-image-section')
const elem = document.querySelector('.main-pages-of-gallery')

let frstMainPageSection = document.querySelector('#frstMainPageSection')
let scndMainPageSection = document.querySelector('#scndMainPageSection')

currentItem = 1
countOfItems = 5


// for main фоток
currentMainItem = 1
countOfMainItems = 5


for (i = 1; i < countOfItems+1; i++) {
        footerScreen.innerHTML += `
            <div id="${i}" class="pages-of-gallery">
            <img src="./assets/images/galleryFooter/footerImage${i}.png" 
            style="background-color: red;">
            </img>
            </div>
            `
}



for (i = 1; i < countOfMainItems+1; i++) {
    frstMainPageSection.innerHTML += `
        <div id="main${i}" class=" main-pages-of-gallery">
        <img src="./assets/images/galleryFooter/footerImage${i}.png" 
        style="background-color: red;">
        </img>
        </div>
        `
}
for (i = 1; i < countOfMainItems+1; i++) {
    scndMainPageSection.innerHTML += `
        <div id="main${i}" class=" main-pages-of-gallery">
        <img src="./assets/images/galleryFooter/footerImage${i}.png" 
        style="background-color: red;">
        </img>
        </div>
        `
}

function autoScroll() {
    if (currentMainItem < countOfMainItems) {
        currentItem++
        elem.scrollIntoView({behavior: "smooth", block: "center", inline: "start"})
    } else {
        currentMainItem = currentMainItem
    }
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
