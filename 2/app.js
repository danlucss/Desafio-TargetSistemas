var num = require('fs').readFileSync('stdin.txt', 'utf8');

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let txt = '';

for (let i = 0; i < num; i++) {

    txt += fibonacci(i) + ' ';
}

console.log(txt.substring(0, txt.length - 1));