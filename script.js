document.addEventListener('DOMContentLoaded', function() {
  // Função do cálculox
  const calculate = value => {
    document.querySelector('#custoResul').innerHTML = 'Custo: R$' + parseFloat(value).toFixed(2)
  
    value = parseFloat(value)
    venda = value + (margem * value) / 100
    vendaDesconto = parseFloat(venda - (10 * venda) / 100).toFixed(2)

    document.querySelector('#vendaResul').innerHTML = 'Venda: R$' + parseFloat(venda).toFixed(2)
    document.querySelector('#vendaDesconto').innerHTML = '-10%: R$' + vendaDesconto
    document.querySelector('#lucro').innerHTML = 'Lucro sem desconto: R$' + parseFloat(venda - value).toFixed(2)
    document.querySelector('#lucroDesconto').innerHTML = 'Lucro com desconto: R$' + parseFloat(vendaDesconto - value).toFixed(2)
  }

  // Conversão de código para número e impressão dos resultados
  const execute = () => {
    margem = (document.querySelector('#input-peca').checked) ? 60 : 40
    valor = parseInt(document.querySelector('#valor').value)
    codigo = document.querySelector('#custo').value
    codigo = codigo.toLowerCase().split('')
    custo = ''
    brilhante = ['b', 'r', 'i', 'l', 'h', 'a', 'n', 't', 'e', 'x']

    // Conversão do código
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

    if (custo.split('').length == codigo.length) {
      if (valor && codigoBoolean) {
        alert('Preencha APENAS um valor OU um código')
      } else {
        if (codigoBoolean) {
          calculate(custo)
        } else if (valor) {
          calculate(valor)
        } else alert('Preencha um dos campos')
      }
    } else alert('Código inválido')
  }

  // Calcula ao pressionar enter
  document.querySelector('#valor').addEventListener('keypress', e => {
    if (e.keyCode == 13)
      execute()
  })
  document.querySelector('#custo').addEventListener('keypress', e => {
    if (e.keyCode == 13)
      execute()
  })

  // Calcula ao clicar no botão
  document.querySelector('#btn').addEventListener('click', function() {
    execute()
  })

  // Ações para limpar e focar os campos
  document.querySelector('#clear').addEventListener('click', function() {
    const valor = document.querySelector('#valor')
    valor.value = ''
    valor.focus()
  })
  document.querySelector('#clear2').addEventListener('click', function() {
    const custo = document.querySelector('#custo')
    custo.value = ''
    custo.focus()
  })
})
