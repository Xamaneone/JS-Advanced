function biggerHalf(my_list) {
    my_list.sort((a, b) => a - b)
    return (my_list.slice(my_list.length / 2))
}

biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])