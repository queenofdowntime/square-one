#!/bin/bash

fizzbuzz_says() {
  num=$1
  if [ $(expr $num % 15) == 0 ]; then
    echo "fizzbuzz"
  elif [ $(expr $num % 5) == 0 ]; then
    echo "buzz"
  elif [ $(expr $num % 3) == 0 ]; then
    echo "fizz"
  else
    echo "$num :("
  fi
}

fizzbuzz_says "$@"
