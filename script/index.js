let display = document.getElementById('display')
let numatual = ''
let numanterior = ''
let res = null

function botao(v) {
numatual += v
display.innerHTML = (numatual)
}

function aritimeticos(a) {
   aritimetico = a
   numanterior = numatual
   numatual = ''
   display.innerHTML += a
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
}