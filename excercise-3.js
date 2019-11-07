    function cariMedian(arr) {
        // you can only write your code here!
        for (let i = 0; i < arr.length; i++) {
            let temp;
            for (let j = 0; j < arr.length - i; j++) {
                if (arr[j] > arr[j+1] && arr[j+1] !== undefined) {
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
            
        }
        let medianTemp,
            median;
        if ( arr.length % 2 == 0 ) {
            medianTemp = (arr.length / 2) - 1
            median = (arr[medianTemp] + arr[medianTemp+1]) / 2
        }else{
            medianTemp = (arr.length+1) / 2
            median = arr[medianTemp-1]
        }
        return median
    }

    // TEST CASES
    console.log(cariMedian([1, 2, 3, 4, 5])); // 3
    console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
    console.log(cariMedian([3, 4, 7, 6, 10])); // 6
    console.log(cariMedian([1, 3, 3])); // 3
    console.log(cariMedian([7, 7, 8, 8])); // 7.5