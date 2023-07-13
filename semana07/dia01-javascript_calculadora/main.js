let numeroActual = '0'
let operador = ''
let operando = ''

const inputDisplay = document.querySelector('.display')

// console.log(inputDisplay)

const buttons = document.querySelectorAll('button')

buttons.forEach(function (button){
    button.addEventListener('click', function(event){
        const buttonText = event.target.textContent
        inputDisplay.value = buttonText

        if('+-*'.includes(buttonText)){
            operador = buttonText
            operando = Number(numeroActual)

        } else if(buttonText === '='){

            if(operador === '+'){
                numeroActual = Number(operando) + Number(numeroActual)
            } else if(operador === '-'){
                numeroActual = Number(operando) + Number(numeroActual)
            } else if(operador === '*'){
                numeroActual = Number(operando) + Number(numeroActual)
            }

        }else{
            numeroActual = numeroActual + Number(buttonText)
            inputDisplay.value = numeroActual
        }
    })

})