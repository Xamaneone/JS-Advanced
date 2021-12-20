function largest(a, b, c) {
    let result;
    if (a > b) {
        if (a > c) {
            result = a;
        } else {
            result = c;
        } 
    } else if (b > c) {
        result = b;
    } else {
        result = c;
    }

    console.log('The largest number is ' + result + '.')
}

largest(1, 2, 3)
largest(2, 1, 3)
largest(3, 2, 1)
largest(2, 3, 1)
