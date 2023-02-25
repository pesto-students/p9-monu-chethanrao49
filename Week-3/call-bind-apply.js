
let obj = {
    firstName: "Chethan",
    lastName: "Rao"
  }
  
  function fullName(bike){
    return this.firstName + " " + this.lastName + " likes " + bike
  }
  
  // bind
  let fn = fullName.bind(obj)
  console.log(fn('Jawa'))
  
  // call
  console.log(fullName.call(obj, 'RE')) 
  
  // apply
  console.log(fullName.apply(obj, ['TVS']))
  