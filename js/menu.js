//Get the Menu button
const menuBtn = document.getElementById('menuBtn')
//Get the Menu
const menu = document.getElementsByClassName('menu')[0]

//Wait for user to click the Menu button
menuBtn.addEventListener('click', () => {
/* Checks if the menu is already popped out and if so remove the transform class that makes the menu visible,
and also remove the white colour from the Menu button, if not pop the men out and change the button colour from black to white */
        if(menu.classList.contains("menuOut") === true){
            menu.classList.remove("menuOut")
            menuBtn.classList.remove("menuBtnAnimation")
        } else {
            menu.classList.add("menuOut")
            menuBtn.classList.add("menuBtnAnimation")
        }
})