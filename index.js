// Your code here
//  mapToNegativize returns an array with all values made negative
function mapToNegativize(array){
    const x =[]
    for(let i=0; i<array.length; i++){
        x.push(array[i]*-1)
    }
    return x
}

//mapToNoChange returns an array with the original values
function mapToNoChange(array) {
    const y = []
    for (let i=0; i<array.length; i++) {
        y.push(array[i])
    }
    return y
}

//mapToDouble returns an array with the original values multiplied by 2
function mapToDouble(array) {
    const z = []
    for (let i=0; i<array.length; i++) {
        z.push(array[i]*2)
    }
    return z
}

//mapToSquare returns an array with the original values squared
function mapToSquare(array){
    const a = []
    for (let i=0; i<array.length;i++){
        a.push(array[i]*array[i])
    }
    return a
}

//reduceToTotal returns a running total when not given a starting point
function reduceToTotal(array, sp=0){
    for(const i in array){
        sp+=array[i]
    }
    return sp
}

//reduceToAllTrue returns true when all values are truthy
function reduceToAllTrue(array){
    for(const i in array){
        if (array[i]===false){
            return false
        }
    }
    return true
}

//reduceToAnyTrue returns true when a true value is present
function reduceToAnyTrue(array) {
    for (const i in array) {
        if (array[i]) {
            return true
        }
    }
    return false
}