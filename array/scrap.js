const obj ={
    x:1
  }
  
  obj['y'] = 2
  obj['a'] = 2
  
  console.log(obj) 
//   { x: 1, y: 2, a: 2 }

//Write code so key/value pairs cannot be added
const obj ={
    x:1
  }
  
  Object.defineProperty(obj, 'y', {
    writable: false
  })
  
  obj['y'] = 2
  
  console.log(obj)
//   { x: 1 } //cannot add values or edit values to original object
//   { x: 1 } //cannot add values or edit values to original object
//   { x: 1 } //cannot add values or edit values to original object
//   { x: 1 } //cannot add values or edit values to original object
//   { x: 1 } //cannot add values or edit values to original object
//   { x: 1 } //cannot add values or edit values to original object
//   { x: 1 } //cannot add values or edit values to original object
