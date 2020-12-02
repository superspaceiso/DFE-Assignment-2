const enterBtn = document.getElementById('enterBtn')
const splashScreen = document.getElementsByClassName('splashScreen')[0]
const centreSplash = document.getElementsByClassName('centreSplash')[0]

if(sessionStorage.getItem("animationFired")){
    splashScreen.style.display = "none"
}

enterBtn.addEventListener('click', () => {
    splashScreen.classList.add("splashScreenAnimate")
    centreSplash.style.display = "none"
    sessionStorage.setItem("animationFired","true");
})

