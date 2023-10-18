import User from './User.js'
import {ADMIN_PASS} from './constants.js'

export default class Admin extends User{
    constructor(...args){
        super(...args);
    }

    getFullName(){
        let data = super.getFullName();
        return `Admin: ${data}`;
    }

    getAdminPass(){
        return ADMIN_PASS;
    }
}