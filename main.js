function saberLaEdad(fecha_nacimiento, fecha_actual) {
    return fecha_actual - fecha_nacimiento;
}
let data = new Date();
let anio_nacimiento = prompt("Ingrese su año de nacimiento");
let anios_cumplidos = saberLaEdad(parseInt(anio_nacimiento), data.getFullYear());
console.log("Total de años cumplidos en el ", data.getFullYear(),anios_cumplidos);