document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#valor').focus()

  // Função do cálculo e impressão dos resultados
  const calculate = value => {
    value = parseFloat(value)
    venda = value + (margem * value) / 100
    vendaDesconto = parseFloat(venda - (10 * venda) / 100).toFixed(2)
    
    // Impressão dos resultados
    document.querySelector('#custoResul').innerHTML = 'Custo: R$' + parseFloat(value).toFixed(2)
    document.querySelector('#vendaResul').innerHTML = 'Venda: R$' + parseFloat(venda).toFixed(2)
    document.querySelector('#vendaDesconto').innerHTML = '-10%: R$' + vendaDesconto

    document.querySelector('#lucro').innerHTML = 'Lucro sem desconto: R$' + parseFloat(venda - value).toFixed(2)
    document.querySelector('#lucroDesconto').innerHTML = 'Lucro com desconto: R$' + parseFloat(vendaDesconto - value).toFixed(2)

    document.querySelector('#back-venda').className += ' py-1'
  }

  // Conversão de código para número e execução dos cálculos
  const execute = () => {
    margem = (document.querySelector('#input-peca').checked) ? 60 : 40
    valor = parseFloat(document.querySelector('#valor').value)
    codigo = document.querySelector('#custo').value
    codigo = codigo.toLowerCase().split('')
    custo = ''
    brilhante = ['b', 'r', 'i', 'l', 'h', 'a', 'n', 't', 'e', 'x']

    // Conversão do código
    codigo.forEach(x => {
      if (x == ',' || x == '.')
        custo += '.'
      else {
        // Para cada caracter dado pelo usuário é comparado com o array 'brilhante' para que seja feita a conversão, caso seja igual
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
      }
    })

    codigoBoolean = codigo != ''

    // Se o length do código definido pelo usuário é igual o resultado da conversão (custo)
    if (custo.split('').length == codigo.join('').toString().length) {
      if (valor && codigoBoolean)
        alert('Preencha APENAS um valor OU um código')
      else {
        if (codigoBoolean)
          calculate(custo)
        else if (valor)
          calculate(valor)
        else alert('Preencha um dos campos')
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
