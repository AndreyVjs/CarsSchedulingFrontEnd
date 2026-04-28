// let modelo = document.querySelector(".texts");
import {createWorkOrder} from 'js/api/api.js'

function adicionarTexto(){

    //Pegar as coisas
    let textoRecebido = document.getElementById('text').value;
    let container = document.querySelector('.new-texts');

    //Criar o elemento
    let novoTexto = document.createElement('p')
    novoTexto.textContent = textoRecebido;

    //Retornar as coisas
    container.appendChild(novoTexto);
    container.querySelector('p').style.backgroundColor = 'goldenrod';

    return alert('Texto adicionado com sucesso!');
}


function createWorkOrder(){

    //Pegar dados do input
    
    //let idCar = document.getElementById('car-input').value;
    //let idsService = document.getElementById('services-input').value;
    //let idCustomer = document.getElementById('customer-input').value;

    let idCar = document.querySelector('#car-input').value;
    let idsService = document.querySelector('#services-input').value;
    let idCustomer = document.querySelector('#customer-input').value;

    if (idCar || idsService || idCustomer){

        //Chamar api e passar os dados
        //Seria interessante passar logo o JSON
        createWorkOrder(idCar, idCustomer, idsService);
        } else {
        alert("Preencha todos os campos!!")
    }

}

let getStartedButton = document.getElementById('started-button');
getStartedButton.addEventListener('click', adicionarTexto);

let createWorkOrderButton = document.getElementById().value;
createWorkOrderButton.addEventListener('click', createWorkOrder)
