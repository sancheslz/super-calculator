# Super Calculator

An elegant way to calculate everything

## Technologies

![Badge](https://img.shields.io/static/v1?label=structure&message=HTML5&color=E34F26&style=flat)
![Badge](https://img.shields.io/static/v1?label=layout&message=Bootstrap+4.5&color=563D7C&style=flat)
![Badge](https://img.shields.io/static/v1?label=style&message=CSS3&color=1572B6&style=flat)
![Badge](https://img.shields.io/static/v1?label=logic&message=JavaScript&color=F7DF1E&style=flat)

## Preview

![Super Calculator Screenshot](super-calculator.gif)

## Goals

- Receive two integer values
- Run many different calc operations with them
- Render the result on screen

## How it works

The project is structure in a way that is possible to increase functions, just changing the `script.js` file.

All functions are inside an object called `func_collection`. This object have the mathematic logic and returns the value. The `x` and `y` values are passed by the `calcHandler` function (see below)

```js
// script.js
func_collection = {

    'sum_two_values': (x, y) => {
        return x + y
    },

    // ...
}
```

The operations are defined inside the `operations` array, with an object having:

- `id`: identifier of the operation
- `title`: to display on rendered screen
- `type`: define which number is `x` or `y`
- `func`: which function this operation will use

```js
// script.js
operations = [

    {
        id: 1,
        title: 'Soma (a + b)',
        type: 'a_b',
        func: 'sum_two_values',
    },

    // ...
]
```

The operation object is passed to `cancHandler` function. This function is responsible to define which value is `x` or `y` and pass them to the correct object in `func_collection`.

```js
// script.js
function calcHandler(x, y, operation) {
    if (x === 0 && y === 0) { return null }
    switch (operation.type) {
        case 'a_b':
            return func_collection[operation.func](x, y)
        // ...
        default:
            return 'Operation now allowed'
    }
}
```

## Final Notes

The `script.js` have only seven math calcs, but can grow up easily. To add a new function, just create it in `func_collection` and invoke it in `operations`.
