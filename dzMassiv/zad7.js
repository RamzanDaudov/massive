const person = {

    name: "Igor",

    children: ['Maxim', 'Ira']

}
console.log(person.children);

const individ = person;

person.children=['Egor', 'Nastya'];

console.log(individ.children);


