(function() {
    // Form Validation //
    const form = document.querySelector('.review-form')

    form.addEventListener('submit', function (event) {
        if(!name.validity.valid) {
            showNameError();
            event.preventDefault();
        }
        if(!review.validity.valid) {
            showReviewError();
            event.preventDefault();
        }
    });

    // Input:number Validation //
    const name = document.querySelector('#name');
    const nameError = document.querySelector('#name ~ span.error');
    const review = document.querySelector('#review');
    const reviewError = document.querySelector('#review ~ span.error');

    name.addEventListener('input', (e) => {
        if(e.target.validity.valid) {
            nameError.textContent = '';
            nameError.className = 'error';
        } else {
            showNameError();
        }
    })

    review.addEventListener('input', (e) => {
        if(e.target.validity.valid) {
            reviewError.textContent = '';
            reviewError.className = 'error';
        } else {
            showReviewError();
        }
    })

    function showNameError() {
        if(name.validity.valueMissing) {
            nameError.textContent = 'Please enter your name.';
        }
        nameError.className = 'error active';
    }

    function showReviewError() {
        if(review.validity.valueMissing) {
            reviewError.textContent = 'Please enter your opinion on us.';
        } else if(review.validity.tooShort) {
            reviewError.textContent = `Please enter at least ${review.minLength}.`
        }
        reviewError.className = 'error active';
    }
})()