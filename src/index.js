import _ from 'lodash';
import './style.css';
import Notes from './data.csv';
import PrintMe from './print';
import printMe from './print';

function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
console.log(Notes);