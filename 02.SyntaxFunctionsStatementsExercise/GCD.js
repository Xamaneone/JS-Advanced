// JavaScript

function GCD(a, b) {
    let result = Number
    for (let i = 10; 2; i--) {
        if (a % i == 0) {
            if (b % i == 0) {
                result = i;
                break;
                }
        }
    }

    console.log(result)
}

GCD(15, 5)

// // Python

// def GCD(a, b):
//     for i in range(10, 2, -1):
//         if a % i == 0:
//             if a % b == 0:
//                 result = i:
//                 break
//     print(result)