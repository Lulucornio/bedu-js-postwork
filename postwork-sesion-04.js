function deepEqual(a, b) {
  //console.log(`Entran ${a} y ${b}`)

    if (typeof a === 'object' && typeof b === 'object'){
      //console.log('Objeto');
      if (Object.keys(a).length === Object.keys(b).length){
        //console.log('misma longitud');
        for (let keys in a){
              equal = deepEqual(a[keys], b[keys]);
              if (equal == false) break; 
          }
      }
      else {
        //console.log('Diferente');
          equal = false;
        }
    }
    else {
      //console.log('Dato primitivo o solo uno es objeto');
      
      equal = a === b ? true : false;
    }
  
    return equal;
  }
  

  // Variables de Prueba
  var john = {
    firstName: 'John',
    lastName: 'Doe'
  }
// Variables complex1 y complex2 son iguales
  var complex1 = {
      key1 : 1,
      key2 :'hola',
      key3 : {
          key31: 'anidada',
          key32: true,
          key33: {
              key331: 'más anidada',
              key332: 67
          }
      },
      key4: false
  };

  var complex2 = {
    key1 : 1,
    key2 :'hola',
    key3 : {
        key31: 'anidada',
        key32: true,
        key33: {
            key331: 'más anidada',
            key332: 67
        }
    },
    key4: false
};
// En esta la estructura es igual pero cambia un valor 
  var complex3 = {
    key1 : 1,
    key2 :'hola',
    key3 : {
        key31: 'anidada123',
        key32: true,
        key33: {
            key331: 'más anidada',
            key332: 67
        }
    },
    key4: false
};

// En esta todo es igual pero cambia el valor de una llave
var complex4 = {
  key1 : 1,
  key2 :'hola',
  key75 : {
      key31: 'anidada',
      key32: true,
      key33: {
          key331: 'más anidada',
          key332: 67
      }
  },
  key4: false
};

  
  console.log('Test 1:', deepEqual(1, 1)) // true
  console.log('Test 2:', deepEqual(1, '1')) // false
  console.log('Test 3:', deepEqual(john, john)) // true
  console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
  console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

  console.log('Test 6:', deepEqual(complex1, complex2 )) // true
  console.log('Test 7:', deepEqual(complex1, complex3)) // false
  console.log('Test 8:', deepEqual(complex1, complex4)) // false