// Inserte el código aquí
















import { calculadora } from "./calculadora";

function calcular (operacion, num1, num2) {

    if (operacion=== "+") {
         return calculadora.sumar(num1, num2)
    }
    if (operacion=== "-") {
         return calculadora.resta(num1, num2)
    }
    
    if (operacion=== "*") {
         return calculadora.multiplicacion(num1, num2)
    }
    
    if (operacion=== "/") {
         return calculadora.divicion(num1, num2)
    }
    

}
console.log(calcular("*",65,85))
