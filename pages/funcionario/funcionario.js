import {createEmployee} from '../../js/api/api.js';


function validarCampos() {

    let name = document.querySelector('#name-input-employee').value;
    let email = document.querySelector('#email-input-employee').value;
    let phone = document.querySelector('#phone-input-employee').value;
    let salary = document.querySelector('#salary-input-employee').value;
    let birthday = document.querySelector('#birthday-input-employee').value;
    let role = document.querySelector('#role-input-employee').value;
    let button = document.querySelector('#save-button-employee')

    button.disable = true;
    if (name && email && phone && salary && birthday && role) {

        button.disable = false;
        button.style.backgroundColor = 'goldenrod';
    } else {

        button.style.backgroundColor = 'red';
        button.disable = true;
    }

}

        let nome = document.querySelector('#name-input-employee');
        nome.addEventListener('input', validarCampos);

        let email = document.querySelector('#email-input-employee');
        email.addEventListener('input', validarCampos);

        let phone = document.querySelector('#phone-input-employee');
        phone.addEventListener('input', validarCampos);

        let salary = document.querySelector('#salary-input-employee');
        salary.addEventListener('input', validarCampos);

        let birthday = document.querySelector('#birthday-input-employee');
        birthday.addEventListener('input', validarCampos);

        let role = document.querySelector('#role-input-employee');
        role.addEventListener('input', validarCampos);


function create() {

    let name = document.querySelector('#name-input-employee').value;
    let email = document.querySelector('#email-input-employee').value;
    let phone = document.querySelector('#phone-input-employee').value;
    let salary = document.querySelector('#salary-input-employee').value;
    let birthday = document.querySelector('#birthday-input-employee').value;
    let role = document.querySelector('#role-input-employee').value;

    let employee = {

    name_employee: name,
    telefone_employee: phone,
    email_employee: email,
    salary_employee: salary,
    birthday_employee: birthday,
    role_employee: role

    }

    createEmployee(employee);

}

    let button = document.querySelector('#save-button-employee');
    button.addEventListener('click', create);