const primeNumber = require('./isPrime');

function perfectNumbers (n) {
    const perfect = [];

    for (let index = 0; index < n; index++) {
        
        if (primeNumber((2**index)-1)) {
            const perfectNumber = (2**(index-1)) * ((2**index) - 1);
            
            if (perfectNumber < n) {
                perfect.push(perfectNumber);
            } else {
                return console.log(perfect)
            }
        }
    }
}

perfectNumbers(9999999999);