//  import { regions } from "./constants";

import { fetchCountries } from './services.js'
import { renderCountries } from './utils.js'

document.addEventListener('DOMContentLoaded', function () {
  console.log('EL DOM se cargo totalmente')

  fetchCountries()
    .then(response => renderCountries(response))
})

