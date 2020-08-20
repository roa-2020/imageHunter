/************************************************************
 * File:    public/script.js
 * Purpose: Define Front End JS Interactions
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

/************************************************************
 * Define Global Variables
 ************************************************************/
let modal         = document.querySelector("#myModal")
let uploadButton  = document.querySelector("#uploadImageToggle")
let closeModal    = document.querySelector("#closeModal")


/************************************************************
 * Define Functions
 ************************************************************/
function addListeners(){
  modal.addEventListener('click', hideModal)
  uploadButton.addEventListener('click', showModal)
  closeModal.addEventListener('click', hideModal)
}

function showModal(){
  modal.classList.remove('hidden')
}

function hideModal(){
  modal.classList.add('hidden')
}

/************************************************************
 * Add Listeners
 ************************************************************/
document.addEventListener('DOMContentLoaded', addListeners)