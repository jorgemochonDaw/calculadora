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
  btnDividir,
  btnMas,
  btnMultiplicar,
  btnResta,
  resultado,
} from "./../selectores/selectores.js";

let imprimir = [];

export function n1() {
  imprimir.push(btn1.value);
  mostrar();
}

export function n2() {
  imprimir.push(parseInt(btn2.value));
  mostrar();
}

export function n3() {
  imprimir.push(btn3.value);
  mostrar();
}

export function n4() {
  imprimir.push(btn4.value);
  mostrar();
}

export function n5() {
  imprimir.push(btn5.value);
  mostrar();
}

export function n6() {
  imprimir.push(btn6.value);
  mostrar();
}

export function n7() {
  imprimir.push(btn7.value);
  mostrar();
}

export function n8() {
  imprimir.push(btn8.value);
  mostrar();
}

export function n9() {
  imprimir.push(btn9.value);
  mostrar();
}

export function sumar() {
  imprimir.push(btnMas.value);
  mostrar();
}

export function restar() {
  imprimir.push(btnResta.value);
  mostrar();
}

export function multiplicar() {
  imprimir.push(btnMultiplicar.value);
  mostrar();
}

export function dividir() {
  imprimir.push(btnDividir.value);
  mostrar();
}

export function operaciones(operacion) {
  let part1 = [];
  let part2 = [];
  operacion = imprimir.filter((signo) => signo == "+");
  operacion = imprimir.filter((signo) => signo == "-");
  operacion = imprimir.filter((signo) => signo == "*");
  operacion = imprimir.filter((signo) => signo == "/");
  switch (operacion[0]) {
    case "+":
      let indice = imprimir.findIndex((signo) => signo == "+");
      for (let i = 0; i < imprimir.length; i++) {
        part1.push(imprimir[i]);
        if (indice == i) {
          break;
        }
      }
      imprimir.reverse();
      for (let i = 0; i < imprimir.length; i++) {
        part2.push(imprimir[i]);
        if (indice == i) {
          break;
        }
      }
      part1.pop();
      part2.pop();
      let valorPart1 = part1.join("");
      let valorPart2 = part2.join("");
      resultado.value = parseInt(valorPart1) + parseInt(valorPart2);
      break;
    case "-":
      let indice = imprimir.findIndex((signo) => signo == "-");
      for (let i = 0; i < imprimir.length; i++) {
        part1.push(imprimir[i]);
        if (indice == i) {
          break;
        }
      }
      imprimir.reverse();
      for (let i = 0; i < imprimir.length; i++) {
        part2.push(imprimir[i]);
        if (indice == i) {
          break;
        }
      }
      part1.pop();
      part2.pop();
      let valorPart1 = part1.join("");
      let valorPart2 = part2.join("");
      resultado.value = parseInt(valorPart1) - parseInt(valorPart2);
      break;
    case "*":
      let indice = imprimir.findIndex((signo) => signo == "*");
      for (let i = 0; i < imprimir.length; i++) {
        part1.push(imprimir[i]);
        if (indice == i) {
          break;
        }
      }
      imprimir.reverse();
      for (let i = 0; i < imprimir.length; i++) {
        part2.push(imprimir[i]);
        if (indice == i) {
          break;
        }
      }
      part1.pop();
      part2.pop();
      let valorPart1 = part1.join("");
      let valorPart2 = part2.join("");
      resultado.value = parseInt(valorPart1) * parseInt(valorPart2);
      break;
    case "/":
      let indice = imprimir.findIndex((signo) => signo == "/");
      for (let i = 0; i < imprimir.length; i++) {
        part1.push(imprimir[i]);
        if (indice == i) {
          break;
        }
      }
      imprimir.reverse();
      for (let i = 0; i < imprimir.length; i++) {
        part2.push(imprimir[i]);
        if (indice == i) {
          break;
        }
      }
      part1.pop();
      part2.pop();
      let valorPart1 = part1.join("");
      let valorPart2 = part2.join("");
      resultado.value = parseInt(valorPart1) / parseInt(valorPart2);
      break;
  }
}

export function resetear() {
    resultado.value = "";
    imprimir = [];
}

function mostrar() {
  resultado.value = imprimir.join("");
}
