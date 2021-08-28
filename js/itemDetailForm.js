(function() {

    // Input:range Output //
    const sugar_level = document.querySelector('#sugar-level');
    const sugar_level_output = document.querySelector('.sugar-level');

    const ice_level = document.querySelector('#ice-level');
    const ice_level_output = document.querySelector('.ice-level');

    sugar_level_output.textContent = `${sugar_level.value} %`;
    ice_level_output.textContent = `${ice_level.value} %`;

    sugar_level.addEventListener('input', function() {
      sugar_level_output.textContent = `${sugar_level.value} %`;
    });

    ice_level.addEventListener('input', function() {
        ice_level_output.textContent = `${ice_level.value} %`;
    });

    // Form Validation //
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        showQuantityError();
        if(!quantity.validity.valid) {
            event.preventDefault();
        }
    });

    // Input:number Validation //
    const quantity = document.querySelector('#quantity');
    const quantityError = document.querySelector('#quantity ~ span.error');

    quantity.addEventListener('input', (e) => {
        showQuantityError();
    })

    function showQuantityError() {
        if(quantity.validity.valid){
            quantityError.textContent = '';
            quantityError.className = 'error';
        } else {
            if(quantity.validity.valueMissing) {
                quantityError.textContent = 'You need to enter a number.';
            } else if(quantity.validity.typeMismatch) {
                quantityError.textContent = 'Entered value needs to be an integer number.';
            } else if(quantity.validity.rangeUnderflow) {
                quantityError.textContent = `Quantity should be at least ${quantity.min}.`;
            } else if(quantity.validity.rangeOverflow){
                quantityError.textContent = `Quantity should be at most ${quantity.max}.`;
            }
            quantityError.className = 'error active';
        }
    }

    // Input:nubmer btn //
    const increase_btn = document.querySelector('.increase-btn');
    const decrease_btn = document.querySelector('.decrease-btn');

    increase_btn.addEventListener('click', increase);
    decrease_btn.addEventListener('click', decrease);

    function increase(e) {
        quantity.value = Number(quantity.value) + 1;
        showQuantityError();
        toggleBtn();
    }

    function decrease(e) {
        quantity.value = Number(quantity.value) - 1;
        showQuantityError();
        toggleBtn();
    }

    function toggleBtn() {
        if(Number(quantity.value) >= quantity.max) {
            increase_btn.disabled = true;
            increase_btn.classList.remove('btn');
        } else if(Number(quantity.value) <= quantity.min) {
            decrease_btn.disabled = true;
            decrease_btn.classList.remove('btn');
        } else {
            increase_btn.disabled = false;
            increase_btn.classList.add('btn');
            decrease_btn.disabled = false;
            decrease_btn.classList.add('btn');
        }
    }
})();