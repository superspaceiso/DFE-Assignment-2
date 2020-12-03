/*Pictures of the various types of tea*/
const teaSelector = document.getElementsByClassName('teaSelector')
/*Div under the pictures of tea*/
const teaSelection = document.getElementsByClassName('teaSelection')
/*Information panel under the tea image.*/
const teaInfo = document.getElementsByClassName('teaInfo')
/*CSS rules that contracts the div back to its original size after the mouse leaves*/
const teaSelectionContract = document.getElementsByClassName('teaSelectionContract')

/*Loops through the teaSelector classes and applies the mouse over and mouse leave events to
* the teaSelectors based on their loop index, the same loop is also used to add and remove
* CSS animation classes to the consituent parts of the teaSelector/teaSelection divs as
* there are equal numbers of each.*/
for(let i = 0; i < teaSelector.length; i++) {

    teaSelector[i].addEventListener('mouseover', () => {

/*        Checks to see if a div has already been contracted and has the associated class and removes it.*/
        if (teaSelectionContract[i]) {
            teaSelection[0].children[i].classList.remove('teaSelectionContract')
            teaSelector[i].classList.remove('teaSelectorExpand')
/*            teaInfo[i].classList.remove('teaInfoReveal')*/
        }

        /*Expands the teaSelection div*/
        teaSelection[0].children[i].classList.add('teaSelectionExpand')
        /*Contracts the image within to leave space for the tea name and link*/
        teaSelector[i].classList.add('teaSelectorContract')
        /*Reveals the tea name and link*/
        teaInfo[i].classList.add('teaInfoReveal')

    })

    teaSelection[0].children[i].addEventListener('mouseleave', () => {

        /*Contracts the background div back to its original size and removes the class that expands it*/
        teaSelection[0].children[i].classList.add('teaSelectionContract')
        teaSelection[0].children[i].classList.remove('teaSelectionExpand')

        /*Expand the image back to its original size*/
        teaSelector[i].classList.remove('teaSelectorContract')
        teaSelector[i].classList.add('teaSelectorExpand')

        /*Remove tea information box*/
        teaInfo[i].classList.remove('teaInfoReveal')

    })

}
