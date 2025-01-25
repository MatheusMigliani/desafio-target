function isFibonacci(num) {
  let a = 0,
    b = 1;
  while (b < num) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b === num;
}

let numero = 21; 
if (isFibonacci(numero)) {
  console.log(`${numero} pertence a sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence a sequência de Fibonacci.`);
}
