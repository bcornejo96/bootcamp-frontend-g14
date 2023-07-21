// import constants from './constants.js'
import { fetchCountries } from './services.js'
import { renderCountries } from './utils.js'

const searchInput = document.querySelector('.app__search')

let countryData = []

searchInput.addEventListener('input', (event) => {
  const value = event.target.value

  const filteredCountries = countryData.filter(country => {
    const loweredName = country.name.common.toLowerCase()
    const joinedCapital = country.capital.join(',') // Une todos los elementos de un arreglo en una cadena de texto
    // console.log(joinedCapital)
    const loweredCapital = joinedCapital.toLowerCase()
    const loweredValue = value.toLowerCase()

    // DONE: Adicionalmente necesitamos filtrar por capital

    return loweredName.includes(loweredValue) || loweredCapital.includes(loweredValue)
  })

  renderCountries(filteredCountries)
})

document.addEventListener('DOMContentLoaded', async () => {
  // console.log('EL DOM se cargo totalmente')

  // fetchCountries()
  //   .then(response => renderCountries(response))

  const data = await fetchCountries()

  countryData = data

  renderCountries(data)
})
