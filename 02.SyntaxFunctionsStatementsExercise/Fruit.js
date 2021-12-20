function fruit_cost_calculator(fruit, weight_grams, price_per_kg) {
    weight_kg = weight_grams/1000
    price = price_per_kg*weight_kg

    console.log(`I need $${price.toFixed(2)} to buy ${weight_kg.toFixed(2)} kilograms ${fruit}.`)
}

fruit_cost_calculator('orange', 2500, 1.80)
fruit_cost_calculator('apple', 1563, 2.35)
