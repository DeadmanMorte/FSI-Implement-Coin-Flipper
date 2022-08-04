// TODO: Declare any global variables we need
let penny = document.querySelector ('.coin')
let flip = document.querySelector ('#flip')
let clear = document.querySelector ('#clear')
let response = document.querySelector ('.status')
let heads = document.createElement ('heads')
let tails = document.createElement ('tails')
function ChangeHNumber (displayHNumber) {
    let headNumber = document.querySelector ('#heads')
    headNumber.innerHTML = displayHNumber
}
function ChangeTNumber (displayTNumber) {
    let tailNumber = document.querySelector ('#tails')
    tailNumber.innerHTML = displayTNumber
}
function ChangeHPercent (displayHPercent) {
    let headPercent = document.querySelector ('#heads-percent')
    headPercent.innerHTML = displayHPercent
}
function ChangeTPercent (displayTPercent) {
    let tailPercent = document.querySelector ('#tails-percent')
    tailPercent.innerHTML = displayTPercent
}
let headNumber = 0
let headPercent = 0
let tailNumber = 0
let tailPercent = 0

    // TODO: Add event listener and handler for flip and clear buttons
flip.addEventListener('click', function () {
    let rolledValue = Math.ceil(Math.random() * 2)
    if(rolledValue == 1) {
        headNumber++
    }
        ChangeHNumber(`${headNumber}`)
     if(rolledValue != 1) {
        tailNumber++
     }
        ChangeTNumber(`${tailNumber}`)
    
})
clear.addEventListener('click', function () {
    let headNumber = 0
    let tailNumber = 0
    ChangeHNumber(`${headNumber}`)
    ChangeTNumber(`${tailNumber}`)
})



    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)