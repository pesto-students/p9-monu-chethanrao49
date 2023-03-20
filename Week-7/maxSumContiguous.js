//implementation of the Kadane's algorithm

function maxSumContiguous(array) {
    let maxSoFar = 0;
    let maxEndingHere = 0;

    array.forEach(element => {
        maxEndingHere = maxEndingHere+element

        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }
    
        if(maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere
        }
    });

    return maxSoFar;
    
}

const array =  [-2, 1, -3, 4, -1, -2, 1, -5, 4];
console.log(maxSumContiguous(array));