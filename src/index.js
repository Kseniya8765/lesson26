import './scss/main.scss';

import $ from "jquery";


import User from './User.js';
import {multThree, multTwo} from './functions';
import { sortIncrease, sortDecrease } from "./array-utils";

let arr = [4, 23, 54, 67, 1, 2, 7, 90, 5, 12, 34, 21, 8, 18, 30];
console.log(sortIncrease(arr));
console.log(sortDecrease(arr));
console.log(arr);

console.log('hello word');

const foo = (name) => {
    console.log(`hello ${name}`);
}

foo('asdad');
foo('Test');


const layout = `<div class='items'>
    <div class='item'>item</div>
    <div class='item'>item</div>
    <div class='item'>item</div>
</div>`

$('#app').html(layout);




const john = new User('John');

john.printName();

console.log(multThree(3));
console.log(multTwo(5));