const users = [{
  name: 'Andrew Mead',
  age: 28
},{
  name: 'George Hudson',
  age: 72
},{
  name: 'Clay Klay',
  age: 46
}]


const user = users.find((user) => user.name === 'George Hudson')

console.log(user)