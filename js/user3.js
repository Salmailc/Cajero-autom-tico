//DOM
const $consultarSaldo = document.getElementById("montoSaldo"); //Modal para mostrar saldo

const $depositoNum = document.getElementById("deposito-num"); // Input de modal para depositar
const $botonDeposito = document.getElementById("btn-depositar"); //Boton para depositar

const $lessNum = document.getElementById("less-num"); //Input de modal para retirar
const $botonLess = document.getElementById("btn-retirar"); //Boton para retirar

// variables
const limitMoney = 990;
const minimalMoney = 10;
let saldoInicial = 200;
let valueDeposit = 0;
let valueLess = 0;
// init storage
localStorage.setItem("saldo", JSON.stringify(saldoInicial))

// alerts 
let myModal = new bootstrap.Modal(document.getElementById('confirmRetiroModal'), {})

//  deposit
$depositoNum.addEventListener("keyup", (e) =>{
   setValuesOperation(e.target.value) //para que regrese un numero
})

//click deposit
$botonDeposito.addEventListener("click", () =>{
    onDeposit()
})

// Less
$lessNum.addEventListener("keyup", (e) =>{
    setValuesOperation(e.target.value, "less")
 })

// click less money
$botonLess.addEventListener("click", () =>{
    onLessMoney()
})
const setValuesOperation = (val, operation = "deposit") => {
    const value = Number(val)    
    if(typeof value === "number" && !isNaN(value)){ //que sea un numero y que no sea un NaN
        if(operation === "deposit"){
            valueDeposit = value
        }else{
            valueLess = value
        }
    }
}
//Función de la alerta
const buildModalAlert = (message) => {
    const $alertMessage = document.getElementById("alert-message");
    $alertMessage.innerText = message
    myModal.show()
}

function mostrarSaldo(mensaje){
    $consultarSaldo.style.color = "#000000";
    $consultarSaldo.textContent = mensaje;
    $consultarSaldo.style.visibility;
}
mostrarSaldo(`Saldo disponible de $${saldoInicial}`)

//optener de local storage para consultar saldo
const setSaldo = () => {
    $consultarSaldo.innerText = (`Saldo disponible de $${JSON.parse(localStorage.getItem("saldo"))}`);
}

//Función Deposit
const onDeposit =() => {
    const currentMoney = JSON.parse(localStorage.getItem("saldo"));
    const sumatoryMoney = currentMoney + valueDeposit;
    if(currentMoney >= limitMoney || sumatoryMoney > limitMoney ){
        buildModalAlert(`El saldo final no puede ser mayor a $${limitMoney}`)
    } 
    if(sumatoryMoney <= limitMoney){
        localStorage.setItem("saldo", JSON.stringify(sumatoryMoney))
    }    
    $depositoNum.value = 0;
    setSaldo()
}

//Función Less Money
const onLessMoney = () => {
    const currentMoney = JSON.parse(localStorage.getItem("saldo"));
    const resultLessMoney = currentMoney - valueLess;
    if(currentMoney <= minimalMoney || resultLessMoney < minimalMoney ){
        buildModalAlert(`El saldo final no puede ser menor a $${minimalMoney}`)
    } 

    if(resultLessMoney > minimalMoney){
        localStorage.setItem("saldo", JSON.stringify(resultLessMoney))
    }
    $lessNum.value = 0
    setSaldo()

}

