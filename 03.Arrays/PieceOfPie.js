function pieceOfPie(my_arr, firstFlavour, secondFlavour) {
    return my_arr.slice(my_arr.indexOf(firstFlavour), my_arr.indexOf(secondFlavour) + 1)
}

pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')

pieceOfPie(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')