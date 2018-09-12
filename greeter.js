//Autor: Valmor Moreira
//Versão 1.0.0
//Tutorial de 5 minutos TypeScript alterado
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
var University = /** @class */ (function () {
    function University(university) {
        this.university = university;
        this.name = university;
        this.city = this.city;
        this.isFederal = false;
    }
    return University;
}());
function greeter(person, university, year) {
    if (year == undefined) {
        year = '';
    }
    return ('Seja bem-vindo, ' +
        person.firstName +
        ' ' +
        person.lastName +
        ' a ' +
        university.name +
        ' ' +
        ' em ' +
        year);
}
var actualYear = new Date().getFullYear();
var user = new Student('Valmor', 'Antônio Alves', 'Moreira');
alert('Bem vindo ao tutorial de 5 minutos do TypeScript!');
var universityName = prompt('Digite o nome de sua universidade ou Faculdade');
var randomData = prompt('Digite um ano qualquer...');
var university = new University(universityName.toUpperCase());
var txt = greeter(user, university, randomData); //Data manual solicitada via prompt
var txt2 = greeter(user, university); //Data atual será adicionada na linha abaixo na variável txt2
txt2 += actualYear;
if (university.name == 'UTFPR') {
    university.isFederal = true;
    txt += ', é FEDERAL!';
    txt2 += ', é FEDERAL!';
}
document.body.innerHTML =
    '<div> <p> Método greeter com 3 parâmetros e data manual </p> <p>' +
        txt +
        '</p> </div> <div> <p> Método greeter com 2 parâmetros e data atual  </p> <p>' +
        txt2 +
        '</p> </div>';
