function isPrime (n) {
    if (n === 1) {return false}
    else if (n % 1 === 0 && n % n === 0) {
        
        for (let index = 2; index < n; index++) {
            
            while (n % index === 0) {
                return false
            }   
        } return true
    }
}

function perfectNumbers (n = document.getElementById("input").value) {
    if(isNaN(n)) {
        return document.getElementById("section-b__result").innerHTML = `The perfect numbers have to be a number`;
    } else if (n <= 5) {
        return document.getElementById("section-b__result").innerHTML = `The perfect numbers less than ${n} no exist because perfect numbers are positive integer and start in 6`;
    } else {
        const perfect = [];

        for (let index = 0; index < n; index++) {
            
            if (isPrime((2**index)-1)) {
                const perfectNumber = (2**(index-1)) * ((2**index) - 1); // formula de euclides
            
                if (perfectNumber <= n) {
                    perfect.push(perfectNumber);
                } else {
                    return document.getElementById("section-b__result").innerHTML = `The perfect numbers less than ${n} is: <br> ${perfect}`;
                }
            }
        }
    }
}