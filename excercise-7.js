function urutkanAbjad(str) {
    // you can only write your code here!
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < alphabets.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (alphabets[i] == str[j]) {
                result += str[j]
            }
        }
    }
    return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'