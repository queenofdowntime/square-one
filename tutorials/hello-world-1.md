# Hello World! (1)

## Task:
Write a simple program which will greet the world.
```
$ ./hello
Hello World!
```

To complete this task you will need to have learned how to use the [Command Line](https://learnpythonthehardway.org/python3/appendixa.html).
You should also have [set up your computer](https://github.com/fouralarmfire/square-one/blob/master/machine-setup.md#mac-osx-setup) to be ready to code.

For this exercise we are going to write something called a "Shell Script". A shell is a user-interface designed to provide direct access to an operating
system. Some shells have GUIs (Graphical User Interfaces), but these days when we talk about shells, we are mostly talking about Command Line Interfaces.
A Shell Script, therefore, is a program designed to be run by a shell. Shell scripts are amazingly useful for automating repetitive command line tasks.
Have to type the same 10 commands over and over? Throw them all in a file, and run just one line instead!

This is essentially what we are going to be doing here: taking commands we would usually type into the command line, and putting them into a file
which we can use to short-cut the process.

There are lots of different kinds of shell which will respond to different scripting languages, and you can go ahead and Google them.

## Part 1: say "Hello World!"

**Steps**:

1. In your project directory, create a file called `hello`:

    ```
    touch hello
    ```

1. Open the file in a [text editor](https://atom.io/).

	You should be able to run `atom hello`, but if that does not work you can open
	the atom app as you would open an app normally, and open the `hello` file the same way
	you would a new document in Word or Pages.

1. When we execute this program we want it to print "Hello World!" to the terminal.

	Looking back at our list of [basic commands](https://learnpythonthehardway.org/python3/appendix-a-cli/ex1.html), `echo` is the one we want:
	write `echo "Hello World!"` on the first line of your `hello` file.

1. Save the file and go to your terminal.

1. Programs in the terminal are executed (run) by prefixing `./` to the filename.

	You may be already thinking "but `echo` etc are programs and they don't need a `./`", and
	you would be correct. They can run without a `./` because the computer has been
	configured to know where those programs live and can find them itself.

	(If you are interested, use commands like `cd` and `ls` or `which` to find
	where the `echo`, and indeed the `cd`, `ls` and `which` commands live on your
	computer. If `which` looks new to you, don't be afraid to google)

	Our `hello` program is brand new, so we have to tell the computer that the
	program lives in the directory which we are currently in: `.`.
	(For bonus points you can google how to make the computer know where our program is
	by using the `$PATH` variable.)

	So for now, we need to run: `./hello`

	This should fail with something like `permission denied`.
  
1. All files on your computer have a set of permissions which dictate which users can do
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
	* nobody has execute permissions

	This explains why we (as the owner of `hello`) can read and edit our script, but cannot
	execute it.

	For that we need to change the file mode using `chmod`. `+` gives powers to a permission group and
	`-` takes those powers away. To give ourselves (the owner) execute powers over this file we need
	to run `chmod u+x hello`. If we run `ls -l hello`, we should see `-rwxr--r--`.
	To give those powers to everyone we can run `chmod +x hello`, and to take them away;
	`chmod -x hello`.

1. Now that we have an executable script, `./hello` should print our greeting.

Congratulations! You have just written your first ever program!

Go back to the [project setup tutorial](https://queenofdowntime.com/resources/tutorials/git#part-7-writing-and-publishing-our-first-program).
