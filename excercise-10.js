function changeMe(arr) {
    // you can only write your code here!
    if (!arr.length) {
        return ''
    }
    let objectOfPeople = []
    for (let i = 0; i < arr.length; i++) {
        let objectOfTemp = {}
        objectOfTemp.firstName = arr[i][0]
        objectOfTemp.lastName = arr[i][1]
        objectOfTemp.gender = arr[i][2]
        objectOfTemp.age = (arr[i][3]) ? (2019 - arr[i][3]) : 'Invalid Birth Year'
        // console.log(objectOfTemp)
        objectOfPeople.push(objectOfTemp)
    }
    console.log(objectOfPeople)
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""