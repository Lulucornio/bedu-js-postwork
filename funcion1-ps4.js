function deepEqual(a, b) {
  let equal;

  if (typeof a === 'object' && typeof b === 'object'){
    if (Object.keys(a).length === Object.keys(b).length){
     
      for (let keys in a){
            equal = deepEqual(a[keys], b[keys]);
            if (!equal) break; 
        }
    }
    else {
        equal = false;
      }
  }
  else {
    equal = a === b ? true : false;
  }

  return equal;
}


var john = {
  firstName: 'John',
  lastName: 'Doe'
}


console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

