import _ from 'lodash';
import './style.css';
import Notes from './data.csv';

function component() {
    const element = document.createElement("div");

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
console.log(Notes);