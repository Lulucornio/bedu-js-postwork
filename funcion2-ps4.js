function chunk(array, size) {

  let final = [];
  if (!(size < 1 || size > array.length)){
    for ( let i = 0; i < array.length; i+=size){
    
      final.push(array.slice(i, i+size));
  
    }
  }

  return final;
};

var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]