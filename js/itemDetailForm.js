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
        if(!quantity.validity.valid) {
            showQuantityError();
            event.preventDefault();
        }
    });

    // Input:number Validation //
    const quantity = document.querySelector('#quantity');
    const quantityError = document.querySelector('#quantity ~ span.error');

    quantity.addEventListener('input', (e) => {
        if(e.target.validity.valid) {
            quantityError.textContent = '';
            quantityError.className = 'error';
        } else {
            showQuantityError();
        }
    })

    function showQuantityError() {
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
})();