let mail = document.getElementById('mail')
const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const span   = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

form.addEventListener('submit', (event) => {
    if(mail.value == ''){
        emailValidate();
        console.log('qwe');
    } else{
        location.href = '#open-modal';
        console.log('123');
    }
    event.preventDefault();
});

function setError(index) {
    campos[index].style.border = '2px solid hsl(4, 100%, 67%)';
    span[index].style.display = 'block';
}

function removerError(index) {
    campos[index].style.border = '';
    span[index].style.display = 'none';
}

function emailValidate() {
    if (!emailRegex.test(campos[0].value)) 
    {
        setError(0);
    }
    else
    {
        removerError(0);
    }
}