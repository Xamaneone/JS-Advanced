function add_remove(operations) {
    let result = [];
    let number = 1;

    operations.forEach((el) => {
        if (el === 'add') {
            result.push(number);
        } else {
            result.pop();
        }
        number += 1
    })

    if (0 !== result.length) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty')
    }

}

add_remove(['add',
    'add',
    'add',
    'add'])

add_remove(['add',
    'add',
    'remove',
    'add',
    'add'])

add_remove(['remove',
    'remove',
    'remove'])