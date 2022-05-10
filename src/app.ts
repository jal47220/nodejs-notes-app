import * as notes from './notes'
import * as utils from './utils'
import validator from 'validator'

console.log();
console.log(utils.name);
console.log(utils.add(1, 2));
console.log(notes.getNotes());
console.log(validator.isEmail('joshua.loftin@aa.com'))
console.log(validator.isEmail('joshua.loftinaa.com'))
console.log(validator.isURL('https://google.com'))
console.log(validator.isURL('https://googlecom'))
console.log();