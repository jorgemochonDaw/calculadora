import {
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btnMas,
  btnIgual,
  btnResta,
  btnMultiplicar,
  btnDividir,
  btnReset
} from "./../selectores/selectores.js";
import {
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
  n8,
  n9,
  sumar,
  restar,
  multiplicar,
  dividir,
  operaciones,
} from "./../funciones/funciones.js";

class Calculadora {
  constructor() {
    this.eventos();
  }

  eventos() {
    btn1.addEventListener("click", n1);
    btn2.addEventListener("click", n2);
    btn3.addEventListener("click", n3);
    btn4.addEventListener("click", n4);
    btn5.addEventListener("click", n5);
    btn6.addEventListener("click", n6);
    btn7.addEventListener("click", n7);
    btn8.addEventListener("click", n8);
    btn9.addEventListener("click", n9);
    btnMas.addEventListener("click", sumar);
    btnResta.addEventListener("click", restar);
    btnMultiplicar.addEventListener("click", multiplicar);
    btnDividir.addEventListener("click", dividir);
    btnIgual.addEventListener("click", operaciones);
    btnReset.addEventListener("click",resetear)
  }
}

export default Calculadora;
