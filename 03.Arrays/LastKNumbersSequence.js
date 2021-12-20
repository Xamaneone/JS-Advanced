function my_func(n, k) {
    const myArr = []
    for (let i = 0; n > myArr.length; i++) {
        const tempArr = []
        if (myArr.length == n) {
            break
        }
        if (myArr.length < 2) {
            myArr[myArr.length] = 1
            if (myArr.length == n) {
                break
            }
            myArr[myArr.length] = 1
            if (myArr.length == n) {
                break
            }
        }
        for (let j=myArr.length - 1; tempArr.length < k; j--) {
            const temp = myArr[j]
            tempArr[tempArr.length] = myArr[j]
        }
        let sum = 0
        for (let b of tempArr) {
            if (b != undefined) {
                sum += parseInt(b)
            }
        }
        
        myArr[myArr.length] = sum
    }
    return myArr
}



console.log(my_func(6, 3))
console.log(my_func(8, 2))
console.log(my_func())
console.log(my_func(1, 2))
console.log(my_func(2, 2))