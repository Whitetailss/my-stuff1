// const user = {
//     name: 'Andrew',
//     age: 27,
//     location: 'Philadelphia',
//     birth: 1997,
//     mumName: 'Tiffany'
//   }
//   // The line below uses destructuring
// const {mumName, birth} = user

// console.log(mumName)
// console.log(birth)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2,
    size: 'L',
    origin: 'China'
}

const transaction = (type, {size, origin }) => {
    console.log(type, size, origin)
}

transaction('return', product )
