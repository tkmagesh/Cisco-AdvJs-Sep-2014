create a function that checks if the given number is a prime number or not
The function should not execute the algorithm more than once for the given number


var isPrime = (function(){
   var cache = {};
   function checkPrime(n){
      if (n <= 3) return true;
      for(var i = 2;i<=(n/2);i++)
         if (n % i === 0 ) return false;
      return true;
   }
   return function(n){
      if (typeof cache[n] !== "undefined"){
         console.log("from cache..!");
         return cache[n];
      }
      console.log("juz processed..!");
      cache[n] = checkPrime(n);
      return cache[n];
   }
})()

function memorize(fn, context){
    var cache = {};
    return function(){
        var key = window.JSON.stringify(arguments);
        if (typeof cache[key] !== "undefined"){
            console.log("from cache.!")
            return cache[key];
        }
        console.log("juz processed.!");
        cache[key] = fn.apply(context,[].slice.call(arguments));
        return cache[key];
    }
}