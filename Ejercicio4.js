let input = [
  { nombre: "Pedro", edad: 20, ciudad: "Cordoba" },
  { nombre: "Patricia", edad: 22, ciudad: "Cordoba" },
  { nombre: "Jose", edad: 23, ciudad: "Mendoza" },
  { nombre: "Maria", edad: 20, ciudad: "Cordoba" },
  { nombre: "Juan", edad: 20, ciudad: "Cordoba" },
  { nombre: "Ana", edad: 22, ciudad: "Cordoba" },
];

input.sort((a, b) => {
  if (a.nombre < b.nombre) {
    return -1;
  }

  if (a.nombre > b.nombre) {
    return 1;
  }

  return 0;
});

input.sort((a, b) => {
  if (a.edad < b.edad) {
    return -1;
  }

  if (a.edad > b.edad) {
    return 1;
  }

  return 0;
});

let newArray = [];
input.map((obj) => {
  if (obj.ciudad === "Cordoba") {
    newArray.push(obj.nombre);
  }
});

console.log(newArray);
