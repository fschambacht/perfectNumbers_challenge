function isPrime (n) {
    
    if (n === 1) {return false}
    else if (n % 1 === 0 && n % n === 0) {
        
        for (let index = 2; index < n; index++) {
            
            while (n % index === 0) {
                return false
            }   
        }
        return true
    }
}

module.exports = isPrime;