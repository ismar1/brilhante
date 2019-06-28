document.addEventListener('DOMContentLoaded', function () {
  // Função do cálculo
  const handle = value => {
    document.querySelector('#custoResul').innerHTML = 'Custo: R$' + parseFloat(value).toFixed(2)
  
    value = parseFloat(value)
    venda = value + (margem * value) / 100
    vendaDesconto = parseFloat(venda - (10 * venda) / 100).toFixed(2)

    document.querySelector('#vendaResul').innerHTML = 'Venda: R$' + parseFloat(venda).toFixed(2)
    document.querySelector('#vendaDesconto').innerHTML = '-10%: R$' + vendaDesconto
    document.querySelector('#lucro').innerHTML = 'Lucro sem desconto: R$' + parseFloat(venda - value).toFixed(2)
    document.querySelector('#lucroDesconto').innerHTML = 'Lucro com desconto: R$' + parseFloat(vendaDesconto - value).toFixed(2)
  }

  // Função para limpar campos
  document.querySelector('#clear2').addEventListener('click', function () {
    document.querySelector('#custo').innerHTML = ''
  })

  // Tratamento do código e impressão dos resultados
  document.querySelector('#btn').addEventListener('click', function () {
    margem = parseInt(document.querySelector('#margem').value)
    valor = parseInt(document.querySelector('#valor').value)
    codigo = document.querySelector('#custo').value
    codigo = codigo.toLowerCase().split('')
    custo = ''
    brilhante = ['b', 'r', 'i', 'l', 'h', 'a', 'n', 't', 'e', 'x']

    codigo.forEach(x => {
      brilhante.forEach((e, i) => {
        if (x == e) {
          valueCurrent = ++i

          if (valueCurrent == 10) {
            custo += '0'
          } else {
            custo += valueCurrent.toString()
          }
        }
      })
    })
    
    codigoBoolean = codigo != ''

    if (valor && codigoBoolean) {
      alert('Preencha APENAS um valor OU um código')
    } else {
      if (codigoBoolean) {
        handle(custo)
      } else if (valor) {
        handle(valor)
      }
    }
  })
})