/*Enter button.*/
const enterBtn = document.getElementById('enterBtn')
/*Splash screen div.*/
const splashScreen = document.getElementsByClassName('splashScreen')[0]
/*Centre div containing the logo and enter button.*/
const centreSplash = document.getElementsByClassName('centreSplash')[0]

/*Checks to see if the animation has been fired before in the current session, and if it has hide the splash screen.*/
if(sessionStorage.getItem("animationFired")){
    splashScreen.style.display = "none"
}

/*
When the enter button is clicked add the CSS class that animates the splash screen to reveal the Index page,
this also hides the center div so it doesn't interfere with the splash screen
and also saves that the animation has been fired into the browser session storage.
*/
enterBtn.addEventListener('click', () => {
    splashScreen.classList.add("splashScreenAnimate")
    centreSplash.style.display = "none"
    sessionStorage.setItem("animationFired","true");
})

