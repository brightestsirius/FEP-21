import {ADMIN_PASS, STUDENT_PASS} from './js/constants.js'
import {sum, f1} from './js/utils.js';
import User from './js/User.js';
import Admin from './js/Admin.js'

console.log(ADMIN_PASS, STUDENT_PASS);
console.log(sum(ADMIN_PASS, STUDENT_PASS));
console.log(sum(10,20,30));
console.log(f1(10));

let TarasSheva = new Admin(`Taras`, `Sheva`);
console.log(TarasSheva);
console.log(TarasSheva.getFullName());
console.log(TarasSheva.getAdminPass());

let YevhenKonovaletz = new User(`Yevhen`, `Konovaletz`);
console.log(YevhenKonovaletz);
console.log(YevhenKonovaletz.getFullName());

