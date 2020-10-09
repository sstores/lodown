'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: takes a value and returns that value unchanged
 * 
 * @param{*} value : the value to be returned from this function.
 * 
 * @returns {*} : the value unchanged.
 */

function identity(value){
    return value;
}

module.exports.identity = identity;


/**
 * typeOf: takes a value and returns the data type of that value as a string.
 * 
 * @param{*} value : determine data type of this value.
 * 
 * @return {string} : the data type of value.
 * 
 */
 
function typeOf(value){
    if(Array.isArray(value)){
        return "array";
    }else if(value === null){
        return "null";
    }else if (typeof values){
        return typeof value;
    }
    }

 module.exports.typeOf = typeOf;
 
 
 /**
  * first: will take an array and a number and return the first element in the array, or an empty array if the input is not an array. Including a num argument will return num many elements starting from the beginning of tha array.
  * 
  * @param{array} array : return a number of values from this array.
  * @param{number} num : determines how many elements to return from the array.
  * 
  * @return {array} : a number of elements from the array provided. If no num is provided, the function will return the first element.
  * 
  */

function first(array, num){
    //determine if array is an array and if a number has been provided
    if(!Array.isArray(array)){
        //if array is not array return an empty array
        return [];
    }else if(typeof num !== "number" || num.length < 1){
       
        //
        return array[0];
    }else{
        return array.splice(0, num);
    }
}

 module.exports.first = first;
 
 
 /**
  * last: will take an array and a number and return the last element in the array, or an empty array if the input is not an array. Including a num argument will return num many elements from the end of tha array.
  * 
  * @param{array} array : Pull from this array to return a number of values.
  * @param{number} number : determines how many elements to return from the array.
  * 
  * @return {array} :  a number of elements from the array provided. If no num is provided, the function will return the last element.
  * 
  **/
  
 function last (array, number){
    if(!Array.isArray(array)){
        return [];
    }else if(typeof number !== "number"){
        return array[array.length - 1];
    }else if(number > array.length){
        return array;
    }else{
        return array.slice(array.length - number);
    }
}
 module.exports.last = last;
 
  
 /**
  * indexOf: method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  * 
  * @param{array} array : array in which to look for value
  * @param{*} value : value to search
  * 
  * @return {} : will return the index of array where the value is located, or will return -1 if value is not present.
  * 
  **/
  
  function indexOf(array, value){
    
    for (let i = 0; i < array.length; i++){
        if (value === array[i]){
            return i;
        }
    }
        return -1;
}

  module.exports.indexOf = indexOf;
  
  
  /**
   * contains: will check if the given value is contained in the array
   * 
   * @param{array} array : array in which t search for value.
   * @param{*} value : the value to search for.
   * 
   * @return {boolean} true or false: if value is contained in the given array the function will return true, if not, false.
   *
   * */
   
    function contains(array, value){
    return array.includes(value) ? true : false;
    }

     module.exports.contains = contains;
     
   
  /**
   * unique: produces a new version of array with all duplicates removed.
   * 
   * @param{array} array : array to remove duplicates from
   * 
   * @return {array} : function will return a new array with unique values from the input array
   *
   * */
   
   function unique(array){
     return array.filter((a, b) => array.indexOf(a) === b);
    }
 
     module.exports.unique = unique;
   
   
  /**
   * filter: will loop through the given array and call the given function on each item in the array, and return the "true" items in an array.
   * 
   * @param{array} : array to loop through and filter
   * @param{function} func: function to be called on each element in the array
   * 
   * @return {array} : function will return an array of all values that return true from the callback function.
   *
   * */
   
   function filter (array, func){
    var newArray = [];

    each(array, function(e, i, array){
            var result = func(e, i, array);
            if (result === true) {
                newArray.push(e);
            }
        });
        return newArray;
     }
  
     module.exports.filter = filter;
     
     
  /**
   * reject: will loop through the given array and call the given function on each item in the array, and return the "false" items in an array.
   * 
   * @param{array} array : array to loop through and filter
   * @param{function} func : function to be called on each element in the array
   * 
   * @return {array} :  function will return an array of all values that return false from the callback function.
   *
   * */
   
    function reject (array, func){
     var newArray = [];

    each(array, function(e, i, array){
        var result = func(e, i, array);
        if (result === false) {
            newArray.push(e);
        }
    });
    return newArray;
    }
    
     module.exports.reject = reject;
     
     
  /**
   * partition: will loop through the given array and call the given function on each item in the array, and return an array with two sub array, one for elements resulting in true, and one for elements resulting in false.
   * 
   * @param{array} array : array to loop through and partition
   * @param{function} func : function to be called on each element in the array
   * 
   * @return {array} : an array with two sub arrays. One that contains all the values for which func returned something truthy and another that contains all the values for which func returned something falsy
   * 
   * */
   
    function partition (array, func){
    
    let newArray = [[], []];
    each(array, function(e, key, array){
                var result = func(e, key, array);
        if (result === true) {
            newArray[0].push(e);
        }else if (result === false){
            newArray[1].push(e);
        }
    });
    return newArray;
    }
   
   module.exports.partition = partition;
   
   
  /**
   * map: will take a collection and call a function for each element in the collection, then return a new array of the function return values.
   * 
   * @param{array or object} collection: array to loop through and pass to the function
   * @param{function} action: function to be called on each element in the collection.
   * 
   * @return {array} : will return an array holding the return values from the function passed to the collection elements.
   *
   * */
   
   function map (collection, action){
    //create new array variable and assign it to an ampty array
    let newArray = [];
    //check if collection is an array
    if(Array.isArray(collection)){
        //if array, loop through 
        for (let i = 0; i < collection.length; i++){
            //pass each element of the array to the callback function
            newArray.push(action(collection[i], i, collection));
        }
    //check if the collection is an object
    } else if (!Array.isArray(collection) && typeof collection === "object"){
        //if true loop throu with fir in loop
        for (let key in collection){
            //push ach property though the function and into the new array
            newArray.push(action(collection[key], key, collection));
        }
    }
    //return new array
    return newArray;
    }
    
   module.exports.map = map;
 
 
  /**
   * pluck: will take an array of objects and within each object find the value corresponding to the given property and return an array of these values.
   * 
   * @param{array} array: array of objects to be 
   * @param{property} : property whose values will be returned in the final array
   * 
   * @return {array} : return an array of property values. 
   *
   * */
   
   function pluck (array, property){

      return map(array,function(obj){
        return obj[property];
      });
    }

   module.exports.pluck = pluck;
   
   
  /**
   * every: will take a collection and a function and call the func for every element in the collection to test if they are ALL true, otherwise will return false..  
   * 
   * @param{array or object} collection: an array or object whose elements will pas thorugh teh callback function.
   * @param{function} func: function to be called on every element in the collection.
   * 
   * @return {boolean} true or false: will return true if ALL return values are true, or false if not. 
   *
   * */

    function every (collection, func){

    if(Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
         if (func === undefined){
             if(!collection[i]){
             
              return false;
          }
      }  else if (func (collection[i], i, collection) !== true){
          return false;
      }
      }
    } else if (typeof collection === "object"){
        for (let key in collection){
            if(func === undefined){
                if(!collection[key]){
                    return false;
                }
            }else if (func (collection[key], key, collection) !== true){
                return false;
            }
        }
    } return true;
    }
   
   module.exports.every = every;
   
   
  /**
   * some: will take a collection and a function and call the func for every element in the collection and will test if true for at least one element, otherwise will return false if ALL values are false.   
   * 
   * @param{array or object} collection : collection: an array or object whose elements will pas thorugh teh callback function.
   * @param{function} func : function to be called on every element in the collection.
   *  
   * @return {boolean} true or false: will return true if at least one return value is true, otherwise will return false. 
   *
   * */
   
   function some (collection, func){
    
   if(Array.isArray(collection)){ //make sure collection is an array
        for (let i = 0; i < collection.length; i++){ //loop through each property in the array
         if (func === undefined){ //edge-case: if function is not defined/not given
             if(collection[i]){ 
             
              return true;
          }
      }  else if (func (collection[i], i, collection) === true){
          return true;
      }
      }
    } else if (typeof collection === "object"){
        for (let key in collection){
            if(func === undefined){
                if(collection[key]){
                    return true;
                }
            }else if (func (collection[key], key, collection) === true){
                return true;
            }
        }
    } return false;
    }
   
   module.exports.some = some;
   
   
  /**
   * reduce: will loop through an array and apply a function to reduce each element starting at the given seed. After iterating through the whole array, the result will be a single value.
   * 
   * @param{array} array : array to reduce by running the func on every element
   * @param{funtion} func : function to be called on every element in the collection.
   * @param{number} seed : the given starting point and previous result from running the reduce function.
   * 
   * @return {*} : a single return value of the final function call after the last iteration.
   *
   * */
   
    function reduce (array, func, seed){
        let previous = seed;
        if(seed === undefined){
            let previous = array[0];
            for(let i = 1; i < array.length; i++){
                previous = func(previous, array[i], i );
            }
        return previous;
        }
        for(let i = 0; i < array.length; i++){
            previous = func(previous, array[i], i);
        }
        return previous;
        }

   module.exports.reduce = reduce;
   
   
  /**
   * extend: will take any number of objects and consolidate the properties by adding all properties to the first object.
   * 
   * @param{object} obj1: the object to add subsequest object properties into. 
   * @param{object} obj2...: subsequesnt object to consolidate into obj1.
   * 
   * @return {object} : an updated object containing object properties from all other parameter objects.
   *
   * */
   
   function extend (obj1, ...obj2){
    Object.assign(obj1, ...obj2);
    return obj1;
    }
    
   module.exports.extend = extend;