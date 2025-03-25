const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  const personas = [];
  while ((await ask("¿Desea ingresar una persona? (s/n): ")).toLowerCase() === 's') {
    const nombre = await ask("Ingrese el nombre: ");
    const apellido = await ask("Ingrese el apellido: ");
    const dni = await ask("Ingrese el DNI: ");
    // Se solicitan los teléfonos separados por coma
    const telefonos = (await ask("Ingrese los teléfonos separados por coma: ")).split(",").map(t => t.trim());
    personas.push([nombre, apellido, dni, telefonos]);
  }
  
  console.log("\nDatos ingresados:");
  personas.forEach(persona => console.log(persona));
  rl.close();
}

main();