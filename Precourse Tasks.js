const isTen = (a,b)=>{ 
    //Your Code Here :-) 
    if (a+b === 10) {
        return 'makes 10'
    }
     else { return 'nope'
    }
    };
//task 2
    
    const getWordByNumber = (num)=>{ 
        //Your Code Here :-)
        if (num === 0) {
          return 'zero';
        } else if (num === 1) {
          return 'one';
        } else if (num === 2) {
          return 'two';
        } else if (num === 3) {
          return 'three';
        } else if (num === 4) {
          return 'four';
        } else if (num === 5) {
          return 'five';
        } else if (num === 6) {
          return 'six';
        } else if (num === 7) {
          return 'seven';
        } else if (num === 8) {
          return 'eight';
        } else if (num === 9) {
          return 'nine'
        } else {
          return 'invalid';
        }
        }  

//task 3

const biggestNumber = (a,b,c)=>{
    //Your Code Here :-)
    return Math.max (a,b,c)
    }

//task 4

const countOddFromZeroToNum = (num)=>{ 
    //Your Code Here :-)
    if (num%2 === 0) {
        return num/2
    } else {
        return num/2 +0.5
    }
    };

//task 5

const numFactorial = (num)=>{ 
    //Your Code Here :-)
    var result = num;
      if (num === 0 || num === 1) 
        return 1; 
      while (num > 1) { 
        num--;
        result *= num;
      }
      return result;
    }

//task 6

const divideOrHasSeven = (start,end)=>{
    const arr1 = [];
    const hasSeven = (a) => {
        if (a.toString().indexOf('7') > -1){
        return true;
         }
        }
    for (let i= start; i<=end; i++){
    if(i%7 === 0 || hasSeven(i) === true){
        arr1.push(i);
    }
    }
return arr1.length
}

//task 7

const primeNumberFromOneToN = (n)=>{
    const arr1 = [];
for (let i =2; i<= n; i++) {
    if (isPrime(i) === true) {
        arr1.push(i);
    }
};
function isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0)
            return false;
    return n > 1; i;
};
return arr1.length
}

//task 8

const capitalize = (word)=>{
    return word.replace(/[aeiouy]/g, function(l) {
       return l.toUpperCase();
     });
   }


//task 9

const longestWord = (sentence)=>{
    const regex1= sentence.replace(/\d/g,'');
       let array1= regex1.split(' ');
       const result = array1.filter(l => (l.match(/[a-z]/i)));
      
      function findLongestWord(arr) {
       var longestWord = arr.sort(function(a, b) { return b.length - a.length; });
       return longestWord[0];
      };
       return findLongestWord(result);
   };

//task 10

const sumArray = (arr)=>{ 
    const initialValue = 0;
    const sum = arr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue);
      return sum;
    };

//task 11

const minNumberInArr = (arr)=>{
    const min = Math.min( ...arr );
    return min;
 }

 //

 