/*
  Write a function  ´´´fib(n)´´´ that takes in a number as an argument.
  The function should return the n-th number of the Fibonacci sequence.

*/

function fib(num) {
  if (num < 2) {
    return 1
  }
  return fib(num -1) + fib(num - 2)
}

fib(7)
fib(100)
