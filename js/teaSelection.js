const teaSelector = document.getElementsByClassName('teaSelector')
const teaSelection = document.getElementsByClassName('teaSelection')
const teaInfo = document.getElementsByClassName('teaInfo')
const teaSelectionContract = document.getElementsByClassName('teaSelectionContract')

console.log(teaSelection.firstElementChild);

for(let i = 0; i < teaSelector.length; i++) {

    teaSelector[i].addEventListener('mouseover', () => {

        if (teaSelectionContract[i]) {
            teaSelection[0].children[i].classList.remove('teaSelectionContract')
            teaSelector[i].classList.remove('teaSelectorExpand')
        }

        teaSelection[0].children[i].classList.add('teaSelectionExpand')
        teaSelector[i].classList.add('teaSelectorContract')
        teaInfo[i].classList.add('teaInfoReveal')

    })

    teaSelection[0].children[i].addEventListener('mouseleave', () => {

        teaSelection[0].children[i].classList.add('teaSelectionContract')
        teaSelection[0].children[i].classList.remove('teaSelectionExpand')

        teaSelector[i].classList.add('teaSelectorExpand')
        teaSelection[0].children[i].classList.remove('teaSelectorContract')

        teaInfo[i].classList.remove('teaInfoReveal')

    })

}
