function smallestTwoNumbers(my_list) {
    my_list.sort((a, b) => a - b )
    console.log(my_list.slice(0, 2))
}

smallestTwoNumbers([30, 15, 50, 5])

smallestTwoNumbers([3, 0, 10, 4, 7, 3])