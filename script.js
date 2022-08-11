const input = document.querySelector('#email');
const submit = document.querySelector('#notify-me');
const error = document.querySelector('.error');

submit.addEventListener('click', function (e) {
    e.preventDefault();

    const er =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    console.log();

    if (!er.test(input.value.toLowerCase())) {
        error.style.display = 'block';
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'blue';
        error.style.display = 'none';
    }

    input.value = '';
});