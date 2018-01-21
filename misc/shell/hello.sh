#!/bin/bash

name=${@:-"World"}

say-hello() {
  echo "Hello $name!"
}

say-hello
