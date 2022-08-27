function productQuantity(product, isAdd, productTotal, price) {
    //getting input value to count number of phone and case
    const productInput = document.getElementById(product);
    const productNumber = productInput.value;

    //getting input value to count the total amount for specific product
    const totalInput = document.getElementById(productTotal);


    if (isAdd == true) {
        productInput.value = parseInt(productNumber) + 1;
    }
    else {
        if (productInput.value > 0) {
            productInput.value = parseInt(productNumber) - 1;
        }
    }
    totalInput.innerText = productInput.value * price;
}

// phone increase decrease event handler
document.getElementById('phone-plus').addEventListener('click', function () {
    productQuantity('phone-input', true, 'phone-total', 1229);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    productQuantity('phone-input', false, 'phone-total', 1229);
});

//case increase decrease handler
document.getElementById('case-plus').addEventListener('click', function () {
    productQuantity('case-input', true, 'case-total', 59);
});

document.getElementById('case-minus').addEventListener('click', function () {
    productQuantity('case-input', false, 'case-total', 59);
});