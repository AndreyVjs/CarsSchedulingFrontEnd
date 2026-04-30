import { createCustomer } from '../../js/api/api.js'


function validarCampo() {

    let name = document.querySelector('#name-customer-input').value;
    let email = document.querySelector('#email-customer-input').value;
    let phone = document.querySelector('#cellphone-customer-input').value;
    let butto = document.querySelector('#button-customer-input');
    butto.disabled = true;

    if (!name || !email || !phone) {

        butto.disabled = true;
        let x = butto.style.backgroundColor = 'red';

    } else {
        butto.disabled = false;
        let x = butto.style.backgroundColor = 'goldenrod';
    }
}

        let inputNmae = document.querySelector('#name-customer-input');
        inputNmae.addEventListener('input', validarCampo);

        let inputEmail = document.querySelector('#email-customer-input');
        inputEmail.addEventListener('input', validarCampo);

        let inputPhone = document.querySelector('#cellphone-customer-input');
        inputPhone.addEventListener('input', validarCampo);



function create(event) {

    event.preventDefault();
    let name = document.querySelector('#name-customer-input').value;
    let email = document.querySelector('#email-customer-input').value;
    let phone = document.querySelector('#cellphone-customer-input').value;

    let cliente = {
        name_customer: name,
        telefone_customer: phone,
        email_customer: email
    }
    createCustomer(cliente);

}

        let saveButton = document.querySelector('#button-customer-input');
        saveButton.addEventListener('click', create);


