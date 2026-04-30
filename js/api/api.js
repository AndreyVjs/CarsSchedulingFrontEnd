//Esse arquivo é responsavel por gerenciar todas as request da APi CarScheduling

//GetsAll
const getAllCustomers = 'http://localhost:3000/customer/all';
const getAllEmployee = '';
const getAllCars = '';
const getAllServices = '';
const getAllWorkOrder = '';

//GetsByID
const getCustomerById = 'http://localhost:3000/customer/';
const getEmployeeById = 'http://localhost:3000/employee/';
const getCarById = 'http://localhost:3000/car/';
const getWorkOrderById = '';
const getServiceById = '';

//Posts
const postCustomer = 'http://localhost:3000/customer';
const postEmployee = 'http://localhost:3000/employee';
const postCar = '';
const postService = '';
const postWorkOrder = '';

//Lista completa de Customer da tabela do banco
async function getCustomers(){

    let promise = await fetch(getAllCustomers);
    let customersJson = await promise.json();
    return customersJson; 
}


// Retorna um Customer especifico da tabela pelo id passado
async function customerById(id) {

    let promise = await fetch(getCustomerById+`${id}`);
    let customerJson = await promise.json();
    return customerJson;
}


// Retorna um Employee especifico da tabela pelo id passado
async function employeeById(id) {

    let promise = await fetch(getEmployeeById+`${id}`);
    let employeeJson = await promise.json();
    return employeeJson;
}


// Retorna um Carro especifico da tabela pelo id passado
async function carById(id){

    let promise = await fetch(getCarById+`${id}`);
    let carJson = await promise.json();
    return carJson;
}

//Chama o post de Work Order e cadastra a ordem
// export async function createWorkOrderApi(idCar, idCustomer, idsService) {
    
// }

export async function createCustomer(cliente) {
    
    //Sera necessario criar uma lat para tratamento de erro depois

    //Oque está acontecendo nessse fetch é o seguinte:
    //Como estou trabalhando com algo que pode demorar (api) eu uso o await, já dentro do fetch eu tenho que especificar algumas coisas como

     await fetch(postCustomer,{

        //A URL e depois algumas especificações sobre oque vem por padrão com {}

        //O tipo de metodo já que vem por padrão como get
        method: 'POST',

        //O tipo de conteudo que estou passando e o tipo/lingua que ele está
        headers: {
            'Content-Type': 'application/json'
        },

        // è basicamente é um tradutor de objeto javascript para objeto JSON
        body: JSON.stringify(cliente)
    });
}

export async function createEmployee(employee){

    await fetch(postEmployee,{

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(employee)
    });
}