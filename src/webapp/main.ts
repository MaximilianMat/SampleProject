import './style.css'
import { makeRequestA} from './scriptA'
import { makeRequestB}   from './scriptB'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Backend Endpoints</h1>
    <button id="A">Endpoint A</button>
    <button id="B">Endpoint B</button>
  </div>
`

document.querySelector('#A').addEventListener('click', () => makeRequestA())
document.querySelector('#B').addEventListener('click', () => makeRequestB())