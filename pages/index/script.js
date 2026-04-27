// let modelo = document.querySelector(".texts");


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
    let id_car = document.getElementById('car-input').value;
    let ids_service = document.getElementById('services-input').value;

}

let getStartedButton = document.getElementById('started-button');
getStartedButton.addEventListener('click', adicionarTexto);
