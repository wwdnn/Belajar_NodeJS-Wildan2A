const greeter = (name = 'user', age) => {
  console.log('Hello '+ name)
}

greeter('Wildan')
greeter()


const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock)
}
transaction('Order')