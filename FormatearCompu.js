// Definimos cada paso como una función individual
//Funciones con condiciones y bucles

function conectarUSB() {
    console.log("Paso 1: Memoria USB conectada al puerto.");
}

function encenderEquipo() {
    console.log("Paso 2: El computador se está encendiendo...");
}

function entrarMenuBoot() {
    console.log("Paso 3: Presionando la tecla de booteo (F12/F11/Esc) para entrar al menú.");
}

function configurarIdioma() {
    console.log("Paso 4: Idioma y distribución de teclado seleccionados.");
}

function elegirInstalacionPersonalizada() {
    console.log("Paso 5: Clic en 'Instalación personalizada' para control total.");
}

function gestionarParticiones() {
    console.log("Paso 6: Eliminando particiones antiguas... Unidad formateada y lista.");
}

// Función principal que ejecuta el proceso en orden
function formatearComputador() {
    console.log("--- Iniciando Proceso de Formateo ---");
    conectarUSB();
    encenderEquipo();
    entrarMenuBoot();
    configurarIdioma();
    elegirInstalacionPersonalizada();
    gestionarParticiones();
    console.log("--- Proceso completado con éxito ---");
}
const menuOpc=()=>{
    let opc = Number(prompt("----MENU-------: 1. Formatear, 2. Cancelar"));
    return opc;
}
let opc = menuOpc();
while (opc==1){
    formatearComputador();
    opc = menuOpc();
    
}
alert("Hasta luego");
// Llamamos a la función para ver el resultado en consola
