const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementsByClassName('menu')[0]

menuBtn.addEventListener('click', () => {
        if(menu.classList.contains("menuOut") === true){
            menu.classList.remove("menuOut")
            menuBtn.classList.remove("menuBtnAnimation")
        } else {
            menu.classList.add("menuOut")
            menuBtn.classList.add("menuBtnAnimation")
        }
})