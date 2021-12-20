function cookNum(number, ...args) {
    for (let i = 0; i < args.length-1 + 1; i++) {
        switch (args[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3
                break;
            case 'fillet':
                number -= number * 0.20
        }
        console.log(number)
    }
}

cookNum('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookNum('9', 'dice', 'spice', 'chop', 'bake', 'fillet')


