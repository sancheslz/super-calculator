// Collection of all math functions used
func_collection = {

    'sum_two_values': (x, y) => {
        return x + y
    },

    'sub_two_values': (x, y) => {
        return x - y
    },

    'mul_two_values': (x, y) => {
        return x * y
    },

    'div_two_values': (x, y) => {
        if (y === 0) { return 'Divisão por Zero' }
        return x / y
    },

    'square_value': (x) => {
        return x ** 2
    },

    'integer_divisors_of_value': (x) => {
        let data = []
        for (let i = 1; i <= x; i++) {
            if (x % i === 0) { data.push(i) }
        }
        return `${data.join(', ')} (${data.length})`
    },

    'factorial_of_value': (x) => {
        if (x > 21) { return 'Número muito grande' }
        total = 1
        for (let i = 1; i <= x; i++) {
            total *= i
        }
        return total
    },

}

// A prettier way to show numerics results
function prettierResult(result) {
    if (typeof (result) === 'number') {
        if (result % 1 != 0) {
            result = result.toFixed(2)
        }
        result = new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(result)
    }
    return result
}

// According with the type of operations, change the parameters order
function calcHandler(x, y, operation) {
    if (x === 0 && y === 0) { return null }
    switch (operation.type) {
        case 'a_b':
            return func_collection[operation.func](x, y)
        case 'b_a':
            return func_collection[operation.func](y, x)
        case 'a':
            return func_collection[operation.func](x)
        case 'b':
            return func_collection[operation.func](y)
        default:
            return 'Operation now allowed'
    }
}

// Collection of Operations Used
operations = [

    {
        id: 1,
        title: 'Soma (a + b)',
        type: 'a_b',
        func: 'sum_two_values',
    },

    {
        id: 2,
        title: 'Subtração 1 (a - b)',
        type: 'a_b',
        func: 'sub_two_values',
    },

    {
        id: 3,
        title: 'Subtração 2 (b - a)',
        type: 'b_a',
        func: 'sub_two_values',
    },

    {
        id: 4,
        title: 'Multiplicação (a x b)',
        type: 'a_b',
        func: 'mul_two_values',
    },

    {
        id: 5,
        title: 'Divisão 1 (a / b)',
        type: 'a_b',
        func: 'div_two_values',
    },

    {
        id: 6,
        title: 'Divisão 2 (b / a)',
        type: 'b_a',
        func: 'div_two_values',
    },

    {
        id: 7,
        title: 'Quadrado a (a²)',
        type: 'a',
        func: 'square_value',
    },

    {
        id: 8,
        title: 'Quadrado b (b²)',
        type: 'b',
        func: 'square_value',
    },

    {
        id: 9,
        title: 'Divisores Inteiros de a',
        type: 'a',
        func: 'integer_divisors_of_value',
    },

    {
        id: 10,
        title: 'Divisores Inteiros de b',
        type: 'b',
        func: 'integer_divisors_of_value',
    },

    {
        id: 11,
        title: 'Fatorial de a (a!)',
        type: 'a',
        func: 'factorial_of_value',
    },

    {
        id: 12,
        title: 'Fatorial de a (b!)',
        type: 'b',
        func: 'factorial_of_value',
    },

]


function render() {

    valueA = parseInt(document.getElementById('value_a').value) || 0
    valueB = parseInt(document.getElementById('value_b').value) || 0

    results_area = document.getElementById('results')
    results_area.innerHTML = ''

    operations.forEach(operation => {

        // Create the card element
        card = document.createElement('div')
        card.classList = 'card col-lg-4 col-md-6 col-sm-12'

        card_body = document.createElement('div')
        card_body.classList = 'card-body'

        // Define the Card Title
        card_title = document.createElement('div')
        card_title.classList = 'card-title'
        card_title.innerText = operation.title

        // Define the Card Value Area
        card_value = document.createElement('div')
        card_value.classList = 'card-value'

        // Pass to Card Value Are the Operation Result
        card_result = document.createElement('input')
        card_result.disabled = true
        card_result.value = prettierResult(calcHandler(valueA, valueB, operation))
        card_value.appendChild(card_result)

        // Render the Cards
        card_body.appendChild(card_title)
        card_body.appendChild(card_value)
        card.appendChild(card_body)
        results_area.appendChild(card)

    });
}


window.addEventListener('load', () => {

    valueA = document.getElementById('value_a')
    valueB = document.getElementById('value_b')
    valueA.focus()

    valueA.addEventListener('input', render)
    valueB.addEventListener('input', render)

    render()

})

