// Helper function to check if a value is an object
function isObject(value) {
    return value !== null && typeof value === 'object';
  }
  
  // myEach function
  function myEach(collection, callback, startIndex = 0) {
    if (Array.isArray(collection) || isObject(collection)) {
      for (let key in collection) {
        if (startIndex > 0) {
          startIndex--;
          continue;
        }
        if (callback(collection[key], key, collection) === false) {
          break;
        }
      }
    }
    return collection;
  }
  
  // myMap function
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (value, key) => {
      result.push(callback(value, key));
    });
    return result;
  }
  
  // Updated myReduce function
  function myReduce(collection, callback, acc) {
    let initialValue = acc !== undefined ? acc : (
      Array.isArray(collection) ? collection[0] : Object.values(collection)[0]
    );
    let startIndex = acc !== undefined ? 0 : 1;
  
    myEach(collection, (value, key) => {
      initialValue = callback(initialValue, value, collection);
    }, startIndex); // Pass startIndex to handle case without initial value
  
    return initialValue;
  }
  
  // myFind function
  function myFind(collection, predicate) {
    let result;
    myEach(collection, (value, key) => {
      if (predicate(value)) {
        result = value;
        return false; // Stop iterating
      }
    });
    return result;
  }
  
  // myFilter function
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (value, key) => {
      if (predicate(value)) {
        result.push(value);
      }
    });
    return result;
  }
  
  // mySize function
  function mySize(collection) {
    if (Array.isArray(collection) || isObject(collection)) {
      return Object.keys(collection).length;
    }
    return 0;
  }
  
  // myFirst function
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // myLast function
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  // myKeys function
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues function
  function myValues(object) {
    return Object.values(object);
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
  };
  