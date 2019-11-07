function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let nums = []
    for (let i = 1; i <= angka; i++) {
        let num;
        if (angka % i == 0) {
            num = angka / i
            // for (let j = 0; j < nums.length; j++) {
            //     if (nums[j][1] == num || nums[j][1] == i) {
            //         bool = true
            //     }
            // }
            // // console.log(i, angka / i)
            // if (!bool) {
            //     nums.push([i, num])   
            // }
            nums.push([ String(i) + String(num)])
        }
    }
    let result = []
    for (let i = 0; i < nums.length; i++) {
        // console.log( String(nums[i]).length)
        result.push(String(nums[i]).length)
        let temp;
        for (let j = 0; j < result.length; j++) {
            if (result[j] > result[j + 1]) {
                temp = result[j]
                result[j] = result[j + 1]
                result[j + 1] = temp
            }
        }
    }
    return result[0]
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2


/**
 *      #        #      #       @      #      #     #
 *     #  #      # #    #       #     #  #      ###
 *    ######     #  #   #       #    ######      #
 *   #      #    #   #  #       #   #      #     #
 *  #        #   #    # #   ####   #        #    #
*/