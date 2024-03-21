let rateBtns = document.querySelectorAll('#rate-btn'); 
let form = document.getElementsByTagName('form')[0]; 
let submit = document.getElementById('submit'); 
let ratingPage = document.getElementById('rating-state')
let thanksPage = document.getElementById('thanks')
let rateNbr = document.getElementById('rate-number')
let rate =  0 


rateBtns.forEach(rateBtn => {
    rateBtn.addEventListener('focus', function (event) {
    rate = event.currentTarget.value; 
})
    rateBtn.addEventListener('keydown', function (event) {
    rate = event.currentTarget.value; 
    if (event.key === 'Enter') {
        change(event); 
    }
})

});

form.onsubmit = change ; 


function change (event) {
    if (rate != 0 ) {
    event.preventDefault(); 
    rateNbr.innerHTML = rate ; 
    thanksPage.classList.toggle('d-none'); 
    ratingPage.classList.toggle('d-none'); 
    }
}