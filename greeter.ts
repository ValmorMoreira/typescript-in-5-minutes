//Autor: Valmor Moreira
//Versão 1.0.0
//Tutorial de 5 minutos TypeScript alterado

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

class University {
  name: string;
  city: string;
  isFederal: boolean;
  constructor(public university: string) {
    this.name = university;
    this.city = this.city;
    this.isFederal = false;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person, university: University, year?: string) {
  if (year == undefined) {
    year = '';
  }
  return (
    'Seja bem-vindo, ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' a ' +
    university.name +
    ' ' +
    ' em ' +
    year
  );
}

let actualYear = new Date().getFullYear();
let user = new Student('Valmor', 'Antônio Alves', 'Moreira');
alert('Bem vindo ao tutorial de 5 minutos do TypeScript!');
let universityName = prompt('Digite o nome de sua universidade ou Faculdade');
let randomData = prompt('Digite um ano qualquer...');
let university = new University(universityName.toUpperCase());

let txt = greeter(user, university, randomData); //Data manual solicitada via prompt
let txt2 = greeter(user, university); //Data atual será adicionada na linha abaixo na variável txt2
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
