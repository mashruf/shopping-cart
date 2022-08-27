function productQuantity(product, isAdd) {
    //getting input value to count number of phone and case
    const productInput = document.getElementById(product);
    const productNumber = productInput.value;

    if (isAdd == true) {
        productInput.value = parseInt(productNumber) + 1;
    }
    else {
        if (productInput.value > 0) {
            productInput.value = parseInt(productNumber) - 1;
        }

    }


}

// phone increase decrease event handler
document.getElementById('phone-plus').addEventListener('click', function () {
    productQuantity('phone-input', true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    productQuantity('phone-input', false);
});

//case increase decrease handler
document.getElementById('case-plus').addEventListener('click', function () {
    productQuantity('case-input', true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    productQuantity('case-input', false);
});