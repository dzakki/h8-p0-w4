function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    let alphabetsUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let alphabetsLow = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < kalimat.length; i++) {
        let isExist = false
        for (let j = 0; j < alphabetsUp.length; j++) {
            if (kalimat[i] === alphabetsUp[j]) {
                result += alphabetsLow[j]
                isExist = true
                break;
            }else if(kalimat[i] === alphabetsLow[j]){
                result += alphabetsUp[j]
                isExist = true
                break;
            }
        }
        if (!isExist) {
            result += kalimat[i]
        }
    }
    return result
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"