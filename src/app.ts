import * as notes from './notes'
import * as utils from './utils'
import validator from 'validator'
import chalk from 'chalk'

console.log(); // Buffer

console.log(utils.name);
console.log(utils.add(1, 2));
console.log(notes.getNotes());

const emailToValidate = 'joshua.loftin@aa.com';
console.log(emailToValidate + ' is valid? ' + validator.isEmail(emailToValidate));
console.log(emailToValidate.replace('@', '') + ' is valid? ' + validator.isEmail(emailToValidate.replace('@', '')));

const urlToValidate = 'https://google.com';
console.log(urlToValidate + ' is valid? ' +validator.isURL(urlToValidate));
console.log(urlToValidate.replace('.', '') + ' is valid? ' +validator.isURL(urlToValidate.replace('.', '')))

console.log(); // Buffer