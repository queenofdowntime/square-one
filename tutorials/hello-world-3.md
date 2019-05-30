# Hello World! (3)

## Task:
Fix your "Hello World!" program so that, if passed a name, it will greet that
user and otherwise will greet the world.

```sh
$ ./hello Marianne
Hello Marianne!

$ ./hello
Hello World!
```

This task builds on the previous [Hello World](https://github.com/fouralarmfire/square-one/blob/master/tutorials/hello-world-2.md#hello-world-2) exercise.

## Part 1: say "Hello \<name\>!" or "Hello World!"
Right now if you run your program without any args it will still work, but it will
have a random space: "Hello !".
So we should set a default which will be called whenever our code determines
that there are no args present. This will also solve our original problem of
not saying "Hello World!" anymore.

**Steps**:

1. Open your program again.
1. To make our program do one things under one set of circumstances, and something
	else under another, we are going to use `if/else` logic.

	`if/else` statements are used in all programming languages to set a logical
	sequence of events.
	`if` a condition exists `then` do one thing, `else` do another thing.

	We also need to check if the `name` variable has been set. There are several
	ways to do this and you can google for the variations. We are going to use `-n`
	right now.

	So in our code, somewhere under our name variable, we can remove our echo line
	and instead do:

	```sh
	if [[ -n $name ]]; then
	  echo "Hello $name!"
	else
	  echo "Hello World!"
	fi
	```

	The strange `fi` at the end tells the interpreter that the `if/else` conditional
	logic is over.

1. Save and run.


Go back to the [project setup tutorial](https://queenofdowntime.com/resources/tutorials/git#part-12-merging-branches).
