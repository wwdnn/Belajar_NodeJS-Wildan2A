// Function 
// const square function (x) {
//   return x * x 
// }

// Arrow Function
// Version_1
const square = (x) => {
  return x * x
}

// Version_2
const squareAlt = (x) => x * x 

console.log(squareAlt(2))


const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList(){
    console.log('Guest List for ' + this.name)

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}

event.printGuestList();