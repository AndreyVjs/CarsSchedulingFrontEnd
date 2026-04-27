const getAllCustomers = 'http://localhost:3000/customer/all';

async function getCustomers(){

    let promise = await fetch(getAllCustomers);
    let customersJson = await promise.json();
    console.log(customersJson);

    console.log(customersJson[0]);
}

// getCustomers();

async function CustomerById(id) {

    let promise = await fetch(`http://localhost:3000/customer/${id}`);
    let customerJson = await promise.json();
    console.log(customerJson);
}

// CustomerById(1);


async function getEmployeeById(id) {

    let promise = await fetch(`http://localhost:3000/employee/${id}`);
    let employeeJson = await promise.json();
    console.log(employeeJson);
}

getEmployeeById(4);
