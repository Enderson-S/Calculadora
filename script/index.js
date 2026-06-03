let display = document.getElementById('display')
let numatual = ''
let numanterior = ''
let res = null
let valdigitado = ''
let valdisplay = ''

const limitador = 17

function botao(v) {
valdigitado = v
numatual += valdigitado
display.innerHTML = (numatual)
valdisplay = display.textContent;

if (valdisplay.length > limitador) {
   display.textContent = valdisplay.substring(0, limitador)
}
}

function aritimeticos(a) {
   aritimetico = a
   numanterior = numatual
   numatual = ''
   display.innerHTML += a
}

function apagarultimo() {
   if (numatual.length != '') {
   numatual = numatual.slice(0, -1);
   display.innerHTML = numatual
   }
}

function limpar() {
   numatual = ''
   numanterior = ''
   aritimetico = ''
   display.innerHTML = ''
}

function calcular() {
let natual = Number.parseFloat(numatual)
let nanterior = Number.parseFloat(numanterior)

if (aritimetico === "/" && numatual === "0") {
   alert("Divisao por zero gera resultado infinito")
   limpar()
}

if (numatual === '') {
   natual = nanterior
}

   switch (aritimetico) {
      case '+':
      res = nanterior + natual
      numatual = res
      display.innerHTML = res
      aritimetico = ''
      break

      case '-':
      res = nanterior - natual
      numatual = res
      display.innerHTML = res
      aritimetico = ''
      break

      case '*':
      res = nanterior * natual
      numatual = res
      display.innerHTML = res
      aritimetico = ''
      break

      case '/':
      res = nanterior / natual
      numatual = res
      display.innerHTML = res
      aritimetico = ''
      break
   }

   natual = ''
   nanterior = ''
}