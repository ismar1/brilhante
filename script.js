document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn').addEventListener('click', function () {
    margem = parseInt(document.querySelector('#margem').value)
    codigo = document.querySelector('#custo').value
    codigo = codigo.toLowerCase().split('')
    custo = ''

    codigo.forEach(el => {
      switch (el) {
        case 'b':
          custo += '1'
          break
        case 'r':
          custo += '2'
          break
        case 'i':
          custo += '3'
          break
        case 'l':
          custo += '4'
          break
        case 'h':
          custo += '5'
          break
        case 'a':
          custo += '6'
          break
        case 'n':
          custo += '7'
          break
        case 't':
          custo += '8'
          break
        case 'e':
          custo += '9'
          break
        default:
          custo += '0'
      }
    })
    
    if (codigo.length >= 1) {
      document.querySelector('#custoResul').innerHTML = 'Custo: R$' + parseFloat(custo).toFixed(2)

      custo = parseInt(custo)
      venda = custo + (margem * custo) / 100
      vendaDesconto = parseFloat(venda - (10 * venda) / 100).toFixed(2)

      document.querySelector('#vendaResul').innerHTML = 'Venda: R$' + parseFloat(venda).toFixed(2)
      document.querySelector('#vendaDesconto').innerHTML = '-10%: R$' + vendaDesconto
      document.querySelector('#lucro').innerHTML = 'Lucro sem desconto: R$' + parseFloat(venda - custo).toFixed(2)
      document.querySelector('#lucroDesconto').innerHTML = 'Lucro com desconto: R$' + parseFloat(vendaDesconto - custo).toFixed(2)
    }
  })
})