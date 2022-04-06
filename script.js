const submitBtn = document.querySelector('[data-submit]');
const ratingButtons = document.querySelectorAll('.icon--rating');
const ratingCardComponent = document.querySelector('[data-rating-card]');
const thankYouCardComponent = document.querySelector('[data-thank-you-card]');
const ratingChoice = document.querySelector('[data-rating-choice]');

let ratingResult = '';

function removeActiveClasses() {
    ratingButtons.forEach(btn => {
        btn.classList.remove('active');
    })
}

// add event listener to each rating button
ratingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActiveClasses();
        btn.classList.add('active');
        ratingResult = btn.textContent;
    });
})

// add event listener to submit button
submitBtn.addEventListener('click', () => {
    if (ratingResult === '') return

    ratingCardComponent.classList.add('hide');
    thankYouCardComponent.classList.remove('hide');

    ratingChoice.textContent = ratingResult;
});