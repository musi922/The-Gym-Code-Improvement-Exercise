const calculateAverage = numbers => 
numbers.length === 0 ? 0 : numbers.reduce((sum,number)=> sum + number, 0) / numbers.length;