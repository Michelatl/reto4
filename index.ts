// 1. Declara una variable con tu nombre.
const myName: string = "Michela Torralba ";

// 2. Declara una variable con tu número favorito.
const myFavoriteNumber: number = 6;

// 3. Crea un arreglo con 10 nombres de animales.
const animalNames: string[] = ["Elephant", "Tiger", "Lion", "Giraffe", "Dolphin", "Panda", "Kangaroo", "Zebra", "Monkey", "Koala"];

// 4. Crea un objeto llamado organización y su respectiva interfaz.
interface Organization {
name: string;
identificationCard: string;
numberOfWorkersjadores: number;
shift: string;
dateOfAdmission: string;
}

const organization: Organization = {
name: "Coorporacion It",
identificationCard: "1033777864",
numberOfWorkersjadores: 20,
shift: "7 AM - 5 PM",
dateOfAdmission: "2020-01-15"
};

// 5. Crea un arreglo de objetos llamado estudiantes y su respectiva interfaz.
interface Student {
  name: string;
  age: number;
  identificationCard: string;
  course: string;
}

const students: Student[] = [
  {
    name: "Andres perez",
    age: 23,
    identificationCard: "1033478734",
    course: "engineering",
  },
  {
    name: "Juan perez",
    age: 22,
    identificationCard: "1033479874",
    course: "arts",
  },
  {
    name: "Camilo Paez",
    age: 20,
    identificationCard: "10893678734",
    course: "engineering",
  },
  {
    name: "juan camilo diaz",
    age: 22,
    identificationCard: "109987365",
    course: "arts",
  },
  
];

// 6. Crea una función para calcular el área de un círculo.
function calculateCircleArea(radius: number): number {
  return Math.PI * radius ** 2;
}

// 7. Crea una función que calcule el mayor de tres números.
function findMaxNumber(num1: number, num2: number, num3: number): number {
  return Math.max(num1, num2, num3);
}

// 8. Crea una función que imprima "hola soy -----" en consola.
function greetWithName(name: string): void {
  console.log(`Hola soy michela`);
}

// Pruebas de las funciones
console.log("Nombre:", myName);
console.log("Número favorito:", myFavoriteNumber);
console.log("Nombres de animales:", animalNames);
console.log("Organización:", organization);
console.log("Estudiantes:", students);
console.log("Área del círculo con radio 5:", calculateCircleArea(5));
console.log("El mayor de 10, 7 y 14:", findMaxNumber(10, 7, 14));
greetWithName("Michel Torralba");
