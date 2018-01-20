# Fizzbuzz

## Task:
Write a program which will help you cheat at the drinking game fizzbuzz.

#### Rules:
- When the given number is divisible by 3, say fizz
- When the given number is divisible by 5, say buzz
- When the given number is divisible by 3 and 5, say fizzbuzz!
- When the given number does not fit any of the other rules, print the number
```
$ ./fizzbuzz 3
fizz

$ ./fizzbuzz 5
buzz

$ ./fizzbuzz 15
fizzbuzz!

$ ./fizzbuzz 7
'7' neither fizzed nor buzzed :(
```

To complete this task you will need to know about [modular arithmetic](https://betterexplained.com/articles/fun-with-modular-arithmetic/),
[operators](https://www.tutorialspoint.com/unix/unix-basic-operators.htm), [command substitution](http://pubs.opengroup.org/onlinepubs/009695399/utilities/xcu_chap02.html#tag_02_06_03) and maybe a bit more about [if/else statements](http://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php).

#### Don't forget about git
Remember to initialise a repository in your terminal and online (do not choose initialise with a readme)
```
cd ~
mkdir -p workspace/fizzbuzz
cd workspace/fizzbuzz
git init
git remote add origin <link-to-where-your-repo-is-online>
```

After you are ready to make your first commit:
```
git status
git add <files-you-have-made>
git commit -m "first commit - <what does it do so far?>"
git push -u origin master
```

Remember, you only need to `git push -u origin master` the first time, after that
`git push` is enough.
Commit regularly in small incremental steps. Don't just wait until the end; you
want to save your work as it progresses.

### Challenge Yourself!
- Set a default message for when no number is passed to your script.
- Write a for-loop to run your fizzbuzz against all numbers 1-1000000
  - make sure you also print out which number says what

