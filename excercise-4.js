    function cariModus(arr) {
        let numbers = []
        let bool = false
        for (let i = 0; i < arr.length; i++) {
            bool = false
            for (let j = 0; j < numbers.length; j++) {
                if (arr[i] == numbers[j][1]) {
                    numbers[j][0]++
                    bool = true
                    break
                }
            }
            if(bool == false){
                numbers.push([1, arr[i]])
            }
        }
        // return numbers
        for (let i = 0; i < numbers.length; i++) {
            let temp;
            for (let j = 0; j < numbers.length - i; j++) {
                if (numbers[j] > numbers[j+1]) {
                    temp = numbers[j]
                    numbers[j] = numbers[j+1]
                    numbers[j+1] = temp
                }
            }
        }
        return numbers
        if (numbers.length == 1 ||  numbers[numbers.length-1][0] == 1) {
            return -1
        }
        return  numbers[numbers.length-1][1]
    }

    // TEST CASES
    console.log(cariModus([10, 4, 5, 2, 4])); // 4
    console.log(cariModus([5, 10, 10, 6, 5])); // 5
    console.log(cariModus([10, 3, 1, 2, 5])); // -1
    console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
    console.log(cariModus([7, 7, 7, 7, 7])); // -1