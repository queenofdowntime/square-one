# Hello World!
A simple shell script.

First of all what is Shell? In a nutshell (ha!), shamelessly ripped off from Wikipedia, shell is:
```
A shell script is a computer program designed to be run by the Unix shell,
a command-line interpreter.
The various dialects of shell scripts are considered to be scripting languages.
Typical operations performed by shell scripts include file manipulation,
program execution, and printing text.
```
Essentially a shell is a session in your terminal or command prompt (the thing hackers in movies use)
into which you enter commands to make your computer do some exciting things.

A shell script is a program written in a language the shell (terminal) can understand, interpret and execute.
Shell scripting is useful because it saves us from having to type each thing we want to do, line by line, at
the moment we want it.

Instead we can write everything we need to get done in a script, and simply run the program.

## Task:
Write a simple program which, if passed a name, will greet that user and otherwise
will greet the world.
```
$ ./hello Marianne
Hello Marianne!

$ ./hello
Hello World!
```

To complete this task you will need to have learned how to use the [Command Line](https://learnpythonthehardway.org/python3/appendixa.html).

The first thing you need to do is create a new repository. Don't forget to create a new repository online too (initialise without a README this time).:

```
cd ~
mkdir -p workspace/hello-world
cd workspace/hello-world
git init
git remote add origin <link-to-where-your-repo-is-online>
```
 
## Part 1: say "Hello World!"

Steps:

1. Create a file called `hello`
2. Open the file in a text editor.
3. On the first line of the file write: `#!/bin/bash`. This directs the loader to use
`bash` as the interpreter for your script.
(extra: You can also try with `#!/bin/sh` and google for the difference between POSIX shell
and bash.)
4. Beneath that we can write our program, which at this point is just a single bash
command. When we execute this script we want it to print "Hello World!" to the terminal.
Looking back at our list of [basic commands](https://learnpythonthehardway.org/python3/appendix-a-cli/ex1.html), `echo` is the one we want:
`echo "Hello World!"`
5. Save the file and go to your terminal.
6. Programs (which are not on the $PATH) are executed by prefixing `./` to the filename.
So for us: `./hello`
This should fail with something like `permission denied`.
All files on your computer have a set of permissions which dictate which users can do
what with them. To see the permissions of your hello script, run `ls -l hello`.
To the left of the returned line you should see something like `-rw-r--r--`.
File permission strings are grouped in sets of 3 plus the one on the far left, which usually
indicates whether something is a directory (run `ls -l` on something you know is a directory
and you should see a `d` occupying the far left spot). After that come the permission groups
which are:
  * first three - Owner (u)
  * middle three - Group (g)
  * last three - All Users (a or o)

  Each permission group has three permission types, which are:
  * r - read
  * w - write
  * x - execute

  If you can see the characters, then that group has those permissions. If not (they have a `-`)
  that group does not have those permissions.
  So, if our `hello` has `-rw-r--r--` we can tell that:
  * it is not a directory
  * the owner of the file has read and write permissions
  * other members of the group that the owner is in has read permissions
  * other users in general have read permissions

  This explains why we (as the owner of `hello`) can read and edit our script, but cannot
  execute it.
  For that we need to change the file mode using `chmod`. `+` gives powers to a permission group and
  `-` takes those powers away. To give ourselves (the owner) execute powers over this file we need
  to run `chmod u+x hello`. If we run `ls -l hello`, we should see `-rwxr--r--`.
  To give those powers to everyone we can run `chmod +x hello`, and to take them away;
  `chmod -x hello`.


7. Now that we have an executable script, `./hello` should print our greeting.

8. This seems like a good place for a first commit!
```
git status
git add hello
git commit -m "first commit - say hello"
git push -u origin master
```
n.b. you only need to `git push -u origin master` the first time, after that
`git push` is enough.

You can read more about file permissions [here](https://www.linux.com/learn/understanding-linux-file-permissions).



## Part 2: say "Hello World!" (again, but in a cool coder way)

Steps:

1. Open your `hello` script again. This time we are going to wrap our simple `echo` statement in
a function. Functions are ways to abstract code into useful and re-usable chunks. They should contain a group of
related commands that perform a single, specific task.
There are two ways to define functions in shell scripts; we are going to use the one which is compatible
with both `sh` and `bash`.
2. On an empty line above your `echo`, choose a name for your function. `say_hello_world()` seems like a
good choice. Function names should be as clear and descriptive as possible, while simultaneously
concise. Bash function declarations are indicated by the `()` at the end of the name, and names use
snake case (underscores where spaces would be).
3. On the same line, after the `()`, open a set of curly braces and close them on the line after
your `echo`. Your code should now look something like this:
  ```
  #!/bin/bash

  say_hello_world() {
    echo "Hello World!"
  }
  ```
4. Save your file, and run your script. Did nothing happen? Good.
This is because we are not actually calling that function we declared.
5. Open your file again, and this time at the bottom write `say_hello_world`.
6. Save and run. All cool?
7. Why did we call the function at the bottom of the file? Put the call at the top (under the #!/bin/bash)
and see what happens.
Bash is procedural and will read the file line by line top-down; if you call a function before
it has had a chance to read it, it will obviously be unable to run it.
8. Time for another commit? Think about what to put in the message, how can you
concisely describe what your program does now?

## Part 3: say "Hello \<name\>!"

Steps:

1. To say hello to specific people, not the whole world, we want to be able to pass in
arguments (args for short) to our script, something like: `./hello Marianne`.
Args are most easily managed in bash scripts by capturing them as variables that we can use later.
Variables (vars) in bash are declared like this: `cats="better than dogs"`.
Vars are then called by using `$`: for example, `echo $cats` will return `better than dogs`.
You can try that out on the command line.
2. Open `hello`.
3. First, we need to grab all the args passed to our script. Those args are already assigned
to the `@` symbol as a var so to save them to something more useful, we can put something like
`name="$@"` at the top of our file (under the #!/bin/bash).
4. We should then change our function to be called something more generic, like `say_hello()`
and instead of "Hello World!" we can `echo "Hello $name!"`
Your code should now look something like:
  ```
  #!/bin/bash

  name="$@"
  say_hello() {
    echo "Hello $name!"
  }

  say_hello
  ```
5. Save and run, this time passing in a name: `./hello Marianne`
6. Don't forget to commit!


## Part 4: say "Hello \<name\>!" or "Hello World!"
Now if you run your script without any args it will still work, but it will have a random space: "Hello !".
So we should set a default which will be called whenever our script determines that there are no args present.

`if/else` statements are used in all programming languages to set a logical sequence of events.

`if` a condition exists `then` do one thing, `else` do another thing.

Steps:

1. Open your script again.
2. We need to check if the `name` variable has been set. There are several ways to do this and you can
google for the variations. We are going to use `-n` right now.
So in our code, somewhere under our function, we can enter:

  ```
  if [[ -n $name ]]; then
    say_hello
  else
    echo "Hello World!"
  fi
  ```

3. Save and run.
4. But why are we using `echo` again when we already have a function which does that?
Edit your function so that it will take its own args, specifically the first one. As args are
automatically assigned to variables, to get at the first one we can simply use `$1`.
Our `say_hello()` function will now `echo "Hello $1!"` and when we call it in our `if` statement
we pass `$name`, if it exists, or `"World"` if it does not:
  ```
  #!/bin/bash

  name="$@"

  say_hello() {
    echo "Hello $1!"
  }

  if [[ -n $name ]]; then
    say_hello "$name"
  else
    say_hello "World"
  fi
  ```
5. Commit and push your masterpiece for all the world to admire!

Obviously this is an unecessarily complicated implementaion, but it will set you up with some of
the tools you need for the next exercises.

### Challenge Yourself!
Optional tasks you can investigate, research and solve on your own.
- Try removing quotes from around variable names, see what happens.
- Try passing multiple args, with and without quotes to see what happens.
- Try implementing the same code in at least 2 different ways.
- Return a different message when names have more than 6 characters.
- Passing in a lower case name? Figure out how to upcase it.
- Passing in an uncaplitalised name? Figure out how to capitalise it.


More information about shell scripting can be found [here](https://www.howtogeek.com/67469/the-beginners-guide-to-shell-scripting-the-basics/#).
