import {chauffer} from '../function/chauffer.js'
import {remplir} from '../function/remplir.js'

class Bouilloire {
    constructor (eau, temperature) {
        this.eau = eau
        this.temperature = temperature
    }
    chauffer()
    remplir()
}

let bouilloire = new Bouilloire ("vide", 0)

// export {Bouilloire, eau, temperature, bouilloire}