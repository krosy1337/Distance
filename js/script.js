function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = () => {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});
const menuSidebarSeeMore = document.querySelector('.menu-sidebar__item_see-more')
const menuSidebarHiddenItems = document.querySelector('.menu-sidebar__hidden-items')

menuSidebarSeeMore.addEventListener('click', event => {
    menuSidebarHiddenItems.classList.toggle('active')
    if (!menuSidebarHiddenItems.classList.contains('active')) {
        menuSidebarSeeMore.querySelector('.see-more__text').textContent = 'See more...'
        menuSidebarSeeMore.querySelector('.see-more__icon').style.transform = 'rotate(0)'
    } else {
        menuSidebarSeeMore.querySelector('.see-more__text').textContent = 'See less'
        menuSidebarSeeMore.querySelector('.see-more__icon').style.transform = 'rotate(-90deg)'
    }
    event.preventDefault()
})