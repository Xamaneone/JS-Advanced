function SameNumbers(numbers) {
    str_numbers = numbers.toString();
    one_number = str_numbers[0];
    let all_same = true;
    let total = 0
    for (let i = 0; i < str_numbers.length; i++) {
        if (!isNaN(str_numbers.charAt(i))) {
            total += parseInt(str_numbers.charAt(i));
        }
        if (one_number !== str_numbers[i]) {
            all_same = false;
        }
    }

    console.log(all_same);
    console.log(total);
}

SameNumbers(2222222)
SameNumbers(1234)












