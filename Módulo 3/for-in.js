let person = {
    nome: 'Raphael',
    age: 26,
    peso: 80.6
}

console.log(`O ${person['nome']} tem ${person['age']} anos e pesa ${person['peso']} kilos.`) // Acessando propriedaedes de um objeto 

for (let prop in person){
    console.log(person[prop])   // Lê-se: para cada propriedade em person.
}


