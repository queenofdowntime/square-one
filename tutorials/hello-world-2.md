# Hello World! (2)

## Task:
Change your "Hello World!" program to greet a specific person.

```sh
$ ./hello Marianne
Hello Marianne!
```

This task builds on the previous [Hello World](https://github.com/fouralarmfire/square-one/blob/master/tutorials/hello-world-1.md#hello-world-1) exercise.

## Part 1: say "Hello \<name\>!"

**Steps**:

1. To say hello to specific people, not the whole world, we want to be able to pass in
  arguments (args for short) to our program, something like: `./hello Marianne`.
  Args are most easily managed by capturing them as variables that we can use later.
  Variables (vars) in the terminal are declared like this: `cats="better than dogs"`.
  Vars are then called by using `$`: for example, `echo $cats` will return `better than dogs`.
  You can try that out on the command line:
	
	```sh
	name="Emma"
	animal="tiger" # set the variables
	echo "$name has a pet $animal" # use the variables
	```

1. Open `hello`.

1. First, we need to grab all the args passed to our program. The computer
  automatically assigns all args passed to a shell script to the var `@`.
  To save them to something more useful, we can put something like `name="$@"` at
  the top of our file.

1. Instead of "Hello World!" we can `echo "Hello $name!"`
    Your code should now look something like:

    ```sh
    name="$@"
    echo "Hello $name!"
    ```

1. Save and run, this time passing in a name: `./hello Marianne`

Go back to the [project setup tutorial](https://queenofdowntime.com/resources/tutorials/git#part-11-creating-a-work-in-progress-branch).
